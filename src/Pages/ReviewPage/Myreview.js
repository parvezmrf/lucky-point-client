import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import SingleReview from './SingleReview';

const Myreview = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useTitle('My Reviews - Lucky Point')



    useEffect(() => {
        fetch(`https://lucky-point-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('lucky-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOutUser();
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, logOutUser])

    const reviewDelete = id => {
        const procced = window.confirm('Want to sure delete?');
        if (procced) {
            fetch(`https://lucky-point-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete operation succed!')
                        const rest = reviews.filter(review => review._id !== id);
                        setReviews(rest)
                    }
                })
        }
    }


    return (
        <div>
            <h3 className='text-2xl my-10 text-center'> {reviews?.length ?

                <>
                    You have       {reviews.length} Review!!

                </>

                :
                'No review were added by you'


            }

            </h3>
            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 my-10 mx-auto w-4/5' >
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                        reviewDelete={reviewDelete}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Myreview;