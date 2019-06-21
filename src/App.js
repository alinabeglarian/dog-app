import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route } from 'react-router-dom';
import GameThreeContainer from './components/GameThreeContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <main>
            

            <Route exact path='/' component={GameThreeContainer} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
