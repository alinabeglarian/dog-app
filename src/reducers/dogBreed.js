import { SET_DOG_BREEDS } from '../actions/dogBreed'

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_DOG_BREEDS:
      return [...state, ...Object.keys(action.payload)] 
    default:
      return state
  }
}