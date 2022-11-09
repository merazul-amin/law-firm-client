import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import swal from 'sweetalert';
import { FaGoogle, IconName } from "react-icons/fa";

const LogIn = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);
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

        if (email && password) {
            logIn(email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate(from, { replace: true });
                    swal("Logged In!", "!", "success");

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                });
        }
    }
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(res => {
                const user = res.user;
            })
            .catch(err => console.log(err))
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

                                <button onClick={handleGoogleLogIn} className="btn btn-success my-3">
                                    <FaGoogle className='text-white text-2xl mr-3'></FaGoogle>  Google</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;