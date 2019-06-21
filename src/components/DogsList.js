import * as React from 'react'
import { Link } from 'react-router-dom'


export default function DogsList(props) {
  return (
    <div className='DogsListHeader'>
      <h1>Dog List</h1>
      <h2>There are {props.dogBreed.length} breed dogs available.</h2>
      <ul className='DogsList'>
        {props.dogBreed.map((dog) => 
          <li key={dog}>
          <Link to={ `/breed/${dog}` }>{dog}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
