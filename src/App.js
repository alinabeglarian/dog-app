import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import DogsListContainer from './components/DogsListContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <h1>Hello World</h1>
          <DogsListContainer />
        </div>
      </Provider>
    );
  }
}
export default App;
