import * as React from 'react';
import DogImages from './DogImages';
import { connect } from 'react-redux';
import { setDogImages, getDogImages} from '../actions/dogImages'

class DogImagesContainer extends React.Component {
  componentDidMount() {
    const dogBreed = this.props.match.params.dogBreed
    this.props.getDogImages(dogBreed);
  }

  render() {
    if (!this.props.images) return 'Loading...';
    return <DogImages images={this.props.images} />;
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.dogImages
  }
}

export default connect(mapStateToProps, { setDogImages, getDogImages })(DogImagesContainer);
