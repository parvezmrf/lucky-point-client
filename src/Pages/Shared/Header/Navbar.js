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

        fetch('http://localhost:5000/services', {
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