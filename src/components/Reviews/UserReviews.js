import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import SingleReview from './SingleReview';
import { Helmet } from "react-helmet";
import swal from 'sweetalert';
const UserReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const name = user?.displayName;
    const email = user?.email;
    const userImg = user?.photoURL;


    //this state for reload useEffect after delete a review.
    const [reload, setReload] = useState(false);

    //now get user reviews

    useEffect(() => {
        fetch(`http://localhost:5000/userReviews?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [email, reload])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/userReviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    setReload(!reload);
                    swal("Review Deleted", "!", "success");
                }
            })
    }

    const handleUpdate = (id) => {
        console.log(id)
    }

    return (
        <div className='mb-96'>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>

            {
                reviews.length > 0 ?
                    <>
                        <h1 className='text-center text-4xl my-10 font-bold'>My Reviews</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>

                            {
                                reviews.map(review => <SingleReview review={review} key={review._id}>
                                    <button onClick={() => handleDelete(review._id)} className='btn btn-error' >Delete</button>
                                    <button onClick={() => handleUpdate(review._id)} className='btn btn-success mx-3'>Update</button>
                                </SingleReview>)
                            }
                        </div>
                    </>

                    :
                    <h1 className='text-5xl text-center mt-10'>Now Review added this user.</h1>
            }



        </div>
    );
};

export default UserReviews;