import * as React from 'react'

export default function GameOne(props) {
  return (
    <div>
      <h1 className='Game'>Game One</h1>
      <p>From what dog breed is the dog in the image bellow?</p>
      <p><img key={props.dog} src={props.dog} alt='DogPhoto' /></p>
      <p>Choose your answer:</p>
    
        <form className='Form'>
          <input type='radio' name='dog'/> {props.correct}
          <input type='radio' name='dog'/> {props.second}
          <input type='radio' name='dog'/> {props.third}
        
        </form>

    </div>
  )
}