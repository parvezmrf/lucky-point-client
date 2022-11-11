import React from 'react';

const AddService = () => {

    const addService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const duration = form.duration.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const img = form.img.value;


        const add = {
            title,
            description,
            duration,
            rating,
            price,
            img
        }

        console.log(add)

        fetch('https://lucky-point-server-parvezmrf.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('service submited!!')
                    form.reset();
                }
            })
            .catch(error => console.error(error))













    }



    return (
        <div>



            <form onSubmit={addService}>
                <label>Service Title:</label>
                <input name='title' type="text" placeholder="Service Name" className=" ml-20 input input-bordered input-success w-full max-w-md" required /> <br /><br />

                <label>Treatment Time:</label>
                <input name='duration' type="text" placeholder="Treatment Time:" className=" ml-20  input input-bordered input-success w-full max-w-md" required /><br /><br />

                <label>Service Price:</label>
                <input name='price' type="text" placeholder="price" className=" ml-20 input input-bordered input-success w-full max-w-md" required /> <br />
                <br />

                <label>Service Rating:</label>
                <input name='rating' type="text" placeholder="price" className=" ml-20 input input-bordered input-success w-full max-w-md" required /> <br />
                <br />

                <label>Image url:</label>
                <input name='img' type="text" placeholder="url" className=" ml-20 input input-bordered input-success w-full max-w-md" required /> <br />
                <br />

                <p>Service description</p>
                <textarea name='description' className="textarea textarea-success w-3/4 h-52" placeholder="Type long description" required></textarea>
                <br />


                <input className="btn btn-success" type="submit" value="Send" />

            </form>













        </div>
    );
};

export default AddService;