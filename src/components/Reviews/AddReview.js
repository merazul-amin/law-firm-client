import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AddReview = ({ service, reload }) => {
    const { _id } = service;
    const { reloadReviews, setReloadReviews } = reload;

    const { user } = useContext(AuthContext);

    const userName = user?.displayName;
    const userEmail = user?.email;
    const userImg = user?.photoURL;

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const img = form.img.value;
        const reviewText = form.review.value;
        const date = new Date();


        //now set this review in db with servicer id
        const review = {
            email,
            name,
            reviewText,
            img,
            serviceId: _id,
            time: date
        }

        fetch(`https://assignment-11-server-khaki.vercel.app/setReview`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setReloadReviews(!reloadReviews);
                    form.reset();
                    toast.success('Review Saved');
                }
            })
    }
    return (
        <div>
            {
                user ? <form onSubmit={handleSubmit} className='shadow-lg border w-[90%] mx-auto my-10 p-6 rounded'>
                    <h1 className='text-center text-3xl font-bold'>Write A Review</h1>

                    <h2>Your Name</h2>
                    <input type="text" name='name' required defaultValue={userName ? userName : ''} placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />

                    <h2>Your Email</h2>
                    <input name='email' type="email" required defaultValue={userEmail ? userEmail : ''} placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />

                    <h2>Your Photo Link</h2>
                    <input name='img' type="text" required defaultValue={userImg ? userImg : ''} placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />

                    <h2>Your Review</h2>
                    <textarea name='review' required className="textarea w-[95%] lg:w-[50%] textarea-secondary" placeholder="Your Review Here"></textarea> <br />
                    <button type='submit' className='btn'>Add Review</button>
                </form>
                    :
                    <h1 className='text-2xl text-center my-10'>Please Log in for Give a Review <Link to='/login' className='text-red-600 font-bold underline'>Log In</Link> </h1>
            }

        </div>
    );
};

export default AddReview;