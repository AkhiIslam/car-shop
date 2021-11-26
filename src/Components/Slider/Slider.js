import React from 'react';
import img1 from '../Slider/image/1.jpg'
import img2 from '../Slider/image/2.jpg'
import img3 from '../Slider/image/3.jpg'

import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ color: 'white' }}>
                        <h4>We have professional automobile care service partners with Skilled mechanics. We are making a one-stop car care service solution because your flexibility is our main priority.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ color: 'white' }}>
                        <h4>You can pay through online or COD. After payment please make sure, you have received the SMS containing the money receipt</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ color: 'white' }}>
                        <h4> The mentioned pricing is estimated service charges which may vary slightly depending on: Vehicle Type, Model, and Service Availability.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;