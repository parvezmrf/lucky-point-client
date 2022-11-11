import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ForReview from '../../ReviewPage/ForReview';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceDetails = () => {

    const { _id, title, img, description, duration, rating, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unathenticated';
        const phone = form.phone.value;
        const age = form.age.value;
        const message = form.message.value;

        // console.log(name, email, phone, age, message)
        const review = {
            serviceId: _id,
            serviceName: title,
            customer: name,
            email,
            phone,
            age,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review submited!!')
                    form.reset();
                }
            })
            .catch(error => console.error(error))



    }

    return (
        <div>
            <>


                <div className="card card-compact w-3/4 mx-auto bg-base-100 shadow-xl my-20">

                    <div className="card-body">
                        <h2 className="card-title text-3xl">{title}</h2>


                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" />
                            </PhotoView>
                        </PhotoProvider>


                        <p className='text-xl' >{description}</p>
                        <p className='text-2xl my-3' >Treatment time: <strong>{duration} Months</strong> </p>
                        <p className='text-2xl my-3' >Customer Rating: <strong>{rating} </strong> out of 5 </p>
                        <p className='text-2xl my-3' >Price: <strong>${price} </strong>/Month</p>


                    </div>
                </div>


            </>


            {

                user?.uid ?
                    <form onSubmit={handleReview} className='text-center'>
                        <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className=" mx-6 input input-bordered input-success w-full max-w-md" required />

                        <input name='email' type="email" placeholder="Your email" defaultValue={user?.email} disabled className="input input-bordered input-success w-full max-w-md" required /> <br />
                        <br />

                        <input name='phone' type="text" placeholder="Your contact number" className=" mx-6 input input-bordered input-success w-full max-w-md" required />

                        <input name='age' type="number" placeholder="Your age" className="input input-bordered input-success w-full max-w-md" required /> <br />
                        <br />

                        <textarea name='message' className="textarea textarea-success w-3/4 h-52" placeholder="Type your review" required></textarea>
                        <br />

                        <input className="btn btn-success" type="submit" value="Send" />

                    </form>
                    : <h2 className='text-2xl text-center'>'You need to login for add review' <Link to='/login' > <button className='btn btn-primary'>Login Now.</button></Link></h2>
            }


            <ForReview></ForReview>

        </div>
    );
};

export default ServiceDetails;