import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/SharedPages/Footer/Footer';
import NavigationBar from '../components/SharedPages/NavigationBar/NavigationBar';

const Layout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;