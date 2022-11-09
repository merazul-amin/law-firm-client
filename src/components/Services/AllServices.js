import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import { Helmet } from "react-helmet";
import Spinner from '../SharedPages/Spinner/Spinner';
const AllServices = () => {
    const [services, setServices] = useState([]);
    const [loadingServices, setLoadingServices] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoadingServices(false)
            })
            .catch(err => {
                setLoadingServices(false);
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Home and Services</title>
            </Helmet>
            <h1 className='text-5xl text-center my-4'>All Services</h1>
            {
                loadingServices ?
                    <Spinner></Spinner>
                    :
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {

                            services.map(service => <SingleService service={service} key={service._id}></SingleService>)

                        }
                    </div>

            }


        </div>
    );
};

export default AllServices;