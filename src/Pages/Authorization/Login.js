import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from './../Shared/Loading';


const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        signInUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

   const [user ] =useAuthState(auth)

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if(user){
        const currentUser ={userName: user?.displayName, userEmail:user?.email}
        const email = user?.email;
        fetch(`https://peaceful-stream-38691.herokuapp.com/users/${email}`, {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data => {
            console.log( data);
        })
    }
  
    if (signInUser || googleUser) {
            navigate(from, { replace: true });
     }

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    if(error || googleError){
        signInError= <p className='text-red-500'><small>{error?.message || googleError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 border border-lime-300 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered border-lime-400 w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered border-lime-400 w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    {signInError}
                    <input className='btn btn-outline border-lime-400 hover:bg-lime-500 w-full max-w-xs' type="submit" value="Login" />
                </form>
                <p><small>New Here? <Link className='text-primary link-hover' to="/register">Create New Account</Link></small></p>
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline border-lime-400 hover:bg-lime-500"
                >Continue with Google</button>
            </div>
        </div>
        </div >
    );
};

export default Login;