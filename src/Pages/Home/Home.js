import React from 'react';
import Banner from './Banner';
import Produtcs from './Produtcs';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner></Banner>
            <Produtcs></Produtcs>
        </div>
    );
};

export default Home;