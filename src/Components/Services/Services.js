import React, { useEffect, useState } from 'react';
// import HomeService from '../HomeService/HomeService';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://afternoon-bayou-56175.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2 className="text-primary my-5 text-center">Our services</h2>
            <div className="service-container">

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    >

                    </Service>)

                }



            </div>

            <Footer></Footer>

        </div>
    );
};

export default Services;