import React from "react"
import { Row, Col } from "reactstrap"
import ReactPlayer from "react-player"
import styles from "./main.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Main() {
  const response = useStaticQuery(getContent)
  const data = response.allContentfulAbout.edges
  const images = data[0].node.image

  console.log(images)
  return (
    <>
      <Row className={styles.Vimeo}>
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://vimeo.com/360423669"
        />
      </Row>
      <hr></hr>
      <Row className={styles.About}>
        <Col className={styles.About__Image}>
          <Col className={styles.About__Image_Test}>
            <Img fluid={images[1].fluid} />
          </Col>
        </Col>
        <Col className={styles.About__Bio}>
          <Col>
            <p>
              Michael Hitoshi Maddeaux is a Toronto-based cinematographer. He
              received his BFA in Film Production from York University where he
              specialized in cinematography. To date he has shot a variety of
              different projects ranging anywhere from narrative short films, to
              docu-drama television series. His work has had the opportunity to
              screen in festivals such as Buffer Festival, and at venues such as
              the TIFF Bell Lightbox.
              <br />
              <br />
              In addition to his work as a cinematographer, he has worked for
              several years as a 1st AC and as a Gaffer on many narrative
              projects (shorts, features, web series) and television series.
            </p>
          </Col>
          <Col className={styles.About__Logo}>
            <Img className={styles.About__Logo_Award} fluid={images[0].fluid} />
            <p>She's A Dime by Shoyu Films ​</p>
          </Col>
        </Col>
      </Row>

      <hr></hr>
      <Row className={styles.Contact_Info}>
        <Col className={styles.Contact_Info__Phone}>
          <p>Tel: 289-338-0717 </p> <p>/</p>
          <p>Email: michaelmaddeaux4@gmail.com</p>
        </Col>
        <Col className={styles.Contact_Info__Social_Media}>
          <a href="https://www.instagram.com/stories/michaelmaddeaux/">
            Instagram
          </a>
          / <a href="https://vimeo.com/user19344922">Vimeo</a> /
          <a href="https://www.imdb.com/name/nm6295901/?fbclid=IwAR3y3MGkoRgqoTyGH7nPNjVEBSTJFvEwKg-MF_TIBB-ZgJaJAo6Vl2jlMZs">
            IMDB
          </a>
        </Col>
      </Row>
      <hr></hr>
    </>
  )
}

export const getContent = graphql`
  query {
    allContentfulAbout {
      edges {
        node {
          id
          image {
            fluid(maxWidth: 5000) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Main
