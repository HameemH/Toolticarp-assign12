import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading';

const MakeAdmin = () => {
    const { data: Users, isLoading } = useQuery(['users'], () => fetch('http://localhost:5000/users')
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
        <th>Name</th>
        <th>Email</th>
        <th></th>
       
      </tr>
    </thead>
    <tbody>
      
      {
                Users?.map((user,index)=>   <tr>
                <th className='text-primary'>{index+1}</th>
                <td>{user?.userName}</td>
                <td>{user?.userEmail}</td>
                <td><button className='btn btn-primary btn-xs'>Make Admin</button></td>
               
              </tr>
                )
            }
     
      
    
    
      
    </tbody>
  </table>
  </div>
        </div>
    );
};

export default MakeAdmin;