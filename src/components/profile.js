import React, { Component } from "react"

import ProfileImage from "../../images/profiledog.jpg"

export default class CardDeck extends Component {
  render() {
    return (
      <div className="row pt-5 pb-5">
        <div className="d-block m-auto">
          <img
            className="rounded profile-image"
            src={ProfileImage}
            alt="profile"
          />
        </div>
        <div className="col-lg-10 col-md-6">
          <div className="font-weight-bold">Robert Rayer</div>
          <div className="font-weight-bold">
            Software Engineer at Quality Distribution
          </div>
          <div>
            Experienced full stack developer that has worked on enterprise
            software across multiple different industries, including Law
            Enforcement, Project Management, Accounting, and Logistics after
            graduating from Louisiana State University with a B.S. in
            Information Systems and Decision Sciences.
          </div>
          <div>
            My current focus is in ASP.NET Core web applications following the
            MVC pattern with a SQL Server backend. I also have extensive
            experience working in WPF desktop applications.
          </div>
        </div>
      </div>
    )
  }
}
