import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceSigngle from './ServiceSigngle';

const AllServices = () => {
    const [services, setServices] = useState([])

    useTitle('All service - Lucky Point')


    useEffect(() => {
        fetch('https://lucky-point-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
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