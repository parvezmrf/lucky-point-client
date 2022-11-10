import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const UpdateReview = () => {
    const { user } = useContext(AuthContext)
    const storeReview = useLoaderData()
    const [review, setReview] = useState(storeReview)


    /////////////////

    const changeReview = event => {
        event.preventDefault();

        console.log(review)

    }

    const InputChange = event => {
        const field = event.target.name;
        const value = event.target.value
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);

    }





    ////////////////
    return (
        <div>
            update {storeReview.message}


            <form onSubmit={changeReview} className='text-center'>
                <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className=" mx-6 input input-bordered input-success w-full max-w-md" required />

                <input name='email' type="email" placeholder="Your email" defaultValue={user?.email} disabled className="input input-bordered input-success w-full max-w-md" required /> <br />
                <br />

                <input name='phone' type="text" placeholder="Your contact number" className=" mx-6 input input-bordered input-success w-full max-w-md" required />

                <input name='age' type="number" placeholder="Your age" className="input input-bordered input-success w-full max-w-md" required /> <br />
                <br />

                <textarea onChange={InputChange} name='message' defaultValue={storeReview?.message} className="textarea textarea-success w-3/4 h-52" placeholder="Type your review" required></textarea>
                <br />

                <input className="btn btn-success" type="submit" value="Send" />

            </form>
        </div>
    );
};

export default UpdateReview;