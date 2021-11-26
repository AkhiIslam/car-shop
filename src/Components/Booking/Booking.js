import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import '../Booking/Booking.css'
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';


const Booking = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    // const [details, setDetails] = useState([])
    const [singleService, setSingleService] = useState({})

    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`https://afternoon-bayou-56175.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setSingleService(data)
                reset(data)
            })
        // .then(data => console.log(data))

    }, [])

    const onSubmit = (data) => {
        delete data._id
        fetch('https://afternoon-bayou-56175.herokuapp.com/orders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))


        // console.log(data)
    }

    return (
        <div className="sizing">
            <h2 className="text-primary my-5">Shop Now</h2>

            <div className="" >


                <div className="product">
                    <img className="size " src={singleService?.image} alt="" />
                    <h3 className="">Name: {singleService.name}</h3>
                </div>
                <div className="form2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="d-block m-auto mb-3 " defaultValue={singleService.name} {...register("name")} readOnly />
                        <input className="d-block m-auto mb-3 " defaultValue={singleService?.image} {...register("img")} readOnly />
                        <input className="d-block m-auto mb-3 " defaultValue={singleService?.price} {...register("price")} readOnly />
                        <input className="d-block m-auto mb-3 " defaultValue={user?.email} {...register("email")} readOnly />


                        <input className="btn btn-primary" type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Booking;