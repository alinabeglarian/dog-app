import { SET_DOG_GAME_ONE } from '../actions/dogGameOne'
import { SET_ANSWERS } from '../actions/dogBreed'

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_DOG_GAME_ONE:
      return {
               ...state,
              dog: action.payload.dog,
              breed: action.payload.breed
              }
      case SET_ANSWERS:
        return {
                ...state,
                correct: action.payload.correct,
                second: action.payload.second,
                third: action.payload.third
        }
      default:
        return state
  }
}

const initialState = {
  dog: [],
}