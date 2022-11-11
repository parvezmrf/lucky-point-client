import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const ServiceSigngle = ({ servicelist }) => {

    const { _id, title, img, description, duration, rating, price } = servicelist;

    console.log(servicelist)

    return (

        <div className="card lg:card-side bg-base-100 drop-shadow-xl m-5 p-5 ">
            <figure className='w-64' >



                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>




            </figure>
            <div className="card-body md:w-1/2 ">
                <h2 className="card-title">{title}</h2>
                <p> {description.slice(0, 200) + '...'} </p>
                <div className='flex pt-5' >
                    <p>Treatment Time: {duration} Months </p>
                    <p>Rating: {rating}</p>
                    <p>Price: ${price}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/servicedetils/${_id}`} >
                        <button className="btn btn-primary">Admit</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ServiceSigngle;