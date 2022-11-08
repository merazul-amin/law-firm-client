import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const name = user?.displayName;
    const email = user?.email;
    const userImg = user?.photoURL;

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1>Reviews</h1>
            <div>
                {
                    reviews.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
                }
            </div>

        </div>
    );
};

export default Reviews;