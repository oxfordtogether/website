import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import PostcodeLookup from "../components/sections/postcode-lookup"
import Footer from "../components/sections/footer"

const PostcodeLookupPage = () => (
  <Layout>
    <SEO title="Oxford Together - Postcode Lookup" />
    <PostcodeLookup />
    <Footer />
  </Layout>
)

export default PostcodeLookupPage
