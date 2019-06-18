import * as React from 'react';

export default function DogsList(props) {
  return (
    <div>
      <header className='App-header'>
        <h1>Dog List</h1>
      </header>
      <p>There are {props.dogs.length} breed dogs available.</p>
      <ul>
        {props.dogs.map(dog => (
          <li key={dog.id}>{dog.title}</li>
        ))}
      </ul>
    </div>
  );
}
