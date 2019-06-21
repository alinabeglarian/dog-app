import { SET_DOG_ONE,SET_DOG_TWO,SET_DOG_THREE,SET_SCORE,INCREASE_SCORE,SHOW_ANSWER,SET_QUESTION,NEXT_QUESTION,SET_GAME } from '../actions/dogGameThree'

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_DOG_ONE:
      return {
        ...state,
       dogOne:  action.payload
       }
    case SET_DOG_TWO:
        return {
          ...state,
         dogTwo: action.payload
         }
    case SET_DOG_THREE:
      return {
        ...state,
       dogThree: action.payload
       }
    case SET_SCORE:
      return {
        ...state,
        score: action.payload
           }
    case SET_QUESTION:
      return {
        ...state,
        question: action.payload
           }
    case NEXT_QUESTION:
      return {
        ...state,
        question: action.payload
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
    case SET_GAME:
      return {
        ...state,
        game: action.payload
                                 }
    default:
        return state
  }
}