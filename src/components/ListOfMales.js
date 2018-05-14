import React from 'react';
import MaleProfileInputForm from './MaleProfileInputForm'
import Male from './Male'

const ListOfMales = ({listOfDudes}) => {
  let maleListItem = listOfDudes.map( (male,i) => <Male key={i} male={male} />)
  return(
    <div className="container">
      <h2>List Of Men Who Are Taller Than You</h2>
      <ul>
        {maleListItem}
      </ul>
    </div>
  )
}

export default ListOfMales
