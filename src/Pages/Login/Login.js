import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/loginlogo.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    const { loginUser, googleLogin } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))

    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  w-full ">
                <img className='w-32' src={logo} alt="" />
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary mb-5" type="submit" value="Login" />
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary my-5 ">Login with  <span className='text-xl' > <FcGoogle /></span>  </button>
                            <p  >New user ? <Link to='/register' className='text-primary font-semibold' >  Register</Link> </p>
                        </div>
                    </form>




                </div>
            </div>

        </div>
    );
};

export default Login;