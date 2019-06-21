import * as React from 'react';

export default function DogGameTwo(props) {
  return (
    <div>
      <h1 className='Game'>Game Two</h1>
      <h1>Choose the right breed!</h1>
      
      <p>
        In which image do you see the{' '}
        <span className='DogBreedTitle'>{props.dog}</span> dog breed?
      </p>
      <br/>
      <br/>
      <div className='ImgRandDog ImgRandDog-cover'>
        <img
          
          key={props.dogImg[0]}
          src={props.dogImg[0]}
          alt='Doggie'
        />
        <img
          className='ImgRandDog'
          key={props.dogImg[1]}
          src={props.dogImg[1]}
          alt='Doggie'
        />
        <img
          className='ImgRandDog'
          key={props.dogImg[2]}
          src={props.dogImg[2]}
          alt='Doggie'
        />
      </div>
    </div>
  );
}
