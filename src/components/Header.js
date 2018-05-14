import React from 'react'
const headerStyle = {
  color: '#FF686B',
  backgroundColor: '#A5FFD6',
  fontSize: "50px",

  borderRadius: "10px",
  marginBottom: "20px"
};

const hOneStyle = {
  margin: "0px",
}

const hFourStyle = {
  margin: "0px"
}

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={hOneStyle}>Is He Tall?</h1>
      <h4 style={hFourStyle}>The Only Dating App That Has Your Top Priority In Mind</h4>
    </header>
  )
}
export default Header
