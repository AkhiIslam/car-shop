import React from 'react';
import Footer from '../Footer/Footer';
import CallReview from '../CallReview/CallReview';
import HomeService from '../HomeService/HomeService';
import Slider from '../Slider/Slider'
import Extra from '../Extra/Extra';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Extra></Extra>
            <HomeService></HomeService>
            <h2 className="text-primary my-2">Customer Reviews</h2>
            <CallReview></CallReview>

            <Footer></Footer>
        </div>
    );
};

export default Home;