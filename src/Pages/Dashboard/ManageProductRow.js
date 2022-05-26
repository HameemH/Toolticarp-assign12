import React from 'react';

const ManageProductRow = ({product}) => {
    const {_id, img ,minQuantity, availQuantity,name, price} =product;
    const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure you want to delete?');
      if(proceed){
        fetch(`https://peaceful-stream-38691.herokuapp.com/products/${id}`, {
          method: 'DELETE',
         
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.deletedCount) {
                  alert(` ${name} is deleted.`)
                 
              }
          })
      }
    }
    return (
        <div class="card lg:w-72 mx-auto  bg-base-100 shadow-xl image-full">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title text-white">{name}</h2>
          
          <h2 className='card-title text-white'>Price Per Unit:${price}</h2>
          <p className='text-white'>Minium Order:{minQuantity} Pcs</p>
          <p>Available Product Amount:{availQuantity} Pcs</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary text-white" onClick={()=>handleDelete(_id)}>Delete</button>
          </div>
        </div>
      </div>
    );
};

export default ManageProductRow;