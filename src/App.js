import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import MaleProfileInputForm from './components/MaleProfileInputForm'
import FemaleProfileInputForm from './components/FemaleProfileInputForm'
import ListOfMales from './components/ListOfMales'
import Male from './components/Male'

class App extends Component {
  state = {

    maleUsers: [{
      maleName: "Doug Funny",
      maleHeightFeet: "5",
      maleHeightInches: "11",
      maleAge: "25",
      maleCity: "Bloomington",
      maleState: "IA",
      maleCelebrity: "Patrick Stewart"
    },

    {
      maleName: "Joe Giudice",
      maleHeightFeet: "5",
      maleHeightInches: "3",
      maleAge: "45",
      maleCity: "Franklin Lake",
      maleState: "NJ",
      maleCelebrity: "James Gandolfini"
    },

    {
      maleName: "Max Montclair",
      maleHeightFeet: "6",
      maleHeightInches: "5",
      maleAge: "41",
      maleCity: "Nederland",
      maleState: "CO",
      maleCelebrity: "Seann William Scott"
    }],
    femaleUsers: [{
      femaleName: "Olivia Otter",
      femaleHeightFeet: "5",
      femaleHeightInches: "3",
      femaleAge: "25",
      femaleCity: "Denver",
      femaleState: "CO",
      femaleCelebrity: "Jennifer Lawrence"
    },

    {
      femaleName: "Shonda Delaney",
      femaleHeightFeet: "6",
      femaleHeightInches: "0",
      femaleAge: "25",
      femaleCity: "San Francisco",
      femaleState: "CA",
      femaleCelebrity: "Jennifer Lawrence"
    },

    {
      femaleName: "Abigail Pepper",
      femaleHeightFeet: "7",
      femaleHeightInches: "0",
      femaleAge: "55",
      femaleCity: "Thronton",
      femaleState: "CO",
      femaleCelebrity: "Kylie Jenner"
    }]

  }
  render() {

    return (
      <div className="container-fluid">
        <LandingPage />
        <MaleProfileInputForm/>
        <FemaleProfileInputForm/>
        <ListOfMales listOfDudes={this.state.maleUsers}/>

      </div>
    );
  }
}

export default App;
