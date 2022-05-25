import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
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
      <li><Link to='/dashboard/review'>Add Review</Link></li>
      <li><Link to='/dashboard/myorders'>My Order</Link></li>
      <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
      <li><Link to='/dashboard/manageproducts'>Manage All Products</Link></li>
      <li><Link to='/dashboard/admin'>Make Admin</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;