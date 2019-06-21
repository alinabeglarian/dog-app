import * as React from 'react'

export default function GameOne(props) {
  
  return (
    <div>
      <h1 className='Game'>Game One</h1>
      <p>From what dog breed is the dog in the image bellow?</p>
      <p><img key={props.dog} src={props.dog} alt='DogPhoto' /></p>
    
      <p>Choose the right dog!</p>
        <form>
          <button className='correct' name='dog' onClick={props.handleRightAnswer}> {props.correct} </button> <br />
          <button className='second' name='dog' onClick={props.handleWrongAnswer}> {props.second} </button> <br />
          <button className='third' name='dog' onClick={props.handleWrongAnswer}> {props.third} </button> <br />

        </form>
        <p>score: {props.score}</p>
        <p>correct answer: {props.correctAnswer}</p>
    </div>
  )
}