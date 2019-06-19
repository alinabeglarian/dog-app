import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route } from 'react-router-dom'
import DogsListContainer from './components/DogsListContainer';
import GameOneContainer from './components/GameOneContainer'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Route exact path='/' component={DogsListContainer} />
          <Route exact path='/gameone/' component={GameOneContainer} />
        </div>
      </Provider>
    );
  }
}
export default App;
