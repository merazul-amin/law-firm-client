import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (details) => {
        const { email, name, password } = details;
        console.log(email, name, password);
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register('name')} type="text" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>
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
                                <p><small>Already have an account? </small><Link to='/login' className="label-text-alt link link-hover">Register</Link></p>


                            </label>
                        </div>
                        <div className="form-control">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;