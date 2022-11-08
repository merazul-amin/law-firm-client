import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services?limit=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-5xl font-bold text-center'>Services</h1>
            <div>
                {
                    services.map(service => <SingleService service={service} key={service.serial}></SingleService>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-outline">See All Services</button></Link>
            </div>
        </div>
    );
};

export default Services;