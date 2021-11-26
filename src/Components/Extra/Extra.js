import React from 'react';
import { Link } from 'react-router-dom';

import img4 from '../Slider/image/4.jpg'
import img5 from '../Slider/image/5.jpg'
import img6 from '../Slider/image/6.jpg'
const Extra = () => {
    return (
        <div>
            <h1 className="text-primary my-5">Special Offers</h1>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card ">
                        <img src={img4} className="card-img-top size mt-3 m-auto" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">20% Discount Offer for 1 Week</h5>
                        </div>
                        <Link to="/services">
                            <button className="btn btn-primary mb-4">Go To Services</button>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img5} className="card-img-top size mt-3 m-auto" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">20% Discount Offer for 1 Week</h5>
                        </div>
                        <Link to="/services">
                            <button className="btn btn-primary mb-4">Go To Services</button>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img6} className="card-img-top size mt-3 m-auto" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">20% Discount Offer for 1 Week</h5>
                        </div>
                        <Link to="/services">
                            <button className="btn btn-primary mb-4">Go To Services</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Extra;