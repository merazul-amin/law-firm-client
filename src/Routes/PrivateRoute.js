import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext/UserContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation();


    const { user } = useContext(AuthContext);
    if (user?.email) {
        return children;
    }

    <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;