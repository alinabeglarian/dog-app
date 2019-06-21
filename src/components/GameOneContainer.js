import * as React from 'react';
import GameOne from './GameOne';
import { connect } from 'react-redux';
import { getDogGameOne, submitAnswer } from '../actions/dogGameOne'
import { getDogBreedsAndPickThree } from '../actions/dogBreed'


class GameOneContainer extends React.Component {
  componentDidMount() {
    this.props.getDogBreedsAndPickThree()
  }

  // CALLBACK === ARROW! Can't touch this ... MC hammer style
  handleSubmit1 = (event) => {
    event.preventDefault()
    this.props.submitAnswer(true) // here we create action object AND dispatch it
  }

  handleSubmit2 = (event) => {
    console.log('wrong')
    event.preventDefault()
    this.props.submitAnswer(false)
  }
  
  render() {
    if (!this.props.dog) return 'Loading..'
    return <GameOne dog={this.props.dog}
                    correct={this.props.correct}
                    second={this.props.second} 
                    third={this.props.third} 
                    handleSubmit1={this.handleSubmit1}
                    handleSubmit2={this.handleSubmit2}/>
  }
}

const mapStateToProps = (state) =>  {
  return {
    dog: state.dogGameOne.dog,
    correct: state.dogGameOne.correct,
    second: state.dogGameOne.second,
    third: state.dogGameOne.third
  }
}


export default connect(mapStateToProps, { getDogGameOne, getDogBreedsAndPickThree, submitAnswer })(GameOneContainer)