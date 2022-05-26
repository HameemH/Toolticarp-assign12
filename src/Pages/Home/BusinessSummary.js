import React from 'react';

const BusinessSummary = () => {
    return (
   <div className='grid lg:grid-cols-3 grid-cols-1 py-7'>
      <div className="card lg:w-96 mx-auto bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.ibb.co/bL1PtyP/tools-For-Business.jpg?w=400&h=225" alt="Shoes" /></figure>
  <div className="card-body flex justify-center items-center">
    <h2 className="card-title text-7xl text-primary">100+ </h2>
    <p className='text-4xl'>PRODUCT RANGE</p>
    
  </div>
</div><div className="card lg:w-96 mx-auto bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.ibb.co/NNMjTzz/cytonn-photography-v-Wch-Rczc-Qw-M-unsplash.jpg?w=400&h=225" alt="Shoes" /></figure>
  <div className="card-body flex justify-center items-center">
    <h2 className="card-title text-7xl text-primary">9000+</h2>
    <p className='text-4xl'>Satisfied Customers</p>
   
  </div>
</div><div className="card lg:w-96 mx-auto bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.ibb.co/WV89jyy/happy-excited-young-business-colleagues-make-winner-gesture.jpg?w=400&h=225" alt="Shoes" /></figure>
  <div className="card-body flex justify-center items-center">
    <h2 className="card-title text-7xl text-primary">400+</h2>
    <p className='text-4xl'>Happy Employees</p>
   
  </div>
</div>    
   </div>
    );
};

export default BusinessSummary;