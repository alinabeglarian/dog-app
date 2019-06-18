import * as React from 'react';

export default function DogsList(props) {
  return (
    <div>
        <h1>Dog List</h1>
      <p>There are {props.dogBreed.length} breed dogs available.</p>
      <ul>
        {props.dogBreed.map((dog) => 
          <li key={dog}>{dog}</li>
        )}
      </ul>
    </div>
  );
}
