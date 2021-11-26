import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const [order, setOrders] = useState([])
    const [control, setControl] = useState(false)
    const { user } = useAuth();
    const email = user.email;

    useEffect(() => {
        fetch(`https://afternoon-bayou-56175.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [control])

    const handleDelete = id => {
        fetch(`https://afternoon-bayou-56175.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setControl(!control)
                }
            })
    }

    return (


        <div>
            {
                order?.map((order) => (

                    <div className="item3 mb-4">
                        <img className="size mb-4" src={order?.img} alt="" />
                        <h3>Name: {order.name}</h3>
                        <h4>Price: {order.price}</h4>
                        <button onClick={() => handleDelete(order._id)} className="btn btn-primary text-center my-4">Cancel Order</button>
                    </div>
                )

                )
            }
        </div>

    );
};

export default MyOrder;