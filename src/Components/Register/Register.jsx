import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const Register = () => {

   const {createUser}=useContext(AuthContex)
   console.log(createUser);

    const handleRegister=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,email,password);

        // create user
        createUser(email,password)
        .then(result=>{
            console.log('create usr',result.user);
        })
        .catch(error=>{
            console.error(error)
        })
    
    }

    return (
        <div className="hero min-h-screen bg-orange-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                      <form onSubmit={handleRegister}>
                      <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register Now</button>
                        </div>
                      </form>
                     
                      <p>Already have an account? please <Link to={'/login'} className='text-xl font-bold text-blue-600 '>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;