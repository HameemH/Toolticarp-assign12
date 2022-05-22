import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [product, setproduct] = useState({});
    const { _id, img, description, minQuantity, availQuantity, name, price } = product;
    const [user] = useAuthState(auth);


    useEffect(
        () => {
            fetch(`http://localhost:5000/products/${id}`)
                .then(res => res.json())
                .then(data => {
                    setproduct(data)
                    console.log(data);
                })
        }, [])
    return (
        <div className='p-10'>
            <div className='py-5'>
                <h1 className='text-center text-5xl'> Hello Dear, <span className='text-primary'>{user?.displayName}</span>({user?.email})</h1>
            </div>
            <div className='grid grid-cols-2'>
                <div class="card border border-lime-300 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p>{description}</p>
                        <h2 className='card-title '>Price Per Unit:${price}</h2>
                        <p className=''>Minium Order:{minQuantity} Pcs</p>
                        <p>Available Product Amount:{availQuantity} Pcs</p>
                        <div class="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Purchase;