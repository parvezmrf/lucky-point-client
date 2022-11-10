import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const ServiceDetails = () => {

    const { _id, title } = useLoaderData();
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
            {title}



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
        </div>
    );
};

export default ServiceDetails;