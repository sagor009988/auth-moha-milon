import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const {signinUser}=useContext(AuthContex)
    const naviGate=useNavigate()

    const handleLogin=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,email,password);

        signinUser(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset()
            naviGate('/')
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div>
             <div className="hero min-h-screen bg-orange-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                      <form onSubmit={handleLogin}>
                     
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
                            <button className="btn btn-secondary">Login Now</button>
                        </div>
                      </form>
                      <p>New Here? please <Link to={'/register'} className='text-xl font-bold text-blue-600 '>Register</Link></p>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;