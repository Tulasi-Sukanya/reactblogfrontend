import React from 'react';
import { useLocation } from 'react-router-dom';
import './Technology.css'

const TechnologyFullView = () => {
    const data = useLocation().state.data;

    return (
        <div className='full-view'>
            <img src={`${data.image}`} alt="empty" className='full-view-img'/><br/>
            <p>{data.title}</p><br/>
            <p>{data.article}</p>
        </div>
    )
}

export default TechnologyFullView