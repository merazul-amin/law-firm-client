import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { name, img, _id } = service;
    return (
        <div>
            <div className="card w-[90%] mx-auto bg-base-100 shadow-xl text-center my-10">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;