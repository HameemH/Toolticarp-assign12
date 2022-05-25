import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Produtcs = () => {

    const { data: Products, isLoading } = useQuery(['products'], () => fetch('https://peaceful-stream-38691.herokuapp.com/products')
        .then(res => res.json()))
        if(isLoading){
            return <Loading></Loading>
        }
   const reverseProducts = [...Products].reverse()
   
    return (
        <div className='mt-10'>
            <div>
                <u className='text-primary py-4'>
                    <h1 className='text-bolder text-black text-center text-3xl'> OUR MANUFACTURED <span className='text-primary'>TOOLS</span></h1>
                </u>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 my-5 '>
                {
                    reverseProducts?.slice(0,6).map(product =><Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Produtcs;