import React from "react"
import { Container } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import Content from "../components/content"

function Doc() {
  const response = useStaticQuery(getContent)
  const data = response.allContentfulDoc.edges

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
    allContentfulDoc{
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

export default Doc
