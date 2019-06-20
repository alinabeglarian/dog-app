import * as React from 'react';
import DogGameTwo from './GameTwo';
import { connect } from 'react-redux';
import { setDogGameTwo, getDogGameTwo } from '../actions/dogGameTwo';

class GameTwoContainer extends React.Component {
  componentDidMount() {
    this.props.getDogGameTwo();
  }

  render() {
    if (!this.props.dog) return 'Loading..';
    return <DogGameTwo dog={this.props.dog} />;
  }
}

const mapStateToProps = state => {
  return {
    dog: state.dogGameTwo.dog
  };
};

export default connect(
  mapStateToProps,
  { setDogGameTwo, getDogGameTwo }
)(GameTwoContainer);
