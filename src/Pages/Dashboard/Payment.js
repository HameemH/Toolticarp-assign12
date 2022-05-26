import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51L3ZFRBpM4RocrHh4jUH8xeFOz1KLcKsSJle1QwhrEQpLjsp9Fj61IIPbzxzADzpCNJTqfvLlQH4dT9X4G7jH1aj00AZC38lrt')
const Payment = () => {
    const { id } = useParams();
    const { data: Order, isLoading,} = useQuery(['order'], () => fetch(`http://localhost:5000/orders/${id}`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(Order);
    return (
        <div className='flex flex-col  justify-center items-center h-screen'>
            <div class="card lg:w-96 border mb-4 border-lime-300 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Hello,<span className='text-primary'>{Order.cutomerName}</span></h2>
                    <p>Do You want to pay for {Order.quantiy} pcs of <span className='text-primary'>{Order.product}</span> total cost of <span className='text-primary'>{Order.price} USD</span></p>

                </div>
            </div>
            <div class="card lg:w-96 border border-lime-300 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise} >
                        <CheckoutForm order={Order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;