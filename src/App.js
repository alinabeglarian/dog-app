import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route } from 'react-router-dom'
import DogsListContainer from './components/DogsListContainer';
import GameOneContainer from './components/GameOneContainer'
import { Link } from 'react-router-dom'
import DogImagesContainer from './components/DogImagesContainer'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <main>
          <Link to="/list">Dog List</Link>
          <Route exact path="/list" component={DogsListContainer} />
          <Route exact path="/breed/:dogBreed" component={DogImagesContainer} />  
          <Route exact path='/gameone/' component={GameOneContainer} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;