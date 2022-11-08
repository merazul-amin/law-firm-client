import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner2 = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">

                    <div className='w-[95%] lg:w-[50%] mx-auto'>

                        <h1 className="text-5xl font-bold text-center">This is Rovert Jam.</h1>
                        <p className="py-6 text-center">
                            I am lawyer for many purpose. I have 20 years experience and I did many works with many client.
                            <br />
                            If you are looking for a lawyer, then you are in right place. <br />
                            <span className='text-yellow-500 font-bold'>Have a look about my services in clicking services button below.</span>
                        </p>
                        <div className='text-center'>
                            <Link to='/services'> <button className="btn btn-primary">My Services</button></Link>
                        </div>
                    </div>
                    <div className='w-[95%] lg:w-[50%] mx-auto'>
                        <img src="https://images.unsplash.com/photo-1605664041952-4a2855d9363b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="rounded-lg shadow-2xl" alt='/' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner2;