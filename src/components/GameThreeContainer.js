import * as React from 'react';
import { connect } from 'react-redux';
import { setDogOne, getDogOne,setDogTwo, getDogTwo,setDogThree, getDogThree,getDogBreedName,setScore,increaseScore,showAnswer} from '../actions/dogGameThree'
import GameThree from './GameThree';

class GameThreeContainer extends React.Component {
  componentDidMount() {
    this.props.getDogOne();
    this.props.getDogTwo();
    this.props.getDogThree();
    this.props.setScore()
    
  }
  
  handleWrongAnswer = (event) => {
    console.log('wrong answer');
    this.props.getDogOne();
    this.props.getDogTwo();
    this.props.getDogThree();
    this.props.showAnswer(this.props.dogOne)
    event.preventDefault()
  }

  handleCorrectAnswer = (event) => {
    console.log('correct answer');
    this.props.getDogOne();
    this.props.getDogTwo();
    this.props.getDogThree();
    this.props.increaseScore(this.props.score)
    event.preventDefault()
  }

  render() {
      const dogImageUrls=[this.props.dogOne+"",this.props.dogTwo+"",this.props.dogThree+""]
      const dogBreedNames=dogImageUrls.map(name=>name.split("/"))
      const answer1=dogBreedNames[0][4]
      const answer2=dogBreedNames[1][4]
      const answer3=dogBreedNames[2][4]      
      const question=dogImageUrls[0]
      return <GameThree question={question} answer1={answer1} 
      answer2={answer2} answer3={answer3} score={this.props.score} 
      false={this.handleWrongAnswer} true={this.handleCorrectAnswer} correctAnswer={this.props.answer}/>
    }
}

const mapStateToProps = (state) => {
  return {
    dogOne: state.dogGameThree.dogOne,
    dogTwo: state.dogGameThree.dogTwo,
    dogThree: state.dogGameThree.dogThree,
    score: state.dogGameThree.score,
    answer: state.dogGameThree.answer
  }
}

export default connect(mapStateToProps, { setDogOne,getDogOne,setDogTwo,getDogTwo,setDogThree,getDogThree,getDogBreedName,setScore,increaseScore,showAnswer })(GameThreeContainer);
