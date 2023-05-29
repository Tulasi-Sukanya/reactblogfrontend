import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css'

const FoodTile = ({props}) => {
    return (
        <>
            {props.map((data, i) =>
            <div className='fitness-tile'>
                <Link to={`/food/${data.title}`} state={{data}}>
                    <img src={data.image} alt="empty"/>
                    <p className='title'>{data.title}</p>
                    <p className='description'>{data.article}</p>
                </Link>
            </div>
            )}
        </>
    )
}

export default FoodTile