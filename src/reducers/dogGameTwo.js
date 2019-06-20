import {
  SET_DOG_GAME_TWO,
  SET_DOG_GAME_TWO_RAND_IMG
} from '../actions/dogGameTwo';

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DOG_GAME_TWO:
      return {
        ...state,
        dog: action.payload
      };
    case SET_DOG_GAME_TWO_RAND_IMG:
      return {
        ...state,
        dogImg: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  dog: [],
  dogImg: []
};
