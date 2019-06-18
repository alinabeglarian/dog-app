import superagent from 'superagent'

export function setDogBreeds(dogBreeds) {
  return {
    type: 'SET_DOG_BREEDS',
    payload: dogBreeds
  }
}

export function getDogBreeds() {
  return function(dispatch) {
    superagent('https://dog.ceo/dog-api/documentation/')
      .then(response => 
        dispatch(setDogBreeds(response.body)))
  }
}

export const SET_DOG_BREEDS = 'SET_DOG_BREEDS'

