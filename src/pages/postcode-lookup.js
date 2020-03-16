import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import PostcodeLookup from "../components/sections/postcode-lookup"

import Footer from "../components/sections/footer"

const PostcodeLookupPage = () => (
  <Layout>
    <SEO title="Covid Support" />
    <Navigation />
    <PostcodeLookup />

    <Footer />
  </Layout>
)

export default PostcodeLookupPage

