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
  width: `70vw`,
  maxWidth: `1280px`
}

export const getContent = graphql`
  query {
    allContentfulDoc(sort: {order: ASC, fields: updatedAt}){
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
