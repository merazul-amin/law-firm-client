import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../components/SharedPages/Spinner/Spinner';
import { AuthContext } from '../contexts/UserContext/UserContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        return <Spinner></Spinner>
    }
    if (user?.email) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;



};

export default PrivateRoute;