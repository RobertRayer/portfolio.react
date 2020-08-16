import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

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
            <Nav.Link href="/" eventKey="home">Home</Nav.Link>
            <Nav.Link href="/resume" eventKey="resume">Resume</Nav.Link>
            <Nav.Link href="/contact" eventKey="contact">Contact Me</Nav.Link>
            <Nav.Link href="https://github.com/RobertRayer/portfolio">
              Source
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/robert-rayer">
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://robertrayer.com">
              View in ASP.NET Core
            </Nav.Link>
            <Nav.Link href="https://robertrayer-portfolio-blazor.azurewebsites.net/">
              View in Blazor
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container container-fluid py-5">{children}</div>
    </>
  );
};
