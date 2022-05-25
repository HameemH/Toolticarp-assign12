import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [product, setproduct] = useState({});
    const [orderQuantity, setOrderQuantity] = useState(0)
    const [wholePrice, setWholePrice] = useState(0);
    const { _id, img, description, minQuantity, availQuantity, name, price } = product;
    const [user] = useAuthState(auth);

    console.log(typeof orderQuantity);
    useEffect(
        () => {
            fetch(`https://peaceful-stream-38691.herokuapp.com/products/${id}`)
                .then(res => res.json())
                .then(data => {
                    setproduct(data)

                })
        }, [])
        useEffect(
            ()=>{
                const initialQuantity = parseInt(minQuantity);
                const pricePerUnit = parseInt(price)
                const wholePrice = parseInt(initialQuantity * pricePerUnit);
        
                setWholePrice(parseInt(wholePrice))
            }
            ,[minQuantity])
       

    const handleChangeQuantity = e => {
        e.preventDefault();
        const quantity = parseInt(e.target.quantity.value);
        const pricePerUnit = parseInt(price)
        const initialQuantity = parseInt(minQuantity)
        if (quantity > minQuantity && quantity < availQuantity){
            setOrderQuantity(quantity)
            const wholePrice = parseInt(quantity * pricePerUnit);
            setWholePrice(parseInt(wholePrice))
           alert("Your Order Quantity has been updated")
           e.target.reset()

        }
        else{
            alert("Please Put a valid Quantity")
            const wholePrice = parseInt(quantity * pricePerUnit);

            setWholePrice(parseInt(wholePrice))
            e.target.reset()
        }

    }
    const handleOrder = e =>{
        e.preventDefault();
        const product = e.target.Product.value;
        const cutomerName = e.target.name.value;
        const email = e.target.email.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const order = {product, cutomerName, email, price, quantity}
        fetch('https://peaceful-stream-38691.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Order Placed. Please Clear Your Payment At My Orders Section to confirm');
            e.target.reset();
         })
    }
    
   
    return (
        <div className='p-10'>
            <div className='py-5'>
                <h1 className='text-center lg:text-5xl'> Hello Dear, <span className='text-primary'>{user?.displayName}</span>({user?.email})</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div class="card mx-auto border border-lime-300 lg:w-96 bg-base-100 mb-3 shadow-xl">
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
                    <div class="card lg:w-96 border border-lime-300 bg-base-100 shadow-xl">
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
                        <div class="card lg:w-96 bg-base-100 mt-4 border border-lime-300 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">Order Form</h2>
                                <form className='d-flex flex-column' onSubmit={handleOrder} >
                                    <p>Product</p>
                                    <input type="text" name="Product" placeholder='Product Name' value={name} disabled id="" className='p-2 border border-lime-400  ' required />
                                    <p>Your Name</p>
                                    <input type="text" name="name" placeholder='Your Name' value={user?.displayName} disabled id="" className='p-2  border border-lime-400  ' required />
                                    <p>Your Email</p>
                                    <input type="email" name="email" value={user?.email} className='p-2  rounded- border border-lime-400  ' id="" disabled />
                                    <p>Price</p>
                                    <input type="text" name="price" placeholder='Product price' value={wholePrice}  id="" className='p-2  border border-lime-400  ' required />
                                    <p>Quantity</p>
                                    {
                                         (orderQuantity > minQuantity && orderQuantity<availQuantity) ? 
                                         <input type="number" name="quantity" value={orderQuantity}  className='p-2  rounded-pill border border-lime-400 ' id="" required />
                                         :
                                         <input type="number" name="quantity"  value={minQuantity} className='p-2  rounded-pill border border-lime-400  ' id="" required />

                                    }
                                    <input type="submit" value="PlACE YOUR ORDER" className='btn btn-primary mt-2 ' />
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