import React from "react"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faFile,
  faEnvelope,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default ({ children, tab }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="Robert Rayer - Software Engineer at Quality Distribution, B.S. ISDS from Louisiana State University (LSU)"
        ></meta>
        <title>Robert Rayer</title>
        <html lang="en" />
      </Helmet>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Robert Rayer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" defaultActiveKey="home" activeKey={tab}>
            <Nav.Link href="/" eventKey="home">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link href="/resume" eventKey="resume">
              <FontAwesomeIcon icon={faFile} /> Resume
            </Nav.Link>
            <Nav.Link href="/contact" eventKey="contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact Me
            </Nav.Link>
            <Nav.Link
              href="https://github.com/RobertRayer/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> Source
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/robert-rayer"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </Nav.Link>
            <Nav.Link
              href="https://robertrayer.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCodeBranch} /> View in ASP.NET Core
            </Nav.Link>
            <Nav.Link
              href="https://robertrayer-portfolio-blazor.azurewebsites.net/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCodeBranch} /> View in Blazor
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container container-fluid py-5">{children}</div>
    </>
  )
}
