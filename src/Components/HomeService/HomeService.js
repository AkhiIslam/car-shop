import React, { useEffect, useState } from 'react';
import OurServices from '../OurService/OurServices';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://afternoon-bayou-56175.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)))
    }, [])

    return (

        <div>
            <h2 className="text-primary mt-5 text-center">Our services</h2>
            <div className="service-container">

                {
                    services.map(service =>
                        <OurServices
                            key={service._id}
                            service={service}
                        >

                        </OurServices>)

                }

            </div>
        </div>
    );
};

export default Services;
