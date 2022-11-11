import React from 'react';
import img1 from '../../../../assets/customer/1.png'
import img2 from '../../../../assets/customer/2.jpg'
import img3 from '../../../../assets/customer/3.jpg'
import img4 from '../../../../assets/customer/4.jpg'
import img5 from '../../../../assets/customer/5.jpg'

const RecentReview = () => {
    return (
        <div className='my-10 grid grid-cols-3 max-md:grid-cols-1 gap-7 ' >




            <div className="card w-96 bg-base-100 drop-shadow-xl">

                <div className="card-body">
                    <div className="card-actions items-center justify-between ">
                        <div className="card-actions items-center ">
                            <img className='w-12 rounded-full' src={img1} alt="" />
                            <div>
                                <h2 className="text-xl">Olivia</h2>
                                <h2 className="text-sm">@Olivia2154</h2>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>

                    <div>
                        <p>The services that I receive from (DN) is excellent. Dr. (Name) and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.</p>
                    </div>
                </div>
            </div>



            <div className="card w-96 bg-base-100 drop-shadow-xl">

                <div className="card-body">
                    <div className="card-actions items-center justify-between ">
                        <div className="card-actions items-center ">
                            <img className='w-12 rounded-full' src={img2} alt="" />
                            <div>
                                <h2 className="text-xl">Emma</h2>
                                <h2 className="text-sm">@Emma6548</h2>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>

                    <div>
                        <p>Wonderful experience with (Clinic name). Dr. (Name) was a wonderful surgeon, and the staff was always helpful and kind. They ensured I had a smooth prep, surgery, and follow-up. I am so glad I chose (Clinic name) and would highly recommend to anyone.</p>
                    </div>
                </div>
            </div>



            <div className="card w-96 bg-base-100 drop-shadow-xl">

                <div className="card-body">
                    <div className="card-actions items-center justify-between ">
                        <div className="card-actions items-center ">
                            <img className='w-12 rounded-full' src={img3} alt="" />
                            <div>
                                <h2 className="text-xl">Charlotte</h2>
                                <h2 className="text-sm">@Charlotte2546</h2>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>

                    <div>
                        <p>Dr. (Name) is incredible. Not only has she taken great care of my health, but also she is lovely to speak with at every appointment. It’s rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care.</p>
                    </div>
                </div>
            </div>



            <div className="card w-96 bg-base-100 drop-shadow-xl">

                <div className="card-body">
                    <div className="card-actions items-center justify-between ">
                        <div className="card-actions items-center ">
                            <img className='w-12 rounded-full' src={img4} alt="" />
                            <div>
                                <h2 className="text-xl">Amelia</h2>
                                <h2 className="text-sm">@Amelia985</h2>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>

                    <div>
                        <p>Great medical office, wonderful and warm experience from start to finish. Appreciate Dr. (Name) taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended.</p>
                    </div>
                </div>
            </div>



            <div className="card w-96 bg-base-100 drop-shadow-xl">

                <div className="card-body">
                    <div className="card-actions items-center justify-between ">
                        <div className="card-actions items-center ">
                            <img className='w-12 rounded-full' src={img5} alt="" />
                            <div>
                                <h2 className="text-xl">Isabella</h2>
                                <h2 className="text-sm">@Isabella656</h2>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                    <div>
                        <p>This practice is terrific. Dr. (Name) combines expertise and a willingness to listen and discuss. She’s also an excellent surgeon. Also, the staff is very friendly and professional. I’ve never had to wait more than a few minutes when I arrive on time for an appointment.</p>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default RecentReview;