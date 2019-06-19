import * as React from 'react'
import { Link } from 'react-router-dom'


export default function DogImages (props) {
  
    return (
      <div className="dog-breed-images">
        <h1>Dogs Breed Images</h1>
        <p>{ props.images && props.images.map(url => <img src={ url } key={url} alt="Dog" />) }
      { !props.images && 'Loading...' }</p> 
        <p><Link to="/">Go back to the index</Link></p>
        <div>
      
    </div>
      </div>
      
    )
  }