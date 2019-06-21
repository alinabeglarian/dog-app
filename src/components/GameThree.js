import * as React from 'react'
import { Link } from 'react-router-dom'


export default function GameThree (props) {
    const imageUrlString=props.question+""
  const image=imageUrlString.split("/")
  const correctAnswer=image[4]
  const choices=[props.answer1,props.answer2,props.answer3]
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  const buttonOptions=choices.map(choice=>[choice,choice===correctAnswer])
  
    return (
        
      <div className="dog-game-three">
        <h1 className='Game'>Game Three</h1>
        <p>Question</p>
        <div className='ImgRandDog ImgRandDog-cover'>
        <img src={ props.question } key={props.question} alt="Dog" />
        </div>  
        <p>The correct answer is {props.correctAnswer}</p>
        <div>
        {buttonOptions.map(choice=><button key={Math.random()*1000} onClick={props[choice[1]]}>{choice[0]}</button>)}
        </div>
        <p>
        Your score is: {props.score}</p>        
        <div>
      
    </div>
      </div>
      
    )
  }