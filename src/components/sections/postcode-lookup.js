import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Map, TileLayer, GeoJSON } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import {
  HeaderForm,
  HeaderInput,
  HeaderButton,
  FormSubtitle,
} from "../helpers/header"
// import { Subtitle } from "./community-partners"

import { oxfordHubPracticalSupportForm } from "../../constants"

import { Section, Container } from "../global"

const PostcodeLookup = () => {
  const rawData = useStaticQuery(graphql`
    query {
      allNeighbourhoodsWithPostcodesCsv {
        nodes {
          Name
          Contact_Email
          Postcodes
          Area
        }
      }
      allNeighbourhoodsWithStreetsCsv {
        nodes {
          Neighbourhood
          Street
          Description
          GeometryJSON
          Phone
          Email
        }
      }
    }
  `)

  console.log(rawData)

  const dataLookup = rawData.allNeighbourhoodsWithPostcodesCsv.nodes.reduce(
    (result, item) => {
      const area = JSON.parse(item.Area)

      result[item.Name] = {
        email: item.Contact_Email,
        polygon: { ...area.features[0].geometry, name: item.Name },
        bbox: [
          [area.features[0].bbox[1], area.features[0].bbox[0]],
          [area.features[0].bbox[3], area.features[0].bbox[2]],
        ],
      }
      return result
    },
    {}
  )

  const polygons = Object.keys(dataLookup).map(obj => dataLookup[obj].polygon)

  const [inputValue, setInputValue] = React.useState("")
  const [postcode, setPostcode] = React.useState(null)
  const [neighbourhood, setNeighbourhood] = React.useState(null)
  const defaultMapFocus = {
    center: [51.755, -1.245],
    zoom: 12,
    bounds: null,
  }
  const [mapFocus, setMapFocus] = React.useState(defaultMapFocus)
  const [street, setStreet] = React.useState(null)

  const formatString = s => {
    return s.replace(/\s+/g, "").toLowerCase()
  }

  const handleChange = event => {
    console.log(event)
    setPostcode(null)
    setNeighbourhood(null)
    setInputValue(event.target.value)
    setMapFocus(defaultMapFocus)
  }

  function handleClick(event) {
    event.preventDefault()
    setPostcode(inputValue)

    if (!inputValue) return
    const formatted = formatString(inputValue)
    const match = rawData.allNeighbourhoodsWithPostcodesCsv.nodes.find(n =>
      n.Postcodes.includes(formatted)
    )
    setNeighbourhood(match)

    if (match) {
      setMapFocus({
        center: null,
        focus: null,
        bounds: dataLookup[match.Name].bbox,
      })
    } else {
      setMapFocus(defaultMapFocus)
    }
  }

  const handleResetClick = event => {
    event.preventDefault()
    setMapFocus(defaultMapFocus)
    setNeighbourhood(null)
    setPostcode(null)
    setInputValue("")
    setStreet(null)
  }

  // console.log(leafletElement)

  const renderNeighbourhoodPolygons = () => {
    return (
      <GeoJSON
        key="neighbourhood-polygons"
        data={polygons}
        onEachFeature={function(feature, layer) {
          layer.on("mouseover", function() {
            layer.bindTooltip(feature.name, {
              class: "neighbourhood-tooltip",
            })
            this.setStyle({
              fillOpacity: 0.5,
            })
          })
          layer.on("mouseout", function() {
            this.setStyle({
              fillOpacity: 0.3,
            })
          })
          layer.on("click", function() {
            const match = rawData.allNeighbourhoodsWithPostcodesCsv.nodes.find(
              n => n.Name === feature.name
            )
            setNeighbourhood(match)
            setMapFocus({
              center: null,
              focus: null,
              bounds: dataLookup[feature.name].bbox,
            })
          })
        }}
        style={{
          fillColor: "#075F5F",
          weight: 2,
          opacity: 1,
          color: "#075F5F",
          fillOpacity: 0.3,
        }}
      />
    )
  }

  const renderStreetPolygons = () => {
    const streets = rawData.allNeighbourhoodsWithStreetsCsv.nodes.filter(
      d => d.Neighbourhood === neighbourhood.Name
    )

    let polygons
    if (streets.length === 0) {
      polygons = dataLookup[neighbourhood.Name].polygon
    } else {
      polygons = streets.map(d => {
        return {
          ...JSON.parse(d.GeometryJSON).features[0].geometry,
          name: d.Street,
          email: d.Email,
          phone: d.Phone,
        }
      })
    }

    return (
      <GeoJSON
        key="street-polygons"
        data={polygons}
        onEachFeature={function(feature, layer) {
          // layer.on("mouseover", function() {
          //   console.log(feature)
          //   this.setStyle({
          //     fillOpacity: 0.7,
          //   })
          //   setStreet(feature)
          // })
          // layer.on("mouseout", function() {
          //   this.setStyle({
          //     fillOpacity: 0.5,
          //   })
          //   setStreet(null)
          // })
          layer.on("click", function() {
            // if (street)
            //   this.setStyle({

            //   })

            // this.setStyle({
            //   fillOpacity: street && feature.name == street.name ? 0.7 : 0.5,
            // })
            setStreet(feature)
          })
        }}
        style={{
          fillColor: "#4a708b",
          weight: 2,
          opacity: 1,
          color: "#4a708b",
          fillOpacity: 0.5,
        }}
      />
    )
  }

  const renderInfo = () => {
    if (neighbourhood) {
      console.log(rawData)
      const streets = rawData.allNeighbourhoodsWithStreetsCsv.nodes.filter(
        d => d.Neighbourhood === neighbourhood.Name
      )
      console.log(streets)
      return (
        <Info>
          <p>
           You are in <Bold>{neighbourhood.Name}</Bold> neighbourhood. The
            contact email for your neighbourhood is:{" "}
            <a href={`mailto:${neighbourhood.Contact_Email}`}>
              {neighbourhood.Contact_Email}
            </a>
          </p>
          {streets.length >= 1 && (
            <>
              <p>
                The streets in your neighbourhood with a street champion are
                shown on the map. Click on the map to see contact information
                for your street.
              </p>
              <p>
                Don't have a street champion yet? Please get in touch via the
                neighbourhood email:{" "}
                <a href={`mailto:${neighbourhood.Contact_Email}`}>
                  {neighbourhood.Contact_Email}
                </a>
              </p>
            </>
          )}
          {street && (
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "14px",
                padding: "10px",
                lineHeight: "1.5",
              }}
            >
              <Subtitle>Street info:</Subtitle>
              <br />
              {street.name}
              <div>
                Email:&nbsp;
                <a href={`mailto:${street.email}`}>{street.email}</a>
              </div>
              {street.phone && (
                <div>
                  Phone:&nbsp;
                  {street.phone}
                </div>
              )}
            </div>
          )}

          {/* {streets.map((s, index) => (
            <StreetInfo
              highlight={street && s.Street === street.name}
              key={index}
            >
              {s.Street}
              {s.Email && (
                <div>
                  Email:&nbsp;
                  <a href={`mailto:${s.Email}`}>{s.Email}</a>
                </div>
              )}
              {s.Phone && (
                <div>
                  Phone:&nbsp;
                  <a href={`mailto:${s.Phone}`}>{s.Phone}</a>
                </div>
              )}
            </StreetInfo>
          ))} */}
        </Info>
      )
    } else if (postcode && !neighbourhood) {
      return <Info>The postcode you entered has not been found.</Info>
    } else {
      return <div></div>
    }
  }

  return (
    <Section>
      <StyledContainer>
        <h1>Find your neighbourhood contact</h1>

        <p>
Use this search tool to contact your nearest street champion movement to ask for support or volunteer your time. Our street champion network are teams of individuals working to support people in need in their neighbourhoods. They are acting as individuals rather than supervised by the Oxford Hub team. If you are looking for support for a vulnerable adult and need a DBS checked, supervised volunteer, please click{" "}<a href={oxfordHubPracticalSupportForm}>here</a>..
        </p>

        <p>
          Enter a postcode in the search box or click on a neighbourhood on the
          map.
        </p>

        <HeaderForm onSubmit={handleClick}>
          <HeaderInput
            type="text"
            value={inputValue}
            placeholder="Your postcode"
            onChange={handleChange}
          />
          <HeaderButton onClick={handleClick}>Search</HeaderButton>
          &nbsp; &nbsp; &nbsp;
          <HeaderButton onClick={handleResetClick}>Reset</HeaderButton>
        </HeaderForm>

        <Flex>
          <MapContainer>
            <Map {...mapFocus}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {!!mapFocus.center
                ? renderNeighbourhoodPolygons()
                : renderStreetPolygons()}
            </Map>
          </MapContainer>
          {renderInfo()}
        </Flex>
      </StyledContainer>
    </Section>
  )
}

export default PostcodeLookup

export const StreetInfo = styled.div`
  color: ${props => (props.highlight ? "red" : "black")};
`

export const Bold = styled.span`
  font-weight: bolder;
  text-decoration: underline;
`

export const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
  display: inline;
`

const Info = styled.div`
  padding: 0px 50px 100px 40px;
`

const StyledContainer = styled(Container)`
  margin-top: 100px;
`

const Flex = styled.div`
  display: flex;
`

const MapContainer = styled.div`
  flex: 1;

  // required
  .leaflet-container {
    height: 600px;
  }

  max-width: 50%;
  min-width: 50%;

  // // tooltip style
  // .neighbourhood-tooltip {
  //   background: green;
  //   border: 2px solid cyan;
  // }
  // .leaflet-popup {
  //   display: none;
  // }
  // .leaflet-popup-tip-container {
  //   display: none;
  // }
`
