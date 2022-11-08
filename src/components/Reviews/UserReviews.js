import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import SingleReview from './SingleReview';
import { Helmet } from "react-helmet";
const UserReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const name = user?.displayName;
    const email = user?.email;
    const userImg = user?.photoURL;

    //now get user reviews

    useEffect(() => {
        fetch(`http://localhost:5000/userReviews?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [email])

    const handleDelete = () => {
        console.log('clicked')
    }

    const handleUpdate = () => {
        console.log('clicked')
    }
    console.log(user);
    return (
        <div className='mb-96'>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>

            {
                reviews.length > 0 ?
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {
                            reviews.map(review => <SingleReview review={review} key={review._id}>
                                <button onClick={() => handleDelete()} className='btn btn-error' >Delete</button>
                                <button onClick={() => handleUpdate()} className='btn btn-success mx-3'>Update</button>
                            </SingleReview>)
                        }
                    </div>
                    :
                    <h1 className='text-5xl text-center mt-10'>Now Review added this user.</h1>
            }



        </div>
    );
};

export default UserReviews;