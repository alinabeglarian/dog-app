import { SET_DOG_GAME_ONE, SUBMIT_ANSWER } from '../actions/dogGameOne'
import { SET_ANSWERS } from '../actions/dogBreed'

export default (state = initialState, action = {}) => {
  console.log('state:', state, 'action:', action)
  switch(action.type) {
    case SET_DOG_GAME_ONE:
      return {
               ...state,
              dog: action.payload.dog,
              breed: action.payload.breed
              }
      case SET_ANSWERS:
        return {
                correct: action.payload.correct,
                second: action.payload.second,
                third: action.payload.third
        }
      case SUBMIT_ANSWER:
        return {
                ...state,
                isCorrect: action.payload.isCorrect
        }
      default:
        return state
  }
}

const initialState = []