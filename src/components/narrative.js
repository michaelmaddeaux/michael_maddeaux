import React from "react"
import { Container } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import Content from "../components/content"

function Narrative() {
  const response = useStaticQuery(getContent)
  const data = response.allContentfulNarrative.edges

  return (
    <Container style={container}>
      <Content data={data} />
    </Container>
  )
}

const container = {
  color: `white`,
  display: `grid`,
  width: `70vw`,
  maxWidth: `1280px`
}

export const getContent = graphql`
  query {
    allContentfulNarrative(sort: {order: DESC, fields: updatedAt}) {
      edges {
        node {
          description
          title
          screenshot {
            id
            fluid(maxWidth: 5000, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Narrative
