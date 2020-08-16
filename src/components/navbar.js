import React, { Component } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default class CardDeck extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#index">Robert Rayer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
            <Nav.Link href="https://github.com/RobertRayer/portfolio">Source</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/robert-rayer">LinkedIn</Nav.Link>
            <Nav.Link href="https://robertrayer.com">View in ASP.NET Core</Nav.Link>
            <Nav.Link href="https://robertrayer-portfolio-blazor.azurewebsites.net/">View in Blazor</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}