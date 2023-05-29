import React from 'react';
import { useLocation } from 'react-router-dom';
import './Fitness.css'

const FitnessFullView = () => {
    const data = useLocation().state.data;
    return (
        <div className='full-view'>
            <img src={`${data.image}`} alt="empty" className='food-view-img'/><br/>
            <p>{data.title}</p><br/>
            <p>{data.article}</p>
        </div>
    )
}

export default FitnessFullView