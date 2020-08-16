import React, { Component } from "react"

import Card from "./card"

import ASPNetCoreImage from "../../images/aspnetcore.png"
import CSharpImage from "../../images/csharp.png"
import SQLServerImage from "../../images/sqlserver.png"
import VisualStudioImage from "../../images/Microsoft-Visual-Studio-icon.png"
import MSCAImage from "../../images/msca.png"

export default class CardDeck extends Component {
  render() {
    return (
      <div className="card-deck">
        <Card
          link="https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core"
          image={ASPNetCoreImage}
          altText="ASP.NET Core"
          header="ASP.NET Core"
          description="My current focus is creating web applications using HTML, JavaScript, JQuery, BootStrap, C# and the .NET Core 3.1 framework"
        />
        <Card
          link="https://docs.microsoft.com/en-us/dotnet/csharp/"
          image={CSharpImage}
          altText="C#"
          header="C#"
          description="Fluent in C# with over 5 years of experience creating applications across several different front and backend frameworks"
        />
        <Card
          link="https://www.microsoft.com/en-us/sql-server"
          image={SQLServerImage}
          altText="SQL Server"
          header="SQL Server"
          description="Over 5 years of experience creating new queries, views, tables, stored procedures, triggers, and improving existing query performance in SQL Server databases"
        />
        <Card
          link="https://visualstudio.microsoft.com/"
          image={VisualStudioImage}
          altText="Visual Studio"
          header="Visual Studio"
          description="Proficient with Visual Studio 2019, 2017, 2015, and 2012"
        />
        <Card
          link="https://www.youracclaim.com/badges/c1ff282a-e24d-4f9e-afe1-10f62f08d2c3/public_url"
          image={MSCAImage}
          altText="MSCA"
          header="Microsoft Certified Professional"
          description="Certified in SQL Server 2016 Database Development"
        />
      </div>
    )
  }
}
