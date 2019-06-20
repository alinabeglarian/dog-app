import superagent from 'superagent';

export function setDogGameTwo(dog) {
  return {
    type: 'SET_DOG_GAME_TWO',
    payload: dog
  };
}

export function getDogGameTwo() {
  return function(dispatch) {
    superagent('https://dog.ceo/api/breeds/list/random').then(response =>
      dispatch(setDogGameTwo(response.body.message))
    );
  };
}

export const SET_DOG_GAME_TWO = 'SET_DOG_GAME_TWO';
