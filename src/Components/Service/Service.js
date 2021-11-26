import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    // console.log(props);
    const { _id, name, image, price, description } = props.service;
    // console.log(props)

    return (
        <div className="item1">

            <img className='size' src={image} alt="" />


            <h4 className="product-name">Name: {name}</h4>
            <h3>Price: {price}</h3>

            <h4>{description}</h4>


            <br />

            <Link to={`/service/${_id}`}>
                <button className="btn btn-primary mb-2">Details</button>
            </Link>


        </div>
    );
};

export default Service;