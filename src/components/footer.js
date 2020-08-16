import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    return (
      <footer className="border-top footer text-muted text-center">
        <div className="container-fluid">
          <div>&copy; {new Date().getFullYear()} - Robert Rayer</div>
          <div>Built with React + Gatsby hosted with Netlify</div>
        </div>
      </footer>
    )
  }
}
