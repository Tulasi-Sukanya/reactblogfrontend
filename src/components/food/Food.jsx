import React, { useEffect, useState } from 'react';
import FoodTile from './FoodTile';
const Food = ({props}) => {

  const [foodTile, setFoodTile] = useState([])

  useEffect(() => {
    // fetch(`https://blogbackend-y4h3.onrender.com/food`)
    fetch("https://backendblogdb-n3v2.onrender.com/food")
      .then(response => response.json())
      .then(data => {
        setFoodTile(data)
      })
    }, []);

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
      <span className='latest-bollywood'>Latest Food Stories</span>
      <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <FoodTile props={foodTile}/>
      </div><br/><br /><br/><br/>
    </div>
  )
}

export default Food