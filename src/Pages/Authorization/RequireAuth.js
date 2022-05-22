import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useLocation, Navigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from './../../firebase.init';


const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    } else{
        return <Navigate to="/login" state={{from: location}} replace />
    }
};

export default RequireAuth;