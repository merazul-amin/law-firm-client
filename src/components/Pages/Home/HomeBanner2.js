import React from 'react';

const HomeBanner2 = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-[95%] lg:w-[50%] mx-auto'>
                        <img src="https://placeimg.com/260/400/arch" className="rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-[95%] lg:w-[50%] mx-auto'>

                        <h1 className="text-5xl font-bold">This is Rovert Jam.</h1>
                        <p className="py-6">

                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner2;