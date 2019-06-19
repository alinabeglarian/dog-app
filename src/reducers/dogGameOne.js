import { SET_DOG_GAME_ONE } from '../actions/dogGameOne'

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_DOG_GAME_ONE:
      return {
               ...state,
              dog: action.payload
              }
      default:
        return state
  }
}