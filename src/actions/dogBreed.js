import superagent from 'superagent'

export function setDogBreeds(dogBreed) {
  return {
    type: 'SET_DOG_BREEDS',
    payload: dogBreed
  }
}

export function setAnswers(correct, second, third) {
  return {
    type: 'SET_ANSWERS',
    payload: {
      correct,
      second,
      third
    }
  }
}

function getBreedList (dispatch) {
  return superagent('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      console.log('getBreedList test')
      dispatch(setDogBreeds(response.body.message))

      return response.body.message
    })
}

export function getDogBreeds() {
  return function(dispatch) {
    getBreedList(dispatch)
  }
}

export function getDogBreedsAndPickThree () {
  return function(dispatch) {
    getBreedList(dispatch)
      .then(message => {
        const list = Object.keys(message)

        const correct = list[0]
        const second = list[Math.floor(Math.random()*list.length)]
        const third = list[Math.floor(Math.random()*list.length)]

        console.log('answers test:', correct, second, third)

        dispatch(setAnswers(correct, second, third))
      })
  }
}

export const SET_DOG_BREEDS = 'SET_DOG_BREEDS'
export const SET_ANSWERS = 'SET_ANSWERS'

