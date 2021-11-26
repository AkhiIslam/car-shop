import React, { useEffect, useState } from 'react';
import '../ManageOrders/ManageOrder.css'

const ManageOrders = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://afternoon-bayou-56175.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })

    const handleDelete = id => {
        const url = `https://afternoon-bayou-56175.herokuapp.com/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }

            })
    }

    return (
        <div>
            <h2>Manage Orders</h2>

            {
                services.map(service => <div key={service._id}>
                    <div className="item3 mb-4">
                        <img className="size" src={service.image} />
                        <h3 className="manage">{service.name}</h3>
                        <button onClick={() => handleDelete(service._id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>)
            }

        </div>
    );
};

export default ManageOrders;