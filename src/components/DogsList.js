import * as React from 'react'
import { Link } from 'react-router-dom'

export default function DogsList(props) {
  return (
    <div>
        <h1>Dog List</h1>
      <p>There are {props.dogBreed.length} breed dogs available.</p>
      <ul>
        {props.dogBreed.map((dog) => 
          <li key={dog}>
          <Link to={ `/breed/${dog}` }>{dog}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
