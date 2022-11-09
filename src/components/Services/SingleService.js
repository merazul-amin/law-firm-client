import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleService = ({ service }) => {
    const { name, img, _id, price, info } = service;
    return (
        <div>
            <PhotoProvider>
                <div className="card w-[90%] mx-auto bg-base-100 shadow-xl text-center my-10">
                    <PhotoView src={img}>
                        <figure><img src={img} className='h-[350px] w-full' alt="/" /></figure>
                    </PhotoView>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p>Price: {price} </p>
                        <p>{
                            info?.length > 100 ? info.slice(0, 100) + '......' : info}</p>
                        <div className="card-actions justify-center">
                            <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>

                        </div>
                    </div>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default SingleService;