import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const EditReview = () => {
    const review = useLoaderData();
    const { _id, reviewText, img, name, email } = review;
    const { user } = useContext(AuthContext);

    const userName = name;
    const userEmail = email;
    const userImg = img;

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
            time: date.toLocaleString()
        }

        const agree = window.confirm('Submit Changes??');
        if (!agree) {
            return;
        }

        fetch(`https://assignment-11-server-khaki.vercel.app/updateReview/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Edited Successfully.')
                    form.reset();
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Edit Review- Law Firm</title>
            </Helmet>
            <form onSubmit={handleSubmit} className='shadow-lg border w-[90%] mx-auto my-10 p-6 rounded'>
                <h1 className='text-center text-3xl font-bold'>Edit Your Review Review</h1>

                <h2>Your Name</h2>
                <input disabled type="text" name='name' required defaultValue={userName ? userName : ''} placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />

                <h2>Your Email</h2>
                <input disabled name='email' type="email" required defaultValue={userEmail ? userEmail : ''} placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />

                <h2>Your Photo Link</h2>
                <input disabled name='img' type="text" required defaultValue={userImg ? userImg : ''} placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />

                <h2 className='my-3'>Your New Review</h2>
                <textarea name='review' required className="textarea w-[95%] lg:w-[50%] textarea-secondary" placeholder="Your New Review Here"></textarea> <br />

                <button type='submit' className='btn'>Submit Changes</button>
            </form>
        </div>
    );
};

export default EditReview;