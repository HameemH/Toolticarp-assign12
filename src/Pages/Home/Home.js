import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import NewsLetter from './NewsLetter';
import Produtcs from './Produtcs';
import Review from './Review';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <Produtcs></Produtcs>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;