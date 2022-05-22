import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';

const Purchase = () => {
    const {id} = useParams();
    const [product, setproduct] = useState({});
    useEffect(
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => {setproduct(data)
        console.log(data);})
        ,[])
    return (
        <div>
           <h1></h1> 
        </div>
    );
};

export default Purchase;