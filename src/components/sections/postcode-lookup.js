import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import {
  HeaderWrapper,
  HeaderTextGroup,
  HeaderForm,
  HeaderInput,
  HeaderButton,
  FormSubtitle,
} from "../helpers/header"

import { Section, Container } from "../global"

const PostcodeLookup = () => {
  const data = useStaticQuery(graphql`
    query {
      allNeighbourhoodsWithPostcodesCsv {
        nodes {
          Name
          Contact_Email
          Postcodes
        }
      }
    }
  `)

  const [inputValue, setInputValue] = React.useState("")
  const [postcode, setPostcode] = React.useState(null)
  const [neighbourhood, setNeighbourhood] = React.useState(null)

  const formatString = s => {
    return s.replace(/\s+/g, "").toLowerCase()
  }

  const handleChange = event => {
    setPostcode(null)
    setNeighbourhood(null)
    setInputValue(event.target.value)
  }

  function handleClick(event) {
    event.preventDefault()
    setPostcode(inputValue)

    if (!inputValue) return
    console.log(inputValue)
    const formatted = formatString(inputValue)
    const match = data.allNeighbourhoodsWithPostcodesCsv.nodes.find(n =>
      n.Postcodes.includes(formatted)
    )
    setNeighbourhood(match)
  }

  return (
    <React.Fragment>
      <Section>
        <StyledContainer>
          <h1>Find your neighbourhood contact</h1>

          <HeaderForm>
            <HeaderInput
              type="text"
              defaultValue={inputValue}
              placeholder="Your postcode"
              onChange={handleChange}
            />
            <HeaderButton onClick={handleClick}>Search</HeaderButton>
          </HeaderForm>

          <FormSubtitle>
            {postcode && !neighbourhood && "Postcode not found"}
            {neighbourhood && (
              <React.Fragment>
                <p>
                  You are in <strong>{neighbourhood.Name}</strong>{" "}
                  neighbourhood.
                </p>
                <p>
                  Email{" "}
                  <a href={`mailto:${neighbourhood.Contact_Email}`}>
                    {neighbourhood.Contact_Email}
                  </a>
                </p>
              </React.Fragment>
            )}
          </FormSubtitle>
        </StyledContainer>
      </Section>
    </React.Fragment>
  )
}

export default PostcodeLookup

const StyledContainer = styled(Container)`
  margin-top: 100px;
`
