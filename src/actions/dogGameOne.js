import superagent from 'superagent'

export const SET_DOG_GAME_ONE = 'SET_DOG_GAME_ONE'
export const INCREASE_SCORE='INCREASE_SCORE'
export const SHOW_ANSWER='SHOW_ANSWER'
export const SET_SCORE='SET_SCORE'

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

export function setScore(payload) {
  return {
    type: SET_SCORE,
    payload
  } 
}

export function showAnswer(breed){
  
  return {
    type: 'SHOW_ANSWER',
    payload: breed
  }
}
