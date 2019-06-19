import * as React from 'react';
import DogsList from './DogsList';
import { connect } from 'react-redux';
import { getDogBreeds} from '../actions/dogBreed'

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
    dogBreed: state.dogBreed
  }
}

export default connect(mapStateToProps, { getDogBreeds })(DogsListContainer);
