import React, { useEffect, useState } from 'react';
import TechnologyTile from './TechnologyTile';

const Technology = ({props}) => {

  
  const [technologyTile, setTechnologyTile] = useState([])

  useEffect(() => {
    // fetch(`https://blogbackend-y4h3.onrender.com/technology`)
    fetch("https://backendblogdb-n3v2.onrender.com/technology")
      .then(response => response.json())
      .then(data => {
        setTechnologyTile(data)
      })
    }, []);

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
        <span className='latest-bollywood'>Latest Technology Stories</span>
        <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <TechnologyTile props={technologyTile}/>
      </div>
    </div>
  )
}

export default Technology