import { SET_DOG_GAME_TWO } from '../actions/dogGameTwo';
export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_DOG_GAME_TWO:
      return {
        state,
        dog: action.payload
      };
    default:
      return state;
  }
};
