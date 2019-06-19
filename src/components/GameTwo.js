import * as React from 'react';

export default function DogGameTwo(props) {
  return (
    <div>
      <h1>Game Two</h1>
      <h2>Choose the right breed!</h2>
      <p>
        In which image do you see the <b>{props.dog.toUpperCase()}</b> dog
        breed?
      </p>
    </div>
  );
}
