import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GameThreeContainer from './components/GameThreeContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <main>
          <li><Link to='/games/3'>Game Three</Link></li>
          <li><Link to='/games/2'>Game Two</Link></li>
          <li><Link to='/games/1'>Game One</Link></li>
            <Route exact path='/games/:gameNumber' component={GameThreeContainer} />          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
