import React from "react"
import { Container } from "../global"
import { oxfordHubVolunteerForm } from "../../constants"
import {
  HeaderWrapper,
  Flex,
  HeaderTextGroup,
  Subtitle,
  HeaderFormDiv,
  ButtonLink,
  HeaderButton,
  FormSubtitle,
  ImageWrapper,
} from "../helpers/header"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "people" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>Oxford Coronavirus Community Support</Subtitle>
            <h2>
              Get support. Give support.
              <br />
            </h2>
            <h3>Find out how you can get involved with Oxford Together</h3>
            <HeaderFormDiv>
              <AnchorLink
                href="#support-forms"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <HeaderButton>Get support</HeaderButton>
              </AnchorLink>
              <ButtonLink href={oxfordHubVolunteerForm} target="_blank">
                <HeaderButton>Give support</HeaderButton>
              </ButtonLink>
            </HeaderFormDiv>
            <FormSubtitle>
              Or scroll down for other ways to get involved{" "}
            </FormSubtitle>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
