import React from "react"
import styles from "./index.module.css"
import Header from "../components/Header"
import Nav from "../components/Nav/Nav"
import { Container, Row, Col } from "reactstrap"
import ReactPlayer from "react-player"

class Index extends React.Component {
  render() {
    return (
      <Container className={styles.Layout}>
        <Row fluid="lg" className={styles.Container}>
          <Header />
          <Col className={styles.Container__Nav}>
            <Nav />
          </Col>
          <Col className={styles.Container__Player}>
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://vimeo.com/360423669"
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Index
