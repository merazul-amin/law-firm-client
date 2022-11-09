import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import { Helmet } from "react-helmet";
const Register = () => {
    const { user, createUser, setUserInfo, setUpdateUser, updateUser } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (details) => {
        const { email, name, password, photoUrl } = details;

        createUser(email, password)
            .then(res => {
                const user = res.user;
                setUserInfo(name, photoUrl)
                    .then(() => {
                        setUpdateUser(!updateUser)
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero">
            <Helmet>
                <title>Register</title>
            </Helmet>
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