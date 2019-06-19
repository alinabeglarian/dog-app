import superagent from 'superagent'

export function setDogGameOne(dog, breed) {
  return {
    type: 'SET_DOG_GAME_ONE',
    payload: {
      dog, 
      breed
    }
  }
}

export function getDogGameOne(breed) {
  return function(dispatch) {
    superagent(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => 
        dispatch(setDogGameOne(response.body.message, breed)))
  }
}

export const SET_DOG_GAME_ONE = 'SET_DOG_GAME_ONE'