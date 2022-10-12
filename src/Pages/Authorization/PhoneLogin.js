import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import auth from './../../firebase.init';


const PhoneLogin = () => {
    const [value, setValue] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
    const [flag, setFlag] = useState(false);
    const [result, setResult] = useState("");

    function setUpRecaptha(number) {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              
            }
          }, auth);
        return signInWithPhoneNumber(auth, number, RecaptchaVerifier);

      }
      const getOtp = async (e) => {
        e.preventDefault();
        console.log(number);
        setError("");
        if (number === "" || number === undefined)
          return setError("Please enter a valid phone number!");
        try {
          const response = await setUpRecaptha(number);
          setResult(response);
          setFlag(true);
        } catch (err) {
          setError(err.message);
        }
      };

      const verifyOtp = async (e) => {
        e.preventDefault();
        setError("");
        if (otp === "" || otp === null) return;
        try {
          await result.confirm(otp);
          const verifyOtp = async (e) => {
            e.preventDefault();
            setError("");
            if (otp === "" || otp === null) return;
            try {
              await result.confirm(otp);
            
            } catch (err) {
              setError(err.message);
            }
          };
        } catch (err) {
          setError(err.message);
        }
      };
  return (
    
   <div className='min-h-screen'>
   <form onSubmit={getOtp}>

<PhoneInput
      className='input input-bordered mx-auto mt-10 border-lime-400 w-full max-w-xs'
      placeholder="Enter phone number"
      value={number}
      onChange={setNumber}/>
         <input className='btn btn-outline border-lime-400 hover:bg-lime-500 w-full max-w-xs' type="submit" value="REGISTER" />
   </form>


      <form onSubmit={verifyOtp} >
        
      <input
      className='input input-bordered mx-auto mt-10 border-lime-400 w-full max-w-xs'
      placeholder="Enter otp number"
      value={otp}
      onChange={setOtp}/>
    <input className='btn btn-outline border-lime-400 hover:bg-lime-500 w-full max-w-xs' type="submit" value="REGISTER" />

        </form>   

   </div>
  )
}
export default PhoneLogin;