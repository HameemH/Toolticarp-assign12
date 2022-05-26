import React from 'react';
import Banner from './Banner';
import Bulkorder from './Bulkorder';
import BusinessSummary from './BusinessSummary';
import NewsLetter from './NewsLetter';
import Produtcs from './Produtcs';
import Review from './Review';

const Home = () => {
    return (
        <div className='px-5 bg-slate-100'>
            <Banner></Banner>
            <Produtcs></Produtcs>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
            <NewsLetter></NewsLetter>
            <Bulkorder></Bulkorder>
        </div>
    );
};

export default Home;