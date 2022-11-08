import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../Reviews/AddReview';
import Reviews from '../Reviews/Reviews';
import SingleReview from '../Reviews/SingleReview';

const ServiceDetails = () => {
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${service?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [service]);
    console.log(reviews);

    return (
        <div>
            {/* Service Details */}
            <div>
                <h1>Service Details</h1>
            </div>

            {/* Reviews Section */}
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {
                    reviews.length > 0 ?

                        reviews.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
                        :
                        <h1 className='text-center text-6xl my-10'>No Review's Available for this service.</h1>
                }
                {/* <Reviews></Reviews> */}
            </div>

            {/* Add Review Section */}
            <div>
                <AddReview service={service}></AddReview>
            </div>
        </div>
    );
};

export default ServiceDetails;