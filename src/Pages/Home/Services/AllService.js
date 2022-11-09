import React, { useEffect, useState } from 'react';
import ServiceSigngle from './ServiceSigngle';

const AllServices = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('xata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='text-center'>
            <div className='py-10' >
                <h2 className="text-4xl font-semibold text-primary ">All Available Services {services.length} </h2>
            </div>
            <hr />
            {
                services.map(servicelist => <ServiceSigngle
                    key={servicelist.package_id}
                    servicelist={servicelist}
                ></ServiceSigngle>)
            }


        </div>
    );
};

export default AllServices;