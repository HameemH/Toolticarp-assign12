import React, { useEffect, useState } from 'react';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddReview = () => {
    const [userInfo, setUserInfo] = useState();
    const [user] = useAuthState(auth);

    const email = user?.email
    useEffect(
        () => {
            fetch(`https://peaceful-stream-38691.herokuapp.com/users/${email}`)
                .then(res => res.json())
                .then(data => {

                    setUserInfo(data)
                })
        }
        , [user])

const handleReview = e =>{
   e.preventDefault();
   const review= {name: userInfo?.userName, email: user?.email , review: e.target.review.value, ratings: e.target.ratings.value};
   console.log(review);
   fetch('https://peaceful-stream-38691.herokuapp.com/reviews', {
    method:'POST',
    headers: {
        'content-type': 'application/json'
    },
    body:JSON.stringify(review)
})
.then(res=>res.json())
.then(data => {
    console.log('', data);
    alert('Review added')
    e.target.reset()
})
}
    return (
        <div>
              <div className="card border border-lime-300 mx-auto mt-3 lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Complete or Update your profile</h2>
                            <form onSubmit={handleReview}>
                            <p>Your Name</p>
                            <input type="text" name="name" value={userInfo?.userName}    id="" className='p-2 border border-lime-400  ' />
                            <p>Your Email</p>
                            <input type="text" name="location" value={user?.email}   id="" className='p-2 border border-lime-400  '  />
                            <p>Ratings Out Of Five</p>
                            <input type="text" name="ratings" placeholder='Ratings' required id="" className='p-2 border border-lime-400  '  />
                           <p>Your Review</p>
                           <textarea name="review" className='p-2 border border-lime-400 ' required  id="" cols="22" rows="5"></textarea>
                            
                            <input type='submit' className="btn btn-primary w-40 mt-4" value='Post Review'/>
                            
                            </form>
                            
                        </div>
                    </div>
        </div>
    );
};

export default AddReview;