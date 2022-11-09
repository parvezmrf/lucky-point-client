import React from 'react';

const ServiceSigngle = ({ servicelist }) => {

    const { title, img, description, duration, rating, price } = servicelist;

    return (

        <div className="card lg:card-side bg-base-100 drop-shadow-xl m-5 p-5 ">
            <figure ><img className='rounded-xl md:w-72' src={img} alt="Album" /></figure>
            <div className="card-body md:w-1/2 ">
                <h2 className="card-title">{title}</h2>
                <p> {description.slice(0, 200) + '...'} </p>
                <div className='flex pt-5' >
                    <p>Treatment Time: {duration} Months </p>
                    <p>Rating: {rating}</p>
                    <p>Price: ${price}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Admit</button>
                </div>
            </div>
        </div>

    );
};

export default ServiceSigngle;