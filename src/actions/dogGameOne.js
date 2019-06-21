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


//gets dog images by breed from api and dispatches the action that sets te dog and the breed
export function getDogGameOne(breed) {
  return function(dispatch) {
    superagent(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => 
        dispatch(setDogGameOne(response.body.message, breed)))
  }
}

export function submitAnswer(isCorrect){
  return {
    type: 'SUBMIT_ANSWER',
    payload: {
      isCorrect
    }
  }
}

export const SET_DOG_GAME_ONE = 'SET_DOG_GAME_ONE'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'
