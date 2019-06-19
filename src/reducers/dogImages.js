import { SET_DOG_IMAGES } from '../actions/dogImages'

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_DOG_IMAGES:
      return [ ...action.payload]
               
      default:
        return state
  }
}