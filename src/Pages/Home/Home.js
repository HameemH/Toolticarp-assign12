import React from 'react';
import Banner from './Banner';
import Produtcs from './Produtcs';
import Review from './Review';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <Produtcs></Produtcs>
            <Review></Review>
        </div>
    );
};

export default Home;