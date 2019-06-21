import { SET_DOG_BREEDS } from '../actions/dogBreed'

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_DOG_BREEDS:
<<<<<<< HEAD
<<<<<<< HEAD
      return [ ...Object.keys(action.payload)] 
=======
      return [...Object.keys(action.payload)]
>>>>>>> feat/gameone
=======
      return [...Object.keys(action.payload)]
>>>>>>> aa82cbf40263fd01453551fecace2bae2bcdb91c
    default:
      return state
  }
}