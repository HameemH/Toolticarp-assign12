import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading';

const MakeAdmin = () => {
    const { data: Users, isLoading } = useQuery(['users'], () => fetch('https://peaceful-stream-38691.herokuapp.com/users')
    .then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    const handlemakeAdmin = (email,user) =>{
        console.log(user);
        const admin = {
            userEmail: user.userEmail,
            userName: user.userName,
           
            userEdu: user.userEdu,
            userLocation: user.userLocation,
            userNumber: user.userNumber,
            userRole: 'admin'
        }
        fetch(`http://localhost:5000/users/${email}`, {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(admin)
        })
        .then(res=>res.json())
        .then(data => {
            console.log( data);
            alert(`${user.userEmail} has been made and admin`)
        })
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
                Users?.map((user,index)=>   <tr key={user._id}>
                <th className='text-primary'>{index+1}</th>
                <td>{user?.userName}</td>
                <td>{user?.userEmail}</td>
                <td>{
                    (user.userRole === 'admin')?<p className='text-primary font-bold'> Admin</p> :<button className='btn btn-primary btn-xs' onClick={()=>handlemakeAdmin(user.userEmail , user)}>Make Admin</button>
                    }</td>
               
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