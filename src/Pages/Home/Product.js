import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, img ,description,minQuantity, availQuantity,name, price} =product;
    const navigate = useNavigate()
  const managePurchase = id =>{
    navigate (`purchase/${id}`)
  }
    return (
        <div class="card lg:w-lg  bg-base-100 shadow-xl image-full">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-white">{name}</h2>
    <p>{description}</p>
    <h2 className='card-title text-white'>Price Per Unit:${price}</h2>
    <p className='text-white'>Minium Order:{minQuantity} Pcs</p>
    <p>Available Product Amount:{availQuantity} Pcs</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary text-white" onClick={()=>managePurchase(_id)}>Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;