import * as React from 'react'

export default function GameOne(props) {
  
  return (
    <div>
      <h1>Game One</h1>
      <p><img key={props.dog} src={props.dog} alt='DogPhoto' /></p>
      <p>Choose the right dog!</p>
        <form>
          <button className='correct' name='dog' onClick={props.handleSubmit1}> {props.correct} </button> <br />
          <button className='second' name='dog' onClick={props.handleSubmit2}> {props.second} </button> <br />
          <button className='third' name='dog' onClick={props.handleSubmit2}> {props.third} </button> <br />
        </form>
    </div>
  )
}