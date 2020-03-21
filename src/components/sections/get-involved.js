import React from "react"
import styled from "styled-components"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import { Section, Container } from "../global"
import { mutualAidFacebook, oxfordHubVolunteerForm } from "../../constants"

const Features = () => (
  <Section id="get-involved">
    <StyledContainer>
      <Subtitle>Get involved</Subtitle>
      <SectionTitle>Join the community</SectionTitle>
      <FeaturesGrid>
        <FeatureItem href={mutualAidFacebook} target="_blank">
          <FeatureTitle>Oxford Mutual Aid Facebook group</FeatureTitle>
          <FeatureText>
          </FeatureText>
        </FeatureItem>
        <FeatureItem href={oxfordHubVolunteerForm} target="_blank">
          <FeatureTitle>Volunteer with the Oxford Hub</FeatureTitle>
          <FeatureText>
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
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
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 ;
  }
`

const FeatureItem = styled(OutboundLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  background-color: ${props => props.theme.color.background.light};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.color.black.lightest};
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
