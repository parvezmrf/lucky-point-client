import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SingleReview = ({ review, reviewDelete }) => {

    const { user } = useContext(AuthContext)
    const { _id } = review;




    return (
        <div>


            <div className="card lg:card-side bg-base-200 shadow-xl">
                <figure className='w-32' ><img src={user?.photoURL} alt="" /></figure>
                <div className="card-body ">
                    <h2 className="card-title"> Service: {review.serviceName.slice(0, 15) + '...'} </h2>
                    <p>Name: <strong>{review?.customer}</strong> </p>
                    <p>Name: {review?.email} </p>
                    <div className='bg-base-300  rounded-md p-2 text-xl'>
                        "
                        {review?.message}
                        "
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/updatereview/${_id}`} >
                            <button className="btn btn-ghost">Edit</button>
                        </Link>

                        <button onClick={() => reviewDelete(_id)} className="btn btn-ghost">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;