import superagent from 'superagent'

export function setDogOne(dogOne) {
    return {
      type: 'SET_DOG_ONE',
      payload: dogOne
    }
  }

export function setDogTwo(dogTwo) {
    return {
      type: 'SET_DOG_TWO',
      payload: dogTwo
    }
  }

export function setDogThree(dogThree) {
    return {
      type: 'SET_DOG_THREE',
      payload: dogThree
    }
  }
  
export function getDogOne() {
    return function(dispatch) {
      superagent("https://dog.ceo/api/breeds/image/random")
        .then(response => 
          dispatch(setDogOne(response.body.message)))
    }
  }
  
export function getDogTwo() {
    return function(dispatch) {
      superagent("https://dog.ceo/api/breeds/image/random")
        .then(response => 
          dispatch(setDogTwo(response.body.message)))
    }
  }

  export function getDogThree() {
    return function(dispatch) {
      superagent("https://dog.ceo/api/breeds/image/random")
        .then(response => 
          dispatch(setDogThree(response.body.message)))
    }
  }

  export function getDogBreedName(dog){
      return dog[0]
  }

  export function setScore(){
    return {
      type: 'SET_SCORE',
      payload: 0
    }
  }

  export function setQuestion(){
    return {
      type: 'SET_QUESTION',
      payload: 0
    }
  }

  export function nextQuestion(question){
    return {
      type: 'NEXT_QUESTION',
      payload: question+1
    }
  }
  
  export function increaseScore(score){
    return {
      type: 'INCREASE_SCORE',
      payload: score+1
    }
  }

  export function showAnswer(answer){
    const dogUrl=answer+""
    return {
      type: 'SHOW_ANSWER',
      payload: dogUrl
    }
  }

  export function setGame(gameNumber){
    return {
      type: 'SET_GAME',
      payload: gameNumber
    }
  }

  export const SET_DOG_ONE = 'SET_DOG_ONE'
  export const SET_DOG_TWO = 'SET_DOG_TWO'
  export const SET_DOG_THREE = 'SET_DOG_THREE'
  export const SET_SCORE = 'SET_SCORE'
  export const INCREASE_SCORE='INCREASE_SCORE'
  export const SHOW_ANSWER='SHOW_ANSWER'
  export const SET_QUESTION='SET_QUESTION'
  export const NEXT_QUESTION='NEXT_QUESTION'
  export const SET_GAME='SET_GAME'