import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderForm, HeaderInput, HeaderButton } from "../helpers/header"

const PostcodeLookup = () => {
  const data = useStaticQuery(graphql`
    query {
      allOxfordPostcodeToWardCsv(sort: { fields: postcode }) {
        nodes {
          postcode
          ward
        }
      }
    }
  `)

  return (
    <HeaderForm>
      <HeaderInput placeholder="Your postcode" />
      <HeaderButton>Search</HeaderButton>
    </HeaderForm>
  )
}

export default PostcodeLookup
