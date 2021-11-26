import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';

const CallReview = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://afternoon-bayou-56175.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <div>

            {
                review?.map((rev) => (

                    <div className="item3 mb-4 mt-4">
                        <h2>Name: {rev.name}</h2>
                        <h3>Review: {rev.text}</h3>
                        <h4 className="mt-2">Rating:
                            <Rating className="mt-0" name="read-only" value={rev.number} readOnly />

                        </h4>




                    </div>
                )

                )
            }

        </div>
    );
};

export default CallReview;