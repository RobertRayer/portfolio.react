import React, { Component } from "react"

import Layout from "../components/layout"
import ResumePdf from "../../images/resume_robert_rayer.pdf"

import "../styles/timeline.css"

export default class Resume extends Component {
  render() {
    return (
      <Layout tab="resume">
        <div class="main-container">
          <section id="timeline" class="timeline-outer">
            <div class="container" id="content">
              <div class="row">
                <div class="col s12 m12 l12">
                  <a href={ResumePdf}>Download as PDF</a>
                  <ul class="timeline">
                    <li class="event" data-date="02/19">
                      <h3>Software Engineer - Quality Distribution Inc.</h3>
                      <p>
                        Analysis, design, and development of new web
                        applications to improve efficiency of internal processes
                        utilizing new ASP.NET Core MVC sites and REST APIs using
                        C#, JavaScript, SQL, HTML, CSS, and BootStrap
                      </p>
                    </li>
                    <li class="event" data-date="04/18">
                      <h3>Technical Consultant - BST Global</h3>
                      <p>
                        Wrote estimates, designed solutions, and developed WPF
                        applications using C# with a SQL Server backend
                      </p>
                    </li>
                    <li class="event" data-date="01/18">
                      <h3>Senior Software Engineer - PTS Solutions</h3>
                      <p>
                        Made lead developer on the Jail Management System
                        rewrite as a WPF application using C# with a SQL Server
                        backend
                      </p>
                    </li>
                    <li class="event" data-date="01/17">
                      <h3>Development Engineer II - PTS Solutions</h3>
                      <p>
                        Played a pivotal role in the rewrite of the Computer
                        Aided Dispatch system as a WPF application using C# with
                        a SQL Server backend
                      </p>
                    </li>
                    <li class="event" data-date="01/16">
                      <h3>Software Developer - PTS Solutions</h3>
                      <p>
                        Helped with the initial design and architecture of a new
                        suite of WPF applications to replace legacy systems
                      </p>
                    </li>
                    <li class="event" data-date="12/15">
                      <h3>Graduated from LSU - B.S. ISDS</h3>
                      <p>
                        Graduated from LSU with a BS in Information Systems and
                        Decision Sciences
                      </p>
                    </li>
                    <li class="event" data-date="06/15">
                      <h3>Development Intern - PTS Solutions</h3>
                      <p>
                        Finished a winforms project to manage personel and
                        training for police officers
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <br />
        </div>
      </Layout>
    )
  }
}
