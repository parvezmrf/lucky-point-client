import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/customer/1.png'
import img2 from '../../../../assets/customer/2.jpg'
import img3 from '../../../../assets/customer/3.jpg'
import img4 from '../../../../assets/customer/4.jpg'
import img5 from '../../../../assets/customer/5.jpg'
import img99 from '../../../../assets/customer/99.jpg'

const OurRegisterCustomer = () => {
    return (
        <div className='text-center border rounded-xl'>
            <h2 className="text-3xl font-semibold text-primary">Our Happy Customer</h2>

            <div className=" -space-x-6 mx-auto my-5 ">

                <div className="avatar ">
                    <Link>
                        <div className="w-24">
                            <img className='rounded-full' src={img1} alt='' />
                        </div>
                    </Link>
                </div>

                <div className="avatar">
                    <Link>
                        <div className="w-24">
                            <img className="rounded-full border-4" src={img2} alt='' />
                        </div>
                    </Link>
                </div>

                <div className="avatar">
                    <Link>
                        <div className="w-24">
                            <img className="rounded-full border-4" src={img3} alt='' />
                        </div>
                    </Link>
                </div>

                <div className="avatar">
                    <Link>
                        <div className="w-24">
                            <img className="rounded-full border-4" src={img4} alt='' />
                        </div>
                    </Link>
                </div>

                <div className="avatar">
                    <Link>
                        <div className="w-24">
                            <img className="rounded-full border-4" src={img5} alt='' />
                        </div>
                    </Link>
                </div>
                <div className="avatar">
                    <Link>
                        <div className="w-24">
                            <img className="rounded-full border-4" src={img99} alt='' />
                        </div>
                    </Link>
                </div>

                <br />

                <div className="stats shadow mt-2 max-md:block ">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">

                        <div className="stat-value">95%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default OurRegisterCustomer;