import * as React from 'react'
import { Link } from 'react-router-dom'


export default function DogImages (props) {
  
    return (
      <div className="dog-breed-images">
        <h1>Dogs Breed Images</h1>

        <div className='ImgRandDog ImgRandDog-cover'>{ props.images && props.images.map(url => <img src={ url } key={url} alt="Dog" />) }
      { !props.images && 'Loading...' }
      </div> 
        <h1>Go back to the <Link to="/list"  className='Link'>Dogs Breed List</Link></h1>
        <div>
      
    </div>
      </div>
      
    )
  }