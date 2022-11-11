import React from 'react';

const Signnn = ({ rr }) => {

    const { customer, age, email, message } = rr;

    console.log(rr)
    return (
        <div>

            <div className="card w-3/4 mx-auto bg-base-100 drop-shadow-xl">
                <div className="card-body">
                    <div className="card-actions items-center justify-between ">
                        <div className="card-actions items-center ">
                            <img className='w-12 rounded-full' src='' alt="" />

                            <div >
                                <h2 className="text-xl"> {customer} </h2>
                                <span className="text-sm"> {email} </span> |
                                <span className="text-sm"> {age} years old </span>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>

                    <div>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signnn;