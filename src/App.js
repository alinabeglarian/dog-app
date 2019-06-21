
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route } from 'react-router-dom';
import DogsListContainer from './components/DogsListContainer';
import GameOneContainer from './components/GameOneContainer';
import { Link } from 'react-router-dom';
import DogImagesContainer from './components/DogImagesContainer';
import GameTwoContainer from './components/GameTwoContainer';
import GameThreeContainer from './components/GameThreeContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App' >
<<<<<<< HEAD
          <main>
<<<<<<< HEAD
=======
          <main> 
>>>>>>> aa82cbf40263fd01453551fecace2bae2bcdb91c
            <div className='MainNav'>
              
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/list'>Dog List</Link></li>  
                <li><Link to='/gameone'>Game One</Link></li>
                <li><Link to='/gametwo'>Game Two</Link></li>
                <li><Link to='/gameThree'>Game Three</Link></li>
              </ul>
            </div>
            <h2 className='TitlePage'>Welcome to the <span className='span'>most wanted</span> Dog App!</h2>
            <br/>
            <br/>
           
            <div className='Container'>
              
<<<<<<< HEAD
=======
            <Link to='/list'>Dog List</Link>
            <br />
            <Link to='/gameone/'>Game One</Link>
            <br />
            <Link to='/gametwo'>Game Two</Link>
>>>>>>> feat/gameone
=======
>>>>>>> aa82cbf40263fd01453551fecace2bae2bcdb91c

            <Route exact path='/list' component={DogsListContainer} />
            <Route exact path='/breed/:dogBreed' component={DogImagesContainer} />
            <Route exact path='/gameone/' component={GameOneContainer} />
            <Route exact path='/gametwo/' component={GameTwoContainer} />
            <Route exact path='/gamethree/' component={GameThreeContainer} />
            </div>
          </main>
         
        </div>
        <footer className='Footer'>This is our Dog App! &copy; Alina, Marlon 	&#38; Ionut</footer>
      </Provider>
    );
  }
}

export default App;