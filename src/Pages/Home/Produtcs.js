import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const Produtcs = () => {

    const { data: Products, isLoading } = useQuery(['products'], () => fetch('http://localhost:5000/products')
        .then(res => res.json()))
        console.log(Products);
        if(isLoading){
            return 'Loading'
        }

    return (
        <div className='mt-10'>
            <div>
                <u className='text-primary py-4'>
                    <h1 className='text-bolder text-black text-center text-3xl'> OUR <span className='text-primary'>PRODUCTS</span></h1>
                </u>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-5'>
                {
                    Products?.slice(0,6).map(product =><Product key={product._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Produtcs;