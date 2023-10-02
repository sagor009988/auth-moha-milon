import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { AuthContex } from '../../AuthProvider/AuthProvider';
import auth from '../../firebase.config';
import { Result } from 'postcss';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContex)
    console.log(logOut);
    const handleSignOut = () => {
        logOut()
           
            .then(() => {
                console.log('logOut successfully,');
            })
            .catch(error => console.error(error))
    }


    const Navlinks = <>

        <NavLink className='text-2xl font-bold mr-3' to={'/'}>Home</NavLink>
        <NavLink className='text-2xl font-bold mr-3' to={'/login'}>Login</NavLink>
        <NavLink className='text-2xl font-bold mr-3' to={'/register'}>Register</NavLink>
        <NavLink className='text-2xl font-bold mr-3' to={'/orders'}>Orders</NavLink>
        {
            user && <>
            
            <NavLink className='text-2xl font-bold mr-3' to={'/profile'}>Profile</NavLink>
            <NavLink className='text-2xl font-bold mr-3' to={'/payment'}>Payments</NavLink>
            </>
        }
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-300 rounded-box w-52">
                            {
                                Navlinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">SOHEL</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  px-1">
                        {
                            Navlinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                        <p>{user.email}</p>
                        <a onClick={handleSignOut} className="btn btn-sm">Sign Out</a>
                        </> :
                        <Link to={'/login'}><button className='btn btn-sm'>Login</button></Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;