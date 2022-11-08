import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            <h1>Service Details</h1>
        </div>
    );
};

export default ServiceDetails;