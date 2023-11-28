import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
  const navigator = useNavigate();
  const [email , setEmail]=useState();
  const handleForgetPassword =async (e) =>{
    e.preventDefault();
    try {
      console.log(email);
      const response = await axios.post('http://localhost:8000/api/sendResetCode',{
        email:email
      });
      
      console.log(response);

      if (response.status == 200) {
        navigator('checkCode',{state: email});
      }
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status == 401) {
        console.log(error.response.status);
      }
    }
  }
  return (
    <div>forgetPassword
      <form onSubmit={handleForgetPassword} method="post">
        Email <input type="email" name="email"  onChange={(e)=>{setEmail(e.target.value)}}/> <input type="submit" value="Send" />
      </form>
    </div>
  )
}
