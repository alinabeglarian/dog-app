import * as React from 'react';
import GameOne from './GameOne';
import { connect } from 'react-redux';
import { setDogGameOne, getDogGameOne } from '../actions/dogGameOne'


class GameOneContainer extends React.Component {
  componentDidMount() {
    this.props.getDogGameOne()
  }
  
  render() {
    if (!this.props.dog) return 'Loading..'
    return <GameOne dog={this.props.dog} />
  }
}

const mapStateToProps = (state) =>  {
  return {
    dog: state.dogGameOne.dog
  }
}


export default connect(mapStateToProps, { setDogGameOne, getDogGameOne })(GameOneContainer)