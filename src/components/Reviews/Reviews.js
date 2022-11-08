import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const name = user?.displayName;
    const email = user?.email;
    const userImg = user?.photoURL;

    useEffect(() => {

    }, [])
    return (
        <div>
            <h1>Reviews</h1>

        </div>
    );
};

export default Reviews;