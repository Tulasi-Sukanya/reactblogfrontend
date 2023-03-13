import React from 'react';
import './Banner.css';
import BannerSideImages from './BannerSideImages';

const Banner = ({props}) => {
    const sideImages = [
        {
            img: 'assets/bg3.jpg'
        },
        {
            img: 'assets/bg3.jpg'
        }
    ];
    return (
        <div className='bannerWrapper'>
            <img className='first-image' src="assets/bg1.jpg" alt='empty'/>
            {/* <span className='welcome-text'>Welcome to Anamika's latest stories blog</span> */}

            <div className='bannerSideImages'>
                <BannerSideImages props={sideImages}/>
            </div>
        </div>
    )
}

export default Banner