import * as React from 'react';
import GameOne from './GameOne';
import { connect } from 'react-redux';
import { getDogGameOne, showAnswer, setScore } from '../actions/dogGameOne'
import { getDogBreedsAndPickThree } from '../actions/dogBreed'


class GameOneContainer extends React.Component {
  componentDidMount() {
    this.props.getDogBreedsAndPickThree()
    this.props.setScore(0)
  }

  handleRightAnswer = (event) => {
    this.props.setScore(this.props.score + 1)
    setTimeout(this.props.getDogBreedsAndPickThree, 1000)
    event.preventDefault()
  }

  handleWrongAnswer = (event) => {
    this.props.showAnswer(this.props.correct)
    setTimeout(this.props.getDogBreedsAndPickThree, 2000)
    event.preventDefault()
  }
  
  render() {
    if (!this.props.dog) return 'Loading..'
    return <GameOne dog={this.props.dog}
                    correct={this.props.correct}
                    second={this.props.second} 
                    third={this.props.third} 
                    handleRightAnswer={this.handleRightAnswer}
                    handleWrongAnswer={this.handleWrongAnswer}
                    score={this.props.score}
                    correctAnswer={this.props.answer}/>
  }
}

const mapStateToProps = (state) =>  {
  console.log('changed state:', state.dogGameOne.score)
  return {
    dog: state.dogGameOne.dog,
    correct: state.dogGameOne.correct,
    second: state.dogGameOne.second,
    third: state.dogGameOne.third,
    score: state.dogGameOne.score,
    answer: state.dogGameOne.answer
  }
}


export default connect(mapStateToProps, { showAnswer, getDogGameOne, getDogBreedsAndPickThree, setScore })(GameOneContainer)