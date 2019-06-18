import * as React from 'react';
import DogsList from './DogsList';
import { connect } from 'react-redux';
import { setDogBreeds, getDogBreeds} from '../actions/dogBreed'

class DogsListContainer extends React.Component {
  componentDidMount() {
    this.props.getDogBreeds();
  }

  render() {
    if (!this.props.dogBreed) return 'Loading...';
    return <DogsList dogBreed={this.props.dogBreed} />;
  }
}

const mapStateToProps = (state) => {
  return {
    dogBreed: state.dogBreed.dogBreed
  }
}

export default connect(mapStateToProps, { setDogBreeds, getDogBreeds })(DogsListContainer);
