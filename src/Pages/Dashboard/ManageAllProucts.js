import React from 'react';
import Loading from './../Shared/Loading';
import { useQuery } from 'react-query';
import ManageProductRow from './ManageProductRow';

const ManageAllProucts = () => {
    const { data: Products, isLoading } = useQuery(['products'], () => fetch('https://toolticarp-server.onrender.com/products')
    .then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
const reverseProducts = [...Products].reverse()
    return (
        <div className='mt-10'>
        <div>
            <u className='text-primary py-4'>
                <h1 className='text-bolder text-black text-center text-3xl'> All <span className='text-primary'>Products</span></h1>
            </u>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 my-5 '>
            {
                reverseProducts?.map(product =><ManageProductRow key={product._id} product={product}></ManageProductRow>)
            }
        </div>
    </div>
    );
};

export default ManageAllProucts;