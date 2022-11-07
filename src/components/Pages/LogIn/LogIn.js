import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LogIn = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (details) => {
        const { email, password } = details;
        console.log(email, password);

        // navigate(from, { replace: true });
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email')} type="text" placeholder="email" className="input input-bordered input-secondary w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password')} type="password" placeholder="password" className="input input-bordered input-secondary w-full max-w-xs" />
                                <label className="label">
                                    <p><small>New here? </small><Link to='/register' className="label-text-alt link link-hover">Register</Link></p>


                                </label>
                            </div>
                            <div className="form-control">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;