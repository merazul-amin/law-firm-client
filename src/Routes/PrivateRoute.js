import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/SharedPages/Spinner/Spinner';
import { AuthContext } from '../contexts/UserContext/UserContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner></Spinner>
    }
    if (user?.email) {
        return children;
    }

    <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;