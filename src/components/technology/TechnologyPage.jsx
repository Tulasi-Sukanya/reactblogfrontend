import React, { useEffect, useState } from 'react'
// import UserTile from '../user/UserTile';
import './Technology.css';
import TechnologyTile from './TechnologyTile';

const TechnologyPage = () => {
    const [technologyTile, setTechnologyTile] = useState([])

    useEffect(() => {
    fetch(`https://blogbackend-y4h3.onrender.com/technology`)
            .then(response => response.json())
            .then(data => {
                setTechnologyTile(data)
            })
    }, []);

    return (
        <>
            <div className='technology-container'>
                <div className='bollywoodTile'>
                    <TechnologyTile props={technologyTile}/>
                </div>
            </div>
        </>

    )
}

export default TechnologyPage