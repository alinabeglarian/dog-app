import superagent from 'superagent'

export function setDogBreeds(dogBreed) {
  return {
    type: 'SET_DOG_BREEDS',
    payload: dogBreed
  }
}


export function getDogBreeds() {
  return function(dispatch) {
    superagent('https://dog.ceo/api/breeds/list/all')
      .then(response => 
        dispatch(setDogBreeds(response.body.message)))
  }
}


export const SET_DOG_BREEDS = 'SET_DOG_BREEDS'