import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import OurRegisterCustomer from './OurRegisterCustomer/OurRegisterCustomer';
import RecentReview from './RecentReview/RecentReview';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <OurRegisterCustomer></OurRegisterCustomer>
            <RecentReview></RecentReview>

        </div>
    );
};

export default Home;