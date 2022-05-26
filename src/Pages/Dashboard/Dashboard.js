import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Dashboard = () => {
  
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState();
    const email = user.email
    useEffect(
        () => {
            fetch(`https://peaceful-stream-38691.herokuapp.com/users/${email}`)
                .then(res => res.json())
                .then(data => {

                    setUserInfo(data)
                })
        }
        , [user])
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
   
                <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side  border border-lime-300">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-slate-200 text-base-content">
     
      <li><Link to='/dashboard'>My Profile</Link></li>

     {
       (userInfo?.userRole)?  null : <li><Link to='/dashboard/review'>Add Review</Link></li>
     }
     {
       (userInfo?.userRole)?  null: <li><Link to='/dashboard/myorders'>My Order</Link></li>
     }
      
     {
       (userInfo?.userRole=== 'admin')?  <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>: null
     }
     {
       (userInfo?.userRole=== 'admin')?   <li><Link to='/dashboard/manageproducts'>Manage All Products</Link></li>: null
     }
     {
       (userInfo?.userRole=== 'admin')?  <li><Link to='/dashboard/manageorder'>Manage All Order</Link></li>: null
     }
     {
       (userInfo?.userRole=== 'admin')? <li><Link to='/dashboard/admin'>Make Admin</Link></li>: null
     }
      
     
     
      
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;