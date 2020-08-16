import React, { Component } from "react"

import Image from "react-bootstrap/Image"

export default class CardDeck extends Component {
  render() {
    const data = this.props
    return (
      <div className="card text-center">
        <a href={data.link} target="_blank" rel="noreferrer">
          <Image
            className="card-img-top mt-2 card-image"
            src={data.image}
            alt={data.altText}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{data.header}</h5>
          <p className="card-text">{data.description}</p>
        </div>
      </div>
    )
  }
}
