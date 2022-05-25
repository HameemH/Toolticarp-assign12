import React from 'react';
import Loading from './../Shared/Loading';
import { useQuery } from 'react-query';

const Review = () => {
    const { data: Reviews, isLoading } = useQuery(['reviews'], () => fetch('http://localhost:5000/reviews')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const reverseReviews = [...Reviews].reverse()
    return (
        <div className='py-8'>
            <h2 className='text-center text-3xl font-bold'>Words From Our Customers</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                {
                    reverseReviews?.slice(0, 3).map(review => 
                        <div class="card mx-auto lg:w-96 mb-4 bg-gray-300 border border-lime-300 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <p>{review.review}</p>

                                <p>By <span className='text-primary'>{review.name}</span></p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Review;