import React from 'react';
import Services from '../../Services/Services';
import HomeBanner from './HomeBanner';
import HomeBanner2 from './HomeBanner2';
import HomeBanner3 from './HomeBanner3';
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Law Firm</title>
            </Helmet>
            <HomeBanner2></HomeBanner2>
            <Services></Services>
            <HomeBanner></HomeBanner>
            <HomeBanner3></HomeBanner3>
        </div>
    );
};

export default Home;