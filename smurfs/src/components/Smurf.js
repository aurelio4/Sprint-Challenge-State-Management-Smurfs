import React from 'react'

const Smurf = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
      <h3>Weight: {props.age}</h3>
      <h3>Height: {props.height}</h3>
    </div>
  )
}

export default Smurf