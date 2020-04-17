import actionTypes from './actionTypes'

export const handleSmurfToAddNameChange = (name) => ({ type: actionTypes.SMURF_TO_ADD_NAME_CHANGE, payload: name })
export const handleSmurfToAddAgeChange = (age) => ({ type: actionTypes.SMURF_TO_ADD_AGE_CHANGE, payload: age })
export const handleSmurfToAddHeightChange = (height) => ({ type: actionTypes.SMURF_TO_ADD_HEIGHT_CHANGE, payload: height })
export const getSmurfs = (smurfs) => ({ type: actionTypes.GET_SMURFS, payload: smurfs })