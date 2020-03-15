import React from "react"
import styled from "styled-components"
import { GoMarkGithub as GithubIcon } from "react-icons/go"
import { newGithubIssue } from "../../constants"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <Container>
      <FooterNote>
        Want to add/change something on the website? <StyledLink href={newGithubIssue} target="_blank">Request a change </StyledLink>
        on <SocialLink href={newGithubIssue} target="_blank">Github <GithubIcon /></SocialLink>.
      </FooterNote>
    </Container>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`
const FooterNote = styled.span`
  ${props => props.theme.font_size.xxsmall}
`

const SocialLink = styled.a`
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.accent};
  text-decoration: none;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`



const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
