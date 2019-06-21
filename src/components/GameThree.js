import * as React from 'react'


export default function GameThree (props) {
    const imageUrlString=props.question+""
    const image=imageUrlString.split("/")
    const correctAnswer=image[4]
    const randomizeChoices=[props.question,props.wrongAnswer1,props.wrongAnswer2]
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
    const dogNamesUrl=randomizeChoices.map(choice=>choice.split("/"))
    const dogNames=dogNamesUrl.map(name=>name[4])
    const textButtons=dogNames.map(choice=>[choice,choice===correctAnswer])
    const imageButtons=randomizeChoices.map(choice=>[choice,choice===props.question])
    const textCorrectAnswer=props.correctAnswer+""
    const urlParts=textCorrectAnswer.split("/")
    const previousTextAnswer=urlParts[4]
    const previousImageAnswer=[]
    if(!props.correctAnswer){
      previousImageAnswer[0]="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Brian_Griffin.png/195px-Brian_Griffin.png"
    }else{
      previousImageAnswer[0]=props.correctAnswer+""
    }

    if(props.game===1||(props.game===3 && !props.questionNumber)||(props.game===3 && props.questionNumber%2===0)){
      return (
        <div className="dog-game">
          <h1 className='Game'>{"Game "+props.game}</h1>
          <p>Question number {props.questionNumber}</p>
          <p>Which breed is this?</p>
          <p><img src={ props.question } key={props.question} alt="Dog" height="175px" width="250px"/></p>
          <p>Choices:</p>
          <p>{textButtons.map(choice=><button key={Math.random()*1000} onClick={props[choice[1]]}>{choice[0]}</button>)}</p>
          <p>The correct answer was</p>
          <p><img src={previousImageAnswer[0]} key={previousImageAnswer[0]} alt="Dog" height="175px" width="250px"/></p>
          <p>Your score is: {props.score}</p>      
        </div>
      )
    }
    
    if(props.game===2||(props.game===3 && props.questionNumber%2===1)){
      return (
        <div className="dog-game">
          <h1 className='Game'>{"Game "+props.game}</h1>
          <p>Question number {props.questionNumber}</p>
          <p>Select the correct image of the breed <b>{correctAnswer}</b> </p>
          <p>Choices:</p>
                <div className='ImgRandDog ImgRandDog-cover'>
          <p>{imageButtons.map(choice=><button key={Math.random()*1000} onClick={props[choice[1]]}>
          {<img src={choice[0]} key={choice[0]} alt="Dog" height="175px" width="250px"/>}
          </button>)}</p>
        </div>
          <p>The correct answer was <b>{previousTextAnswer}</b></p>
          <p>Your score is: {props.score}</p>
        </div>
      )
    }
     
  }