import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"
import { Container, Section } from "../components/global"
import styled from "styled-components"
import ReactHtmlParser from "react-html-parser"

const faqs = [
  {
    question: `What is Oxford Together?`,
    answer: `<p>Oxford Together is a campaign launched by <a href="https://www.oxfordhub.org/" target="_blank">Oxford Hub</a> to empower the Oxford community to support one another through the Covid-19 situation with small acts of kindness, as well as taking referrals to support those who are at high risk or vulnerable in our communities.  Oxford Hub is a local social and environmental action charity, which has been running for 12 years, specialising in community-led action.</p>`,
  },
  {
    question: `What do Oxford Together volunteers do?`,
    answer: `<p>Volunteers are being asked to sign up for a number of tasks;</p>
        <ul>
            <li>Street champion work, coordinating support on their local street.</li>
            <li>Daily phone check-ins for isolated people who are referred.
            </li>
            <li>Practical support, such as shopping, for people who are referred.</li>
            <li>Food distribution for communities across Oxford.</li>
        </ul>
        <p>Most volunteers will just do one of these roles, but we’re encouraging everyone to be checking in on their neighbours and friends regardless of your volunteering role!</p>
      `,
  },
  {
    question: `What do street champions do?`,
    answer: `<p>Our street champions are responsible for coordinating action on their street. They are encouraged to post flyers through mailboxes, knock on doors, and generally check that everyone on their street is okay - as well as rallying support from other members of the street!</p>
`,
  },
  {
    question: `How can I sign up to volunteer?`,
    answer: `<p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScfYSgB7G-eWo6rLZga11g5-ictGxYRq1OvHyx270dZcCLwCQ/viewform"
        target="_blank"
      >
        Click here to sign up to volunteer and find out more about what we are
        doing.
      </a></p>
    `,
  },
  {
    question: `How can I refer a vulnerable person for support?`,
    answer: `<p>Firstly, we want to connect people to people offering support in their street where possible. You can look up and contact your nearest Street Champion using <a href="https://oxfordtogether.org/postcode-lookup/" target="_blank">this search function</a>. Local Street Champions are often the fastest and most efficient way to get support to people.</p>

    <p>Secondly, you can refer them for a daily phone check in using <a href="https://docs.google.com/forms/d/e/1FAIpQLScrnON6LlkJvxoB9O2Mq-OnK_Wp7iV0GW2JYUZ7hv_hSHrMbQ/viewform" target="_blank">this form</a>. This is for people who are isolated and need social support.</p>

    <p>Finally, you can refer them for more specialist support using <a href="https://docs.google.com/forms/d/e/1FAIpQLSdR_Rot_eDoRpWgWUSe8xDUEY6uNf-3rHoqURCQfYxC4Kztmg/viewform" target="_blank">this form</a>. This is for people who are more vulnerable or have more complex needs than most. If the referral isn't complex or high-need, we'll be passing it to their nearest Street Champion.</p>`,
  },
  {
    question: `I need support - how do I access it?`,
    answer: `<p>If you have a simple request such as shopping or walking the dog, check who your nearest Street Champion is. They are best-placed to provide quick, local support to their neighbourhood through simple tasks. Our Street Champions are self-organising members of the community. <a href="https://oxfordtogether.org/postcode-lookup/" target="_blank">You can find your nearest street champion here.</a></p>

      <p>If you’d like a DBS-checked volunteer to provide practical support, regularly or as a one-off, you can sign up using <a href="https://docs.google.com/forms/d/e/1FAIpQLSdR_Rot_eDoRpWgWUSe8xDUEY6uNf-3rHoqURCQfYxC4Kztmg/viewform" target="_blank">this form</a>.</p>

      <p>If you’d like regular check ins over the phone, you can sign up using <a href="https://docs.google.com/forms/d/e/1FAIpQLScrnON6LlkJvxoB9O2Mq-OnK_Wp7iV0GW2JYUZ7hv_hSHrMbQ/viewform" target="_blank">this form</a>. This is for people who are isolated and would like someone to chat to during this difficult time.</p>
      `,
  },
  {
    question: `How do you prepare volunteers for their roles?`,
    answer: `<p>Both phone check-in volunteers and street champions receive full briefings and sign-posting resources for their roles. Practical support volunteers must have a DBS check from within the last three years to provide support to more vulnerable individuals and also receive briefing documents.</p>`,
  },
  {
    question: `I don’t have a DBS Check, what can I do to help?`,
    answer: `<p>If you don’t have a DBS check, don’t worry! You can still help out.</p>
    <p>Find your local street champion <a href="https://oxfordtogether.org/postcode-lookup/" target="_blank">here</a>, and get in touch with them. They will be able to add you to the local WhatsApp chat and get you involved in local action.</p>

    <p>In addition to this, food delivery volunteers are in high demand, which is a role that does not require a DBS check, so we will be in touch if we have a food distribution need in your local area.</p>`,
  },
  {
    question: `Where can I get food for myself or others?`,
    answer: `<p>You can view information about all the options for accessing food through Oxford Together <a href="https://docs.google.com/document/d/1PQdt1C4RmMh1-Iy_7HroiRpyZpLwf_ULkIHKvwedbOw/edit#heading=h.tyb8ttmooitv" target="_blank">here</a>.</p>`,
  },
]

const renderFAQ = (faq, i) => {
  return (
    <div key={i}>
      <Question key={`question_${i}`}>{ReactHtmlParser(faq.question)}</Question>
      <Answer key={`answer_${i}`}>{ReactHtmlParser(faq.answer)}</Answer>
    </div>
  )
}
{
}

const FAQPage = () => (
  <Layout>
    <SEO title="Oxford Together" />
    <Navigation />
    <Container>
      <Section>
        <StyledContainer>
          <h1>Oxford Together FAQs</h1>
          {faqs.map((faq, i) => renderFAQ(faq, i))}
          <ExtraInfo>
            Didn’t find the answer to your question? You can email us at{" "}
            <a href="mailto:hello@oxfordtogether.org">
              hello@oxfordtogether.org
            </a>{" "}
            and we’ll get back to you as soon as possible.
          </ExtraInfo>
        </StyledContainer>
      </Section>
    </Container>
    <Footer />
  </Layout>
)

export default FAQPage

const StyledContainer = styled(Container)`
  margin-top: 100px;
`

const Question = styled.div`
  font-weight: bold;
  font-size: 22px;
  padding-top: 20px;
`

const Answer = styled.div`
  font-size: 17px;
`

const ExtraInfo = styled.div`
  font-style: italic;
  padding-top: 30px;
  padding-bottom: 10px;
`
