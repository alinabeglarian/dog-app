import superagent from 'superagent'

export function setDogImages(images) {
    return {
      type: 'SET_DOG_IMAGES',
      payload: images
    }
  }
  
  
  export function getDogImages(breedSelected) {
    const url="https://dog.ceo/api/breed/"+breedSelected+"/images/random/10"
    console.log(url,"shows the url")
    return function(dispatch) {
      superagent(url)
        .then(response => 
          dispatch(setDogImages(response.body.message)))
    }
  }
  
  
  export const SET_DOG_IMAGES = 'SET_DOG_IMAGES'