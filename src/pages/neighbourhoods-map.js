import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { Section } from "../components/global"
import Footer from "../components/sections/footer"

const MapContainer = styled.div`
  margin: 20px;
  iframe {
    width: 75%;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
    display: block;
    margin: auto;
  }
`
MapContainer.displayName = "MapContainer"

const NeighbourhoodsMap = () => (
  <Layout>
    <SEO title="Neighbourhoods map" />
    <Navigation />
    <Section>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1uXcwsMZa4GC9UuzXhlJiTWsvUDlG2nN3"
          height="800"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </MapContainer>
    </Section>
    <Footer />
  </Layout>
)

export default NeighbourhoodsMap
