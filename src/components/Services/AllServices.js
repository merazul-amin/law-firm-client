import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1>All Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {

                    services.map(service => <SingleService service={service} key={service.serial}></SingleService>)

                }
            </div>
        </div>
    );
};

export default AllServices;