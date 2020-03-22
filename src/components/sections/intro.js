import React from "react"
import styled from "styled-components"

import {
  oxfordHubPhoneSupportForm,
  oxfordHubPracticalSupportForm,
} from "../../constants"
import { Section, Container } from "../global"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { ButtonLink, HeaderButton } from "../helpers/header"

const Features = () => (
  <React.Fragment>
    <Section id="intro">
      <StyledContainer>
        <Subtitle>Oxford Together</Subtitle>
        <SectionTitle>A Community Response to Covid</SectionTitle>
        <JustifiedTextWrapper>
          <p>
            Oxford Together is a community-led response to Covid-19 coordinated
            by Oxford Hub.
          </p>
          <p>
            We are working with communities and local services to provide four
            key functions to support those who are at high-risk or currently
            self-isolating:
          </p>
          <ul>
            <li>
              Street champion recruiting and training, empowering local people
              to coordinate support on their street.
            </li>
            <li>Daily phone check-ins for isolated people.</li>
            <li>Practical support, such as shopping.</li>
            <li>Food distribution across Oxford.</li>
          </ul>
          <p>
            Our volunteers receive briefings and background checks if they are
            coming in contact with vulnerable individuals.
          </p>
          <p>
            Click the buttons below to sign up as a volunteer, or to receive
            support from Oxford Together.
          </p>
        </JustifiedTextWrapper>
      </StyledContainer>
    </Section>
    <Section id="support-forms">
      <Subtitle>Get Support</Subtitle>
      <SectionTitle>Sign up for Support</SectionTitle>
      <StyledContainer>
        <FeaturesGrid id="support-forms">
          <FeatureItem>
            <ButtonLink href={oxfordHubPhoneSupportForm} target="_blank">
              <HeaderButton tabIndex="-1">Register for phone check-ins</HeaderButton>
            </ButtonLink>
          </FeatureItem>
          <FeatureItem>
            <ButtonLink href={oxfordHubPracticalSupportForm} target="_blank">
              <HeaderButton tabIndex="-1">Get practical support</HeaderButton>
            </ButtonLink>
          </FeatureItem>
          <FeatureItem>
            <ButtonLink href="./postcode-lookup" target="_blank">
              <HeaderButton>Connect to your street champion</HeaderButton>
            </ButtonLink>
          </FeatureItem>
        </FeaturesGrid>
        <FeatureTextWrapper>
          <FeatureText>
            If you would like to request support over the phone rather than on
            an online form, then please ring 07957 105129 between 9am-5pm
            Monday-Friday
          </FeatureText>
        </FeatureTextWrapper>
      </StyledContainer>
    </Section>
  </React.Fragment>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h3`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr;
  margin: 100px auto 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 auto;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureTextWrapper = styled.div`
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 620px;
`

const JustifiedTextWrapper = styled(FeatureTextWrapper)`
  text-align: left;
`

const FeatureText = styled.p`
  text-align: center;
`
