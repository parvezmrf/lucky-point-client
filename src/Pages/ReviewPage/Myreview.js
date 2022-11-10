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

    const reviewDelete = id => {
        const procced = window.confirm('Want to sure delete?');
        if (procced) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('delete operation succed!')
                        const rest = reviews.filter(review => review._id !== id);
                        setReviews(rest)
                    }
                })
        }
    }

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
                        reviewDelete={reviewDelete}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Myreview;