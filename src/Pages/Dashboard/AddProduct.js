import React from 'react';

const AddProduct = () => {
    const handleItem = e =>{
        e.preventDefault();
        const product = {
            name: e.target.name.value,
            price:e.target.price.value,
            img: e.target.image.value,
            availQuantity: e.target.availquantity.value,
            minQuantity:e.target.minQuantity.value,
            description: e.target.description.value
        }
        fetch('https://peaceful-stream-38691.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Product Added');
            e.target.reset();
         })
      
        console.log(product);
    }
    return (
        <div>
            <div className="card border border-lime-300 mx-auto mt-3 lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
          <h1 className='text-2xl text-center font-bold'>Add A Product</h1>  
          <form onSubmit={handleItem} >
                            <p>Product Name</p>
                            <input type="text" name="name" placeholder='Product Name' required    id="" className='p-2 border border-lime-400  ' />
                            <p>Product Image</p>
                            <input type="text" name="image" placeholder='Give Image link' required    id="" className='p-2 border border-lime-400  '  />
                            <p>Price Per Unit</p>
                            <input type="Number" name="price" placeholder='Product Price' required id="" className='p-2 border border-lime-400  '  />
                            <p>Available Quanity</p>
                            <input type="Number" name="availquantity" placeholder='Availabel Quantity' required id="" className='p-2 border border-lime-400  '  />
                            <p>Minimum Quantity</p>
                            <input type="Number" name="minQuantity" placeholder='Ratings' required id="" className='p-2 border border-lime-400  '  />
                           <p>Description</p>
                           <textarea name="description" className='p-2 border border-lime-400 ' required  id="" cols="22" rows="5"></textarea>
                            
                            <input type='submit' className="btn btn-primary w-40 mt-4" value='Add Product'/>
                            
                            </form>
                            </div>
                            </div>
        </div>
    );
};

export default AddProduct;