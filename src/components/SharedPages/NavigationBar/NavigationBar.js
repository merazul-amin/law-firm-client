import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                // toast.success('Successfully Logged Out');
                swal("Logged Out!", "", "success");
            }).catch((error) => {
                // An error happened.
            });
    }

    const navItems = <>
        <li className='text-white font-bold hover:text-black'><Link to='/'>Home</Link></li>

        {
            user ?
                <>
                    <li className='text-white font-bold hover:text-black'><Link>My Reviews</Link></li>
                    <li className='text-white font-bold hover:text-black'><Link>Add Service</Link></li>
                    <button onClick={handleLogOut} className='btn btn-secondary'>Log Out</button>
                </>

                :
                <>
                    <li className='text-white font-bold hover:text-black'><Link to='/login'>Log In</Link></li>
                    <li className='text-white font-bold hover:text-black'><Link to='/register'>Register</Link></li>
                </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-purple-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-500 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;