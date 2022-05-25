import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Product = ({product}) => {
    const {_id, img ,description,minQuantity, availQuantity,name, price} =product;
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
  const managePurchase = id =>{
    navigate (`purchase/${id}`);
    if(user){
      const currentUser ={userName: user?.displayName, userEmail:user?.email}
      const email = user?.email;
      fetch(`https://peaceful-stream-38691.herokuapp.com/users/${email}`, {
          method:'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body:JSON.stringify(currentUser)
      })
      .then(res=>res.json())
      .then(data => {
          console.log( data);
          // window.location.reload()
      })}

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