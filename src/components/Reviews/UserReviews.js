import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const UserReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const name = user?.displayName;
    const email = user?.email;
    const userImg = user?.photoURL;

    //now get user reviews

    useEffect(() => {
        fetch()
    }, [])
    return (
        <div>
            <h1>User Reviews</h1>
        </div>
    );
};

export default UserReviews;