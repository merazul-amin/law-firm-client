import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../Reviews/AddReview';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            {/* Service Details */}
            <div>
                <h1>Service Details</h1>
            </div>

            {/* Reviews Section */}
            <div>
                <Reviews></Reviews>
            </div>

            {/* Add Review Section */}
            <div>
                <AddReview service={service}></AddReview>
            </div>
        </div>
    );
};

export default ServiceDetails;