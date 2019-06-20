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

export function setDogGameTwoRandImg(dogImg) {
  return {
    type: 'SET_DOG_GAME_TWO_RAND_IMG',
    payload: dogImg
  };
}

export function getDogGameTwoRandImg() {
  return function(dispatch) {
    superagent('https://dog.ceo/api/breeds/image/random/3').then(response =>
      dispatch(setDogGameTwoRandImg(response.body.message))
    );
  };
}

export const SET_DOG_GAME_TWO = 'SET_DOG_GAME_TWO';
export const SET_DOG_GAME_TWO_RAND_IMG = 'SET_DOG_GAME_TWO_RAND_IMG';
