import React, { useEffect } from "react";
import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'
import axios from 'axios'
import { connect } from 'react-redux'

import {
  handleSmurfToAddNameChange,
  handleSmurfToAddAgeChange,
  handleSmurfToAddHeightChange,
  getSmurfs
} from '../redux/actions/actionCreators'

// styling stuff
import "./App.css";
import { } from 'reactstrap'

const App = (props) => {
  const handleNameChange = e => props.handleSmurfToAddNameChange(e.target.value)
  const handleAgeChange = e => props.handleSmurfToAddAgeChange(e.target.value)
  const handleHeightChange = e => props.handleSmurfToAddHeightChange(e.target.value)

  const postSmurfInfo = smurf => {
    axios.post('http://localhost:3333/smurfs', props.smurfToAdd)
      .then(res => props.getSmurfs(res.data))
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => props.getSmurfs(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <SmurfForm postSmurfInfo={postSmurfInfo} name={props.smurfToAdd.name} nameChange={handleNameChange} age={props.smurfToAdd.age} ageChange={handleAgeChange} height={props.smurfToAdd.height} heightChange={handleHeightChange} />
      <SmurfList smurfs={props.smurf} />
    </>
  );
}

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    smurfToAdd: state.smurfToAdd
  }
}

export default connect(mapStateToProps, { getSmurfs, handleSmurfToAddNameChange, handleSmurfToAddAgeChange, handleSmurfToAddHeightChange })(App);
