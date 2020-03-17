import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import PostcodeLookup from "../components/sections/postcode-lookup"
import { HeaderWrapper, Flex } from "../components/helpers/header"
import Footer from "../components/sections/footer"
import { Container } from "../components/global"

const PostcodeLookupPage = () => (
  <Layout>
    <SEO title="Covid Support" />
    <Navigation />
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <PostcodeLookup />
        </Flex>
      </Container>
    </HeaderWrapper>
    <Footer />
  </Layout>
)

export default PostcodeLookupPage
