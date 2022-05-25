import React from 'react';
import Loading from './../Shared/Loading';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Myorders = () => {
    const [user]= useAuthState(auth)
    const { data: Orders, isLoading } = useQuery(['orders'], () => fetch(`https://peaceful-stream-38691.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json()))
        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div>
              <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Pay status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
                Orders?.map((order,index)=>   <tr>
                <th className='text-primary'>{index+1}</th>
                <td>{order?.product}</td>
                <td>{order?.quantity}</td>
                <td>{order?.price}</td>
                <td><button className='btn btn-primary btn-xs'>PAY</button></td>
                <td><label className='btn bg-red-700 btn-xs'>Cancel</label></td>
              </tr>
                )
            }
     
      
    
    
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myorders;