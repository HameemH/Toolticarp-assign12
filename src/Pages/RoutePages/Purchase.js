import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [product, setproduct] = useState({});
    const [orderQuantity, setOrderQuantity] = useState(0)
    const { _id, img, description, minQuantity, availQuantity, name, price } = product;
    const [user] = useAuthState(auth);

    console.log(typeof orderQuantity);
    useEffect(
        () => {
            fetch(`http://localhost:5000/products/${id}`)
                .then(res => res.json())
                .then(data => {
                    setproduct(data)

                })
        }, [])

    const handleChangeQuantity = e => {
        e.preventDefault();
        const quantity = e.target.quantity.value;
        setOrderQuantity(parseInt(quantity))

    }
    return (
        <div className='p-10'>
            <div className='py-5'>
                <h1 className='text-center text-5xl'> Hello Dear, <span className='text-primary'>{user?.displayName}</span>({user?.email})</h1>
            </div>
            <div className='grid grid-cols-2'>
                <div class="card mx-auto border border-lime-300 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p>{description}</p>
                        <h2 className='card-title '>Price Per Unit:${price}</h2>
                        <p className=''>Minium Order:{minQuantity} Pcs</p>
                        <p>Available Product Amount:{availQuantity} Pcs</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    {/* card for increasing quantity */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            {
                                (orderQuantity > minQuantity  && orderQuantity<availQuantity) ?
                                    <h2 class="font-bold text-center">Quantity of Prouduct you want to Order <span className='text-primary'>{orderQuantity}</span></h2> :
                                    <h2 class="font-bold text-center">Quantity of Prouduct you want to Order <span className='text-primary'>{minQuantity}</span></h2>
                            }
                            <h2 className='card-title'>If you want to change Quantity</h2>
                            <form onSubmit={handleChangeQuantity} >
                                <input type="number" name='quantity' className='border border-lime-400 rounded-lg p-3' />
                                <input type="submit" value="Change Quantity" class="btn btn-primary mt-3" />
                            </form>

                        </div>
                    </div>
                    <div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">Card title!</h2>
                                <form className='d-flex flex-column' >
                                    <input type="text" name="Product" placeholder='Product Name' value={name} disabled id="" className='p-2 m-2 border border-lime-400  ' required />
                                    <input type="text" name="name" placeholder='Your Name' value={user?.displayName} disabled id="" className='p-2 m-2 border border-lime-400  ' required />
                                    <input type="email" name="email" value={user?.email} className='p-2 m-2 rounded- border border-lime-400  ' id="" disabled />
                                    <input type="text" name="price" placeholder='Product price'  id="" className='p-2 m-2  border border-lime-400  ' required />
                                    {
                                         (orderQuantity > minQuantity && orderQuantity<availQuantity) ? 
                                         <input type="number" name="quantity" value={orderQuantity}  className='p-2 m-2 rounded-pill border border-lime-400 ' id="" required />
                                         :
                                         <input type="number" name="quantity"  value={minQuantity} className='p-2 m-2 rounded-pill border border-lime-400  ' id="" required />

                                    }
                                    <input type="submit" value="PlACE YOUR ORDER" className='btn btn-primary  rounded-pill' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Purchase;