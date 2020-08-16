import React, { Component } from "react"

import Layout from "../components/layout"
import ContactForm from "../components/contact"

export default class Contact extends Component {
  render() {
    return (
      <Layout tab="contact">
        <ContactForm />
      </Layout>
    )
  }
}
