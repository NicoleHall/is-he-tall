import React from 'react'
import Header from './Header'

const pageStyle = {
  margin: "auto"
}

const LandingPage = () => {
  return(
    <div>
      <Header />
      <form className="container" style={pageStyle}>
        <div class="form-check form-check-inline" >
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
          <label class="form-check-label" for="inlineCheckbox1">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
          <label class="form-check-label" for="inlineCheckbox2">Female</label>
        </div>
      </form>
    </div>
  )
}

export default LandingPage
