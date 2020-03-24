import React from "react"
import { Container } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import Content from "../components/content"

function Music_Videos() {
  const response = useStaticQuery(getContent)
  const data = response.allContentfulMusicVideo.edges

  return (
    <Container style={container}>
      <Content data={data} />
    </Container>
  )
}

const container = {
  color: `white`,
  display: `grid`,
  width: `60vw`,
}

export const getContent = graphql`
  query {
    allContentfulMusicVideo {
      edges {
        node {
          description
          title
          screenshot {
            id
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Music_Videos
