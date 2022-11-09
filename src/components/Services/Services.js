import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';
import { Helmet } from "react-helmet";
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services?limit=3')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className='my-10'>
            <Helmet>
                <title>Home and Services</title>
            </Helmet>
            <h1 className='text-5xl font-bold text-center'>I am Effective In <br /> Such Areas Of Practices.</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    services.map(service => <SingleService service={service} key={service._id}></SingleService>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-outline">See All Services</button></Link>
            </div>
        </div>
    );
};

export default Services;