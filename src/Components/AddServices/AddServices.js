import React from 'react';
import './AddServices.css'
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {

        axios.post('https://afternoon-bayou-56175.herokuapp.com/services', data)

            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }

            })

        console.log(data)

    };

    return (

        <div>
            <h1 className="text-primary mt-5">Add Service</h1>

            <form className='form mt-5 p-5' onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="m-2 p-2 "
                />
                <br />
                <textarea
                    {...register("description", { required: true })}

                    placeholder="Description"
                    className="m-2 p-2 "
                />
                <br /><input
                    type="number" {...register("price", { required: true })}

                    placeholder="Price"
                    className="m-2 p-2 "
                />
                <br />
                <input
                    {...register("image", { required: true })}

                    placeholder="Image Link"
                    className="m-2 p-2 mb-4"
                />
                <br />

                <input className="btn btn-primary" type="submit" />
            </form>
        </div>

    );
};

export default AddServices;