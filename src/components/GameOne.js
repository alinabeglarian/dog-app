import * as React from 'react'

export default function GameOne(props) {
  return (
    <div>
      <h1>Game One</h1>
      <p><img key={props.dog} src={props.dog} alt='DogPhoto' /></p>
      <p>Choose the right dog!</p>
    
        <form>
          <input type='radio' name='dog'/> {props.correct} <br />
          <input type='radio' name='dog'/> {props.second} <br />
          <input type='radio' name='dog'/> {props.third} <br />
        </form>

    </div>
  )
}