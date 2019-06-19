import * as React from 'react'

export default function GameOne(props) {
  return (
    <div>
      <h1>Game One</h1>
      <p><img key={props.dog} src={props.dog} alt='DogPhoto' /></p>
      <p>Choose the right dog!</p>
    
        <form>
          <input type='radio' /> Dog 1 <br />
          <input type='radio' /> Dog 2 <br />
          <input type='radio' /> Dog 3 <br />
        </form>

    </div>
  )
}