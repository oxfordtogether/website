import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout/layout"

const MapContainer = styled.div`
  margin: 20px;
`
MapContainer.displayName = "MapContainer"

const NeighbourhoodsMap = () => (
  <Layout>
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1uXcwsMZa4GC9UuzXhlJiTWsvUDlG2nN3"
        width="800"
        height="800"
        frameborder="0"
        style={{ border: "0" }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </MapContainer>
  </Layout>
)

export default NeighbourhoodsMap
