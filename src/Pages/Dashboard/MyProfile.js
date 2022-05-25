import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState();
    console.log(user);
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


        const handleOtherInfo =e=>{
            e.preventDefault();
            const currentUser ={userName: (e.target?.name?.value === "")? userInfo?.userName : e.target?.name?.value, 
                                userEmail:userInfo?.userEmail,
                                userEdu: (e.target?.education?.value === "" )? userInfo?.userEdu: e.target?.education?.value ,
                                userLocation: (e.target?.location?.value=== "")? userInfo?.userLocation: e.target?.location?.value,
                                userNumber: (e.target?.number?.value==="")? userInfo?.userNumber:e.target?.number?.value,
            }
           
            fetch(`https://peaceful-stream-38691.herokuapp.com/users/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('', data);
                alert('profile updated')
                e.target.reset()
                window.location.reload()
            })
        }
    return (
        <div>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div class="card border border-lime-300 mx-auto mt-3 lg:w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={user?.photoURL} alt="Profile" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{userInfo?.userName}</h2>
                        <h2 className='card-title'>Email:{userInfo?.userEmail}</h2>
                        <h2 class="card-title"> Education:{userInfo?.userEdu}</h2>
                        <h2 class="card-title">Address:{userInfo?.userLocation}</h2>
                        <h2 class="card-title">Phone No:{userInfo?.userNumber}</h2>
                        <div class="card-actions">

                        </div>
                    </div>
                </div>

                <div>
                    <div class="card border border-lime-300 mx-auto mt-3 lg:w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Complete or Update your profile</h2>
                            <form onSubmit={handleOtherInfo}>
                            <p>Your name</p>
                            <input type="text" name="name"    id="" className='p-2 border border-lime-400  '  />
                            <p>Education</p>
                            <input type="text" name="education"    id="" className='p-2 border border-lime-400  '  />
                            <p>Location</p>
                            <input type="text" name="location"    id="" className='p-2 border border-lime-400  '  />
                            <p>Phone Number</p>
                            <input type="text" name="number"    id="" className='p-2 border border-lime-400  '  />
                            
                            <input type='submit' class="btn btn-primary w-40 mt-4" value='Update'/>
                            
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;