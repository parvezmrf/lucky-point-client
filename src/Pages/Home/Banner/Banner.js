import React from 'react';
import img1 from '../../../assets/banner/1.jpg'

const Banner = () => {
    return (
        <div>

            <div>


                <div className="hero min-h-16 bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold ">Welcome here!</h1>
                            <p className="py-6 italic"> “Health is a state of complete harmony of the body, mind and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open.” - <span className='font-semibold' >B.K.S. Iyengar</span> </p>
                            <button className="btn text-white border-0 bg-[#f88a6c]">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>










            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img alt='' src={img1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='' src={img1} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='' src={img1} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='' src={img1} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">o</a>
                <a href="#item2" className="btn btn-xs">o</a>
                <a href="#item3" className="btn btn-xs">o</a>
                <a href="#item4" className="btn btn-xs">o</a>
            </div>
        </div>
    );
};

export default Banner;