import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import { Helmet } from "react-helmet";
import Spinner from '../../SharedPages/Spinner/Spinner';
const Register = () => {
    const { user, createUser, setUserInfo, setUpdateUser, updateUser } = useContext(AuthContext);
    const [display, setDisplay] = useState('hidden');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = (details) => {
        const { email, name, password, photoUrl } = details;
        setDisplay('flex');
        createUser(email, password)
            .then(res => {
                setDisplay('hidden');
                const user = res.user;
                setUserInfo(name, photoUrl)
                    .then(() => {
                        setUpdateUser(!updateUser)

                        //set jwt token in register
                        const email = { email: user.email };

                        //handle jwt token 
                        fetch('https://assignment-11-server-khaki.vercel.app/jwt', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(email)
                        })
                            .then(res => res.json())
                            .then(data => {
                                localStorage.setItem('token', data.token);
                            })
                    }).catch((error) => {
                        setDisplay('hidden');
                    });

            })
            .catch(err => {
                setDisplay('hidden');
            })
    }

    return (
        <div className="hero">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className={`absolute w-[100%] z-10 ${display}  justify-center align-middle`}>
                <Spinner></Spinner>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required {...register('name')} type="text" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>

                        {/* Photo Url */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input required {...register('photoUrl')} type="text" placeholder="photo url" className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>

                        {/* email */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required {...register('email')} type="text" placeholder="email" className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>


                        {/* password */}


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required {...register('password')} type="password" placeholder="password" className="input input-bordered input-secondary w-full max-w-xs" />
                            <label className="label">
                                <p><small>Already have an account? </small><Link to='/login' className="label-text-alt link link-hover">Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;