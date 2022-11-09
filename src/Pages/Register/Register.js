import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/loginlogo.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
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
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />

                        </div>

                        <div>
                            <p >Already have account <Link className='text-primary font-semibold' to='/login' >Login</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;