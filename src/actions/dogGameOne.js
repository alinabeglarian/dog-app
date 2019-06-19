import superagent from 'superagent'

export function setDogGameOne(dog) {
  return {
    type: 'SET_DOG_GAME_ONE',
    payload: dog
  }
}

export function getDogGameOne() {
  return function(dispatch) {
    superagent('https://dog.ceo/api/breed/hound/images/random')
      .then(response => 
        dispatch(setDogGameOne(response.body.message)))
  }
}

export const SET_DOG_GAME_ONE = 'SET_DOG_GAME_ONE'