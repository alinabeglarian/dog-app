import { SET_DOG_BREEDS } from '../actions/dogBreed'

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_DOG_BREEDS:
      return action.payload
      default:
        return state
  }
}