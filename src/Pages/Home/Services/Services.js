import React, { useEffect, useState } from 'react';
import ServiceSigngle from './ServiceSigngle';

const Services = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const [number, setNumber] = useState(3)

    const showMore = (num) => {
        const more = num + 99;
        setNumber(more)
        console.log(number)

    }

    return (
        <div >
            <div className='py-10 text-center' >
                <h2 className="text-4xl font-semibold text-primary ">Our Service</h2>
                <hr />
            </div>
            {
                services.slice(0, `${number}`).map(servicelist => <ServiceSigngle
                    key={servicelist.package_id}
                    servicelist={servicelist}
                ></ServiceSigngle>)
            }
            <div className='py-5 text-center'>

                <button className="btn btn-outline btn-secondary" onClick={() => showMore(20)} >Show More</button>
            </div>

        </div>
    );
};

export default Services;