import * as React from 'react';
import { connect } from 'react-redux';
import { setDogOne, getDogOne,setDogTwo, getDogTwo,setDogThree, getDogThree,getDogBreedName,setScore,increaseScore,showAnswer,setQuestion,nextQuestion,setGame} from '../actions/dogGameThree'
import GameThree from './GameThree';

class GameThreeContainer extends React.Component {
  componentDidMount() {
    const gameNumber = this.props.match.params.gameNumber
    this.props.setGame(gameNumber)
    this.props.setQuestion()
    this.props.getDogOne();
    this.props.getDogTwo();
    this.props.getDogThree();
    this.props.setScore()
  }
  
  handleWrongAnswer = (event) => {
    this.props.getDogOne();
    this.props.getDogTwo();
    this.props.getDogThree();
    this.props.showAnswer(this.props.dogOne)
    this.props.nextQuestion(this.props.question)
    event.preventDefault()
  }

  handleCorrectAnswer = (event) => {
    this.props.getDogOne();
    this.props.getDogTwo();
    this.props.getDogThree();
    this.props.increaseScore(this.props.score)
    this.props.nextQuestion(this.props.question)
    event.preventDefault()
  }

  render() {
    if(!this.props.game){
      return "loading"
    }
      else{
        const gameNumber=this.props.game+"0"
        const realNumber=gameNumber/10
      return <GameThree question={this.props.dogOne+""} wrongAnswer1={this.props.dogTwo+""} 
      wrongAnswer2={this.props.dogThree+""} score={this.props.score} 
      false={this.handleWrongAnswer} true={this.handleCorrectAnswer}
       correctAnswer={this.props.answer} game={realNumber} questionNumber={this.props.question}/>}
    }
}

const mapStateToProps = (state) => {
  return {
    dogOne: state.dogGameThree.dogOne,
    dogTwo: state.dogGameThree.dogTwo,
    dogThree: state.dogGameThree.dogThree,
    score: state.dogGameThree.score,
    answer: state.dogGameThree.answer,
    question: state.dogGameThree.question,
    game: state.dogGameThree.game
  }
}

export default connect(mapStateToProps, { setDogOne,getDogOne,setDogTwo,getDogTwo,setDogThree,getDogThree,getDogBreedName,setScore,increaseScore,showAnswer,setQuestion,nextQuestion,setGame })(GameThreeContainer);
