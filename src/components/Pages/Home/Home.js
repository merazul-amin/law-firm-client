import React from 'react';
import Services from '../../Services/Services';
import HomeBanner from './HomeBanner';
import HomeBanner2 from './HomeBanner2';
import HomeBanner3 from './HomeBanner3';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Services></Services>
            <HomeBanner2></HomeBanner2>
            <HomeBanner3></HomeBanner3>
        </div>
    );
};

export default Home;