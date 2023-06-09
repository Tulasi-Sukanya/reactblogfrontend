import React, { useEffect, useState } from 'react'
import BollywoodTile from './BollywoodTile';
import './Bollywood.css';

const Bollywood = ({props}) => {

  const [bollywoodTile, setBollywoodTile] = useState([])

  useEffect(() => {
    // fetch("https://backendblogdb-n3v2.onrender.com/bollywood")
    fetch("https://blogbackend-y4h3.onrender.com/bollywood")
      .then(response => response.json())
      .then(data => {
        setBollywoodTile(data)
      })
  }, []);

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
        <span className='latest-bollywood'>Latest Bollywood Stories</span>
        <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <BollywoodTile props={bollywoodTile}/>
      </div>
    </div>
  )
}

export default Bollywood