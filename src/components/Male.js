import React, { Component } from 'react'
import ListOfMales from './ListOfMales'

const divStyle = {
  width: "400px"
}

const imageStyle = {
  height: "100%",
  width: "100%",
  margin: "auto"
}

const header = {
  borderBottom: "1px" }

const headerH1 = {
  borderBottom: "1px",
  display: "inline-block"
}

const headerSpan = {
   float: "right"
}


const Male = ({ male }) => {
  return (
    <div className="container">
        <div className="card" style={divStyle}>

            <img style={imageStyle} className="card-img-top"   src="https://www.herinterest.com/wp-content/uploads/2017/09/Top-20-Most-Handsome-Men-In-The-World-2017-1.jpg" alt="Card image cap">
            </img>

          <div className="card-body" style={header}>
            <h4 style={headerH1}>Name:</h4>
            <span style={headerSpan} className="card-text"> {male.maleName} </span><br/>

            <h4 style={headerH1}>Height:</h4>
            <span style={headerSpan} className="card-text">{male.maleHeightFeet} feet, {male.maleHeightInches} inches</span><br/>

            <h4 style={headerH1}>Age:</h4>
            <span style={headerSpan} className="card-text">{male.maleAge}</span><br/>

            <h4 style={headerH1}>Location:</h4>
            <span style={headerSpan} className="card-text">{male.maleCity}, {male.maleState} inches</span><br/>

          </div>

        </div>
      </div>
  )
}

export default Male
