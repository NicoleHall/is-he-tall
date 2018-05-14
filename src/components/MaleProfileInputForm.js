import React from 'react';
const formStyle = {
  backgroundColor: "#7EC0EE",
  borderRadius: "10px",
  padding: "10px",
  borderTop: "20px",
  width: "45%",
  float: "left",
  marginRight: "5px"

}
const MaleProfileInputForm = () => {
  return (
    <div style={formStyle}>
      <h2>What Up Tall Guy? Tell Us A Little About Yourself</h2>
      <form>
        <div>
        <label htmlFor="maleName">What Is Your Name?  </label>
          <input
            type='text'
            name='maleName'
            id='maleName'
            autoComplete='off'
          />
          </div>
          <div>
            <label htmlFor="maleHeightFeet">How Many Feet Tall Are You?  </label>
              <input
                placeholder="example: 5"
                type='text'
                name='maleHeightFeet'
                id='maleHeightFeet'
                autoComplete='off'
              />
          </div>
          <div>
            <label htmlFor="maleHeightInches">Additionally, how many inches  </label>
              <input
                placeholder="example: 11"
                type='text'
                name='maleHeightInches'
                id='maleHeightInches'
                autoComplete='off'
              />
          </div>
          <p>*If you follow the example, it would mean you're 5' 11''</p>
          <div>
            <label htmlFor="maleAge">How old are you?  </label>
              <input
                type='text'
                name='maleAge'
                id='maleAge'
                autoComplete='off'
              />
          </div>
          <div>
            <label htmlFor="maleCity">What city do you live in?  </label>
              <input
                type='text'
                name='maleCity'
                id='maleCity'
                autoComplete='off'
              />
          </div>
          <div>
            <label htmlFor="maleState">What state do you live in?  </label>
            <select>
              <option value="CO">Colorado</option>
            	<option value="AL">Alabama</option>
            	<option value="AK">Alaska</option>
            	<option value="AZ">Arizona</option>
            	<option value="AR">Arkansas</option>
            	<option value="CA">California</option>
            	<option value="CT">Connecticut</option>
            	<option value="DE">Delaware</option>
            	<option value="DC">District Of Columbia</option>
            	<option value="FL">Florida</option>
            	<option value="GA">Georgia</option>
            	<option value="HI">Hawaii</option>
            	<option value="ID">Idaho</option>
            	<option value="IL">Illinois</option>
            	<option value="IN">Indiana</option>
            	<option value="IA">Iowa</option>
            	<option value="KS">Kansas</option>
            	<option value="KY">Kentucky</option>
            	<option value="LA">Louisiana</option>
            	<option value="ME">Maine</option>
            	<option value="MD">Maryland</option>
            	<option value="MA">Massachusetts</option>
            	<option value="MI">Michigan</option>
            	<option value="MN">Minnesota</option>
            	<option value="MS">Mississippi</option>
            	<option value="MO">Missouri</option>
            	<option value="MT">Montana</option>
            	<option value="NE">Nebraska</option>
            	<option value="NV">Nevada</option>
            	<option value="NH">New Hampshire</option>
            	<option value="NJ">New Jersey</option>
            	<option value="NM">New Mexico</option>
            	<option value="NY">New York</option>
            	<option value="NC">North Carolina</option>
            	<option value="ND">North Dakota</option>
            	<option value="OH">Ohio</option>
            	<option value="OK">Oklahoma</option>
            	<option value="OR">Oregon</option>
            	<option value="PA">Pennsylvania</option>
            	<option value="RI">Rhode Island</option>
            	<option value="SC">South Carolina</option>
            	<option value="SD">South Dakota</option>
            	<option value="TN">Tennessee</option>
            	<option value="TX">Texas</option>
            	<option value="UT">Utah</option>
            	<option value="VT">Vermont</option>
            	<option value="VA">Virginia</option>
            	<option value="WA">Washington</option>
            	<option value="WV">West Virginia</option>
            	<option value="WI">Wisconsin</option>
            	<option value="WY">Wyoming</option>
            </select>
          </div>
          <div>
            <label htmlFor="maleCelebrity">What celebrity do you most closely resemble?  </label>
              <input
                type='text'
                name='maleCelebrity'
                id='maleCelebrity'
                autoComplete='off'
              />
          </div>
      </form>
    </div>
  )
}

export default MaleProfileInputForm
