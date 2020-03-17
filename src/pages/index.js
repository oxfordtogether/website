import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Header from "../components/sections/header"
import GetInvolved from "../components/sections/get-involved"
import Intro from "../components/sections/intro"
import CommunityPartners from "../components/sections/community-partners"
import Footer from "../components/sections/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Oxford Together" />
    <Navigation />
    <Header />
    <Intro />
    <CommunityPartners />
    <GetInvolved />
    <Footer />
  </Layout>
)

export default IndexPage
