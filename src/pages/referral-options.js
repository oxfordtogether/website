import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"
import { Container, Section } from "../components/global"
import styled from "styled-components"

const ReferralOptions = () => (
  <Layout>
    <SEO title="Oxford Together" />
    <Navigation />
    <Container>
      <Section>
        <StyledContainer>
          <h1>Support in Oxford City</h1>
          <p>
            - If you think an individual just needs to have a helpful neighbour,
            you can find a street champion in the area via the website{" "}
            <a
              href="https://oxfordtogether.org/postcode-lookup/"
              target="_blank"
            >
              postcode lookup
            </a>
            . This will connect you with someone very local, who can offer
            support (not necessarily a DBS checked individual). Where there
            isn’t a street champion locally, we will triage centrally and find a
            non DBS or DBS checked person (depending on the query)
          </p>
          <p>
            - If the referral is higher need or complex, you can send a
            practical support referral{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdR_Rot_eDoRpWgWUSe8xDUEY6uNf-3rHoqURCQfYxC4Kztmg/viewform"
              target="_blank"
            >
              form
            </a>{" "}
            and we can allocate a DBS checked volunteer (but this will be slower
            as we only want to use people very locally to minimise travel and we
            need to build up more coverage across the City)
          </p>
          <p>
            - If the person is generally anxious or just needs a friendly check
            in, refer for{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScrnON6LlkJvxoB9O2Mq-OnK_Wp7iV0GW2JYUZ7hv_hSHrMbQ/viewform"
              target="_blank"
            >
              phone link
            </a>{" "}
            and they will get a regular call (up to daily if desired) to share
            info, say hi, and a bit of social time.
          </p>
          <p>
            - If the query is about food, there are lots of details about food{" "}
            <a
              href="https://docs.google.com/document/d/1PQdt1C4RmMh1-Iy_7HroiRpyZpLwf_ULkIHKvwedbOw/edit#heading=h.tyb8ttmooitv"
              target="_blank"
            >
              here
            </a>{" "}
            which we're updating regularly.
          </p>
        </StyledContainer>
      </Section>
    </Container>
    <Footer />
  </Layout>
)

export default ReferralOptions

const StyledContainer = styled(Container)`
  margin-top: 100px;
`
