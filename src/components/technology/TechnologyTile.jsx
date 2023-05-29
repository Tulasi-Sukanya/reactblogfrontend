import React from 'react';
import { Link } from 'react-router-dom'
import './Technology.css'

const TechnologyTile = ({props}) => {

    return (
        <>
            {props.map((data, i) =>
            <div className='bollywood-tile'>
                <Link to={`/technology/${data.title}`} state={{data}}>
                    <img src={data.image} alt="empty"/>
                    <p className='title'>{data.title}</p>
                    <p className='description'>{data.article}</p>
                    <p className='date'>{data.date}</p>
                </Link>
            </div>
            )}
        </>
    )
}

export default TechnologyTile