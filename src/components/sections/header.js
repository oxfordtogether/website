import React from "react"
import { Container } from "../global"
import { oxfordHubVolunteerForm } from "../../constants"
import {
  HeaderWrapper,
  Flex,
  HeaderTextGroup,
  Subtitle,
  HeaderForm,
  ButtonLink,
  HeaderButton,
  FormSubtitle,
  ImageWrapper,
} from "../helpers/header"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>Oxford Coronavirus Community Support</Subtitle>
            <h1>
              Get support. Give support.
              <br />
            </h1>
            <h2>
              On this site you can discover and access all of the community support efforts across Oxford.
            </h2>
            <HeaderForm>
              <AnchorLink href="#support-forms"  target="_blank" style={{textDecoration: 'none'}}>
                <HeaderButton>Get support</HeaderButton>
              </AnchorLink>
              <ButtonLink href={oxfordHubVolunteerForm} target="_blank">
                <HeaderButton>Give support</HeaderButton>
              </ButtonLink>
            </HeaderForm>
            <FormSubtitle>
              Or scroll down for other ways to get involved{" "}
            </FormSubtitle>
          </HeaderTextGroup>
          <ImageWrapper>
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
