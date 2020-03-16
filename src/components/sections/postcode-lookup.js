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

  const [inputValue, setInputValue] = React.useState("")
  const [postcode, setPostcode] = React.useState(null)

  const renderWard = () => {
    if (!postcode) return null

    const match = data.allOxfordPostcodeToWardCsv.nodes.find(
      n => n.postcode === postcode
    )

    if (!match) return <div>Unable to find a match</div>
    return <div>{match.ward}</div>
  }

  const handleChange = event => {
    setPostcode(null)
    setInputValue(event.target.value)
  }

  function handleClick(event) {
    event.preventDefault()
    setPostcode(inputValue)
  }

  return (
    <HeaderForm>
      <HeaderInput
        type="text"
        defaultValue={inputValue}
        placeholder="Your postcode"
        onChange={handleChange}
      />
      <HeaderButton onClick={handleClick}>Search</HeaderButton>
      {renderWard()}
    </HeaderForm>
  )
}

export default PostcodeLookup
