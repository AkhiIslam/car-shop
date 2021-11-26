import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://afternoon-bayou-56175.herokuapp.com/review', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        reset(data)
    };

    return (
        <div>

            <h2 className="text-primary my-4">Please Review About Our Website</h2>

            <div className="form2 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Inter Your Name " required />
                    <br />
                    <br />
                    <textarea {...register("text")} placeholder="Please Review " required />
                    <br />
                    <h3 className="text-primary my-4"> Rating  <select {...register("number")}>
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option >4</option>
                        <option >5</option>
                    </select></h3>



                    <br />

                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Review;