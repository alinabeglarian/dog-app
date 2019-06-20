import * as React from 'react';
import DogGameTwo from './GameTwo';
import { connect } from 'react-redux';
import {
  setDogGameTwo,
  getDogGameTwo,
  setDogGameTwoRandImg,
  getDogGameTwoRandImg
} from '../actions/dogGameTwo';

class GameTwoContainer extends React.Component {
  componentDidMount() {
    this.props.getDogGameTwo();
    this.props.getDogGameTwoRandImg();
  }
  render() {
    if (!this.props.dog) return 'Loading..';
    return <DogGameTwo dog={this.props.dog} dogImg={this.props.dogImg} />;
  }
}

const mapStateToProps = state => {
  return {
    dog: state.dogGameTwo.dog,
    dogImg: state.dogGameTwo.dogImg
  };
};
console.log();
export default connect(
  mapStateToProps,
  { setDogGameTwo, getDogGameTwo, setDogGameTwoRandImg, getDogGameTwoRandImg }
)(GameTwoContainer);
