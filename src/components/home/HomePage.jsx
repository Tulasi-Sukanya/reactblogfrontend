import React from 'react'
import Banner from '../banner/Banner'
import Bollywood from '../bollywood/Bollywood';
import Hollywood from '../hollywood/Hollywood';
import Technology from '../technology/Technology';
import Fitness from '../fitness/Fitness';
import Food from '../food/Food';
import Footer from '../Footer/Footer';

const HomePage = () => {
    const bannerImage = {
        img: 'assets/first-image.jpg'
    }

    return (
        <>
            <Banner props={bannerImage}/>
            <Bollywood props={true}/>
            <Technology props={true}/>
            <Hollywood props={true}/>
            <Fitness props={true}/>
            <Food props={true}/>
            <Footer />
        </>
    )
}

export default HomePage