import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SingleReview = ({ review }) => {

    const { user } = useContext(AuthContext)

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
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;