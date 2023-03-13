import React from 'react';
import './Bollywood.css';
import { Link } from 'react-router-dom';

const BollywoodTile = ({props}) => {
    return (
        <>
            {props.map((data, i) =>
            
                <div className='bollywood-tile'>
                    <Link to={`/bollywood/${data.title}`} state={{data}}>
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

export default BollywoodTile