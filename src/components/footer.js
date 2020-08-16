import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    return (
      <footer class="border-top footer text-muted text-center">
        <div class="container-fluid">
          <div>&copy; {new Date().getFullYear()} - Robert Rayer</div>
          <div>Built with React + Gatsby hosted with Netlify</div>
        </div>
      </footer>
    )
  }
}
