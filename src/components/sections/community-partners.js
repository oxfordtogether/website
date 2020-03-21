import React from "react"
import styled from "styled-components"

import {
  oxfordHubPhoneSupportForm,
  oxfordHubCommunityPartnersForm,
  mutualAidFacebook,
} from "../../constants"
import { Section, Container } from "../global"

import { ButtonLink, HeaderButton } from "../helpers/header"

const Features = () => (
  <Section id="intro">
    <StyledContainer>
      <Subtitle>Community Partners</Subtitle>
      <SectionTitle>Let's coordinate!</SectionTitle>
      <JustifiedTextWrapper>
        <p>
          Oxford Together is coordinated by the{" "}
          <a href="https://oxfordhub.org">Oxford Hub</a>, working in
          collaboration with many local groups, including the City Council,{" "}
          <a href={mutualAidFacebook}>Oxford Mutual Aid</a>, the Oxford Labour
          Party, and the Oxford Code Lab.
        </p>
        <p>
          Are you an organisation or charity in the Oxford area? How are you
          approaching coronavirus? Share your plans with us so that we can
          coordinate better!
        </p>
      </JustifiedTextWrapper>
      <FeaturesGrid>
        <FeatureItem>
          <ButtonLink href={oxfordHubCommunityPartnersForm} target="_blank">
            <HeaderButton>Connect your organisation</HeaderButton>
          </ButtonLink>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
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

const FeatureText = styled.p`
  text-align: center;
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
