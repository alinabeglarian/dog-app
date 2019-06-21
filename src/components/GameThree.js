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
        <h1>Game Three</h1>
        <p><table>
          <tr><th>Question</th><th>The correct answer is</th></tr>
        <tr><th><img src={ props.question } key={props.question} alt="Dog" height="175px" width="250px"/></th>
        <th>The correct answer is {props.correctAnswer}</th></tr>
        <tr><th>{buttonOptions.map(choice=><button key={Math.random()*1000} onClick={props[choice[1]]}>{choice[0]}</button>)}</th><th></th>Your score is: {props.score}</tr></table></p>        
        <div>
      
    </div>
      </div>
      
    )
  }