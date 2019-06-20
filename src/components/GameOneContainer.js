import * as React from 'react';
import GameOne from './GameOne';
import { connect } from 'react-redux';
import { getDogGameOne } from '../actions/dogGameOne'
import { getDogBreedsAndPickThree } from '../actions/dogBreed'



class GameOneContainer extends React.Component {
  componentDidMount() {
    this.props.getDogBreedsAndPickThree()
  }
  
  render() {
    if (!this.props.dog) return 'Loading..'
    return <GameOne dog={this.props.dog} 
                    breed={this.props.breed} 
                    correct={this.props.correct}
                    second={this.props.second} 
                    third={this.props.third} />
  }
}

const mapStateToProps = (state) =>  {
  return {
    dog: state.dogGameOne.dog,
    breed: state.dogGameOne.breed,
    correct: state.dogGameOne.correct,
    second: state.dogGameOne.second,
    third: state.dogGameOne.third
  }
}


export default connect(mapStateToProps, { getDogGameOne, getDogBreedsAndPickThree })(GameOneContainer)