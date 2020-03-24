import React from "react"
import { Container, Col } from "reactstrap"
import styles from "./Nav.module.css"
import { Link } from "react-router-dom"

const Nav = () => (
  <Container className={styles.Nav}>
    <Col md={4} className={styles.Nav__Logo}>
      <Link to="/">
        <h1>Michael Maddeaux </h1>
        <h2>Cinematographer</h2>
      </Link>
    </Col>
    <Col md={8} className={styles.Nav__Links}>
      <Link to="/narrative"> Narrative</Link>
      <Link to="/music_videos">Music Video</Link>
      <Link to="/doc">Doc </Link>
    </Col>
  </Container>
)

export default Nav
