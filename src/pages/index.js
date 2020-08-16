import React, { Component } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
import CardDeck from "../components/carddeck"
import Profile from "../components/profile"

export default class Home extends Component {
  render() {
    return (
      <Layout tab="home">
        <Profile />
        <CardDeck />
      </Layout>
    )
  }
}
