import React from 'react';
import img from '../../../assets/topbanner.jpg'

const HomeBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold text-yellow-500">Welcome To Law Firm!</h1>
                        <h3 className='text-3xl'>Investigate power of Your voice.</h3>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;