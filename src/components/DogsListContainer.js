import * as React from 'react';
import * as request from 'superagent';
import DogsList from './DogsList';
import { connect } from 'react-redux';

class DogsListContainer extends React.Component {
  componentDidMount() {
    this.props.getDogBreeds();
  }

  render() {
    if (!this.state.dogs) return 'Loading...';
    return <DogsList dogs={this.props.dogs} />;
  }
}

export default connect(DogsListContainer);
