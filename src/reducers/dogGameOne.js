import { SET_DOG_GAME_ONE, INCREASE_SCORE, SHOW_ANSWER, SET_SCORE } from '../actions/dogGameOne'
import { SET_ANSWERS } from '../actions/dogBreed'

export default (state = {}, action = {}) => {
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
      case SET_SCORE:
        return {
                ...state,
                score: action.payload
        }
      case INCREASE_SCORE:
        return {
                ...state,
                score: action.payload
                     }
      case SHOW_ANSWER:
        return {
                ...state,
                answer: action.payload
        }
      default:
        return state
  }
}