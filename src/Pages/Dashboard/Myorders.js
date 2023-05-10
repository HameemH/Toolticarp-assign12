import React, { useState } from 'react';
import Loading from './../Shared/Loading';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import OrderDeleteModal from './OrderDeleteModal';
import { useNavigate, Link } from 'react-router-dom';

const Myorders = () => {
  const [user] = useAuthState(auth)
  const [deleteOrder, setDeleteOrder] = useState(null)
  const email = user.email
  const { data: Orders, isLoading, refetch } = useQuery(['orders'], () => fetch(`https://toolticarp-server.onrender.com/orders/${email}`)
    .then(res => res.json()))
  if (isLoading) {
    return <Loading></Loading>
  }
 
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">

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
              Orders?.map((order, index) => <tr key={order._id}>
                <th className='text-primary'>{index + 1}</th>
                <td>{order?.product}</td>
                <td>{order?.quantity}</td>
                <td>{order?.price}</td>
                <td>{
                    (order.paymentStatus === 'paid')? <p className='text-primary font-bold'>Paid</p>:                 
                  <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary btn-xs' >PAY</button></Link>
                  }</td>
                <td>{
                    (order.paymentStatus === 'paid')? null:                 
                    <label for='delete-confirm-modal' onClick={() => setDeleteOrder(order)} className='btn bg-red-700 btn-xs'>Cancel</label>
                    }</td>
                <td></td>
              </tr>
              )
            }





          </tbody>
        </table>
        {deleteOrder &&
          <OrderDeleteModal
            deleteOrder={deleteOrder}
            setDeleteOrder={setDeleteOrder}
            refetch={refetch}
          ></OrderDeleteModal>
        }
      </div>
    </div>
  );
};

export default Myorders;