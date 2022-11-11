import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';


const Navbar = () => {

    //////////////////
    const addService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const duration = form.duration.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const img = form.img.value;


        const add = {
            title,
            description,
            duration,
            rating,
            price,
            img
        }

        console.log(add)

        fetch('https://lucky-point-server-parvezmrf.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('service submited!!')
                    form.reset();
                }
            })
            .catch(error => console.error(error))



    }


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
                        user?.uid ? <li className='px-2 ' > <label htmlFor="my-modal-5" className="px-4 max-md:px-5 border">Add Service</label> </li> : ''
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

                    <li>

                        <label className="swap swap-rotate">

                            <input type="checkbox" />


                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>

                    </li>


                </ul>
            </div>





            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">



                    <form onSubmit={addService}>



                        <div className="overflow-x-auto">
                            <table className="table w-1/2">


                                <tbody>


                                    <tr>
                                        <td>Service Title:</td>
                                        <td><input name='title' type="text" placeholder="Service Name" className=" ml-20 input input-bordered input-success w-full max-w-md" required /></td>
                                    </tr>


                                    <tr>
                                        <td>Treatment Time:</td>
                                        <td>
                                            <input name='duration' type="text" placeholder="Treatment Time:" className=" ml-20  input input-bordered input-success w-full max-w-md" required />

                                        </td>
                                    </tr>



                                    <tr>
                                        <td>Service Price:</td>
                                        <td>
                                            <input name='price' type="text" placeholder="price" className=" ml-20 input input-bordered input-success w-full max-w-md" required />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Service Rating:</td>
                                        <td>
                                            <input name='rating' type="text" placeholder="price" className=" ml-20 input input-bordered input-success w-full max-w-md" required />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Image url:</td>
                                        <td>
                                            <input name='img' type="text" placeholder="url" className=" ml-20 input input-bordered input-success w-full max-w-md" required />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Service description</td>
                                        <td>

                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>



                        <textarea name='description' className="textarea textarea-success w-3/4 h-52" placeholder="Type long description" required></textarea>
                        <br />


                        <input className="btn btn-success" type="submit" value="Add Service" />

                    </form>






                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">X</label>
                    </div>
                </div>
            </div >



        </div >
    );
};

export default Navbar;