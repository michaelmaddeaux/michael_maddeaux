import React from "react"
import { Container, Col, Row } from "reactstrap"
import styles from "./Nav.module.css"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <Container className={styles.Nav}>
      <Col md={4} className={styles.Nav__Logo}>
        <h1>Michael Maddeaux </h1>
        <h2>Cinematographer</h2>
      </Col>
      <Col md={8} className={styles.Nav__Links}>
        <Link>Narrative</Link>
        <Link>Music Video</Link>
        <Link>Doc </Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </Col>
    </Container>
  )
}

export default Nav
