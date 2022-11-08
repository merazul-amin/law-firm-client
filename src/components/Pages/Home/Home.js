import React from 'react';
import Services from '../../Services/Services';
import HomeBanner from './HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Services></Services>
        </div>
    );
};

export default Home;