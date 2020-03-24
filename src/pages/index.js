import React from "react"
import { Switch, Route, HashRouter } from "react-router-dom"
import Main from "../components/main"
import styles from "./index.module.css"
import { Container, Row, Col } from "reactstrap"
import Header from "../components/Header"
import Nav from "../components/Nav/Nav"
import Music_Videos from "../components/music_videos"
import Narrative from "../components/narrative"
import Doc from "../components/doc"

const Index = () => {
  return (
    <HashRouter>
      <Container className={styles.Layout}>
        <Row fluid="lg" className={styles.Container}>
          <Header />
          <Col className={styles.Container__Nav}>
            <Nav />
          </Col>
          <Col>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/narrative" exact component={Narrative} />
              <Route path="/music_videos" exact component={Music_Videos} />
              <Route path="/doc" exact component={Doc} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </HashRouter>
  )
}

export default Index
