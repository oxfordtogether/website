import React from "react"
import { Container } from "../global"
import { oxfordHubPracticalSupportForm, oxfordHubVolunteerForm } from "../../constants"
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

const Header = () => {
  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>Oxford Coronavirus Community Support</Subtitle>
            <h1>
              Let's support each other!
              <br />
            </h1>
            <h2>
              This site is to help people in Oxford help each other, as we
              handle Coronavirus.
            </h2>
            <HeaderForm>
              <ButtonLink href={oxfordHubPracticalSupportForm} target="_blank">
                <HeaderButton>Get support</HeaderButton>
              </ButtonLink>
              <ButtonLink href={oxfordHubVolunteerForm} target="_blank">
                <HeaderButton>Volunteer</HeaderButton>
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
