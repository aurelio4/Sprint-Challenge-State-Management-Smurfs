import actionTypes from '../actions/actionTypes'

export const initialState = () => ({
  smurf: null,
  smurfToAdd: {
    name: '',
    age: '',
    height: ''
  }
})

export const reducer = (state = initialState(), action) => {
  switch(action.type) {
    case actionTypes.SMURF_TO_ADD_NAME_CHANGE:
      return {
        ...state,
        smurfToAdd: {
          ...state.smurfToAdd,
          name: action.payload
        }
      }
    case actionTypes.SMURF_TO_ADD_AGE_CHANGE:
      return {
        ...state,
        smurfToAdd: {
          ...state.smurfToAdd,
          age: action.payload
        }
      }
    case actionTypes.SMURF_TO_ADD_HEIGHT_CHANGE:
      return {
        ...state,
        smurfToAdd: {
          ...state.smurfToAdd,
          height: action.payload
        }
      }
    case actionTypes.GET_SMURFS:
      return {
        ...state,
        smurf: action.payload
      }
    default:
      return state
  }
}