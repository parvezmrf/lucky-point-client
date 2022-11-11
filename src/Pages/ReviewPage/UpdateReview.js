import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const UpdateReview = () => {
    const { user } = useContext(AuthContext)
    const storeReview = useLoaderData()
    const [review, setReview] = useState(storeReview)
    const navigate = useNavigate()

    /////////////////

    const changeReview = event => {
        event.preventDefault();
        alert('Updated')
        navigate('/')

        // console.log(user);
        // fetch(`https://lucky-point-server.vercel.app/updatereview/${storeReview._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)

        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             alert('User updated')
        //             console.log(data)

        //         }
        //     })

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


            <form onSubmit={changeReview} className='text-center'>


                <textarea onChange={InputChange} name='message' defaultValue={storeReview?.message} className="textarea textarea-success w-3/4 h-52" placeholder="Type your review" required></textarea>
                <br />

                <input className="btn btn-success" type="submit" value="Send" />

            </form>
        </div>
    );
};

export default UpdateReview;