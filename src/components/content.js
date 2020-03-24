import React from "react"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import styles from "./content.module.css"

function Content(props) {
  return (
    <Row className={styles.Content__Gallery}>
      {props.data.map(({ node }) => (
        <Col className={styles.Content__Card}>
          <Row className={styles.Content__Card}>
            <Img
              className={styles.Content__Screenshot}
              fluid={node.screenshot.fluid}
            />
            <Col className={styles.Content__Info}>
              <p className={styles.Content__Title}>{node.title}</p>
              <p className={styles.Content__Description}>{node.description}</p>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  )
}

export default Content
