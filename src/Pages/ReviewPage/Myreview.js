import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SingleReview from './SingleReview';

const Myreview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json()
                .then(data => setReviews(data)))
    }, [user?.email])

    console.log(reviews)

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
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Myreview;