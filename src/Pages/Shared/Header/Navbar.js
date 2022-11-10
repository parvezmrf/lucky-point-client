import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';


const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100 max-md:block">
            <div className="flex-1">
                <Link to='/'><img className='h-20' src={logo} alt="" /></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 max-md:block md:flex font-medium ">

                    <li className='px-2 ' > <Link to='/' className='px-4 max-md:px-5 border' >Home </Link> </li>
                    <li className='px-2 ' > <Link to='/allservices' className='px-4 max-md:px-5 border'  >All Service</Link> </li>


                    {
                        user?.uid ? <li className='px-2 ' > <Link to='/' className='px-4 max-md:px-5 border'   >Add Service</Link> </li> : ''
                    }
                    {
                        user?.uid ? <li className='px-2 ' > <Link to='/myreview' className='px-4 max-md:px-5 border'   >My Review</Link> </li> : ''
                    }


                    <li className='px-2  ' > <Link to='/' className='px-4 max-md:px-5 text-white border-0 bg-[#f88a6c]' >Emergency Admit</Link> </li>



                    <li className='px-2 ' > <Link to='/blog' className='px-4 max-md:px-5 border' >Blog</Link> </li>



                    <li>



                    </li>



                    {
                        user?.displayName ? <li className='pl-8 max-md:p-0' > <Link to='/' > Hello, <strong>{user?.displayName}</strong>  </Link> </li> : ''
                    }

                    {
                        user?.uid ? <>
                            <li className='max-md:p-0 text-4xl ' >
                                {
                                    user?.photoURL ? <Link><img className='h-8 rounded-full' src={user.photoURL} alt="" srcSet="" /> </Link> :
                                        <Link><FaUserCircle></FaUserCircle>  </Link>
                                }

                            </li>
                            <li className='max-md:p-0'><Link onClick={logOutUser} ><FiLogOut></FiLogOut></Link> </li>

                        </> :
                            <><li className='px-1 max-md:p-0 ' > <Link to='/login'>Login</Link> </li>
                                <li className='px-1 max-md:p-0' > <Link to='/register'  >Register</Link> </li>
                            </>
                    }


                </ul>
            </div>

        </div>
    );
};

export default Navbar;