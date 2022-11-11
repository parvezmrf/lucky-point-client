import React, { useEffect, useState } from 'react';
import CustomerReviews from './CustomerReviews';



const ForReview = () => {

    const [rev, setRev] = useState([])


    useEffect(() => {
        fetch(`https://lucky-point-server-parvezmrf.vercel.app/reviews/`)
            .then(res => res.json()
                .then(data => setRev(data)))
    }, [])

    console.log(rev)

    return (
        <div className='my-10 grid grid-cols-1 max-md:grid-cols-1 gap-7' >
            {
                rev.map(rr => <CustomerReviews
                    key={rr._id}
                    rr={rr}

                ></CustomerReviews>)
            }
        </div>
    );
};

export default ForReview;