import { SET_DOG_BREEDS } from '../actions/dogBreed'

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_DOG_BREEDS:
<<<<<<< HEAD
      return [ ...Object.keys(action.payload)] 
=======
      return [...Object.keys(action.payload)]
>>>>>>> feat/gameone
    default:
      return state
  }
}