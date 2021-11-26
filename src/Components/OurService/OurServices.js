import React from 'react';
import '../OurService/OurServices.css'
import { Link } from 'react-router-dom';

const OurServices = (props) => {
    const { name, image, price, description } = props.service;

    return (
        <div className="item1">

            <img className='size' src={image} alt="" />


            <h4 className="product-name">Name: {name}</h4>
            <h3>Price: {price}</h3>

            <h4>{description}</h4>

            <br />
            <Link to="/services">
                <button className="btn btn-primary mb-4">More Services</button>
            </Link>



        </div>
    );
};

export default OurServices;