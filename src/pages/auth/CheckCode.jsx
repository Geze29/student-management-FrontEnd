
import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function CheckCode() {
    const [code , setCode] = useState();
    const [error , setError] = useState();
    const location = useLocation();
    const email = location.state;

    const navigator = useNavigate();

    const handleCheckCode = async (e) =>{
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/checkCode',{
                email:email,
                reset_code:code
            });
            setError();

            navigator('../forgetPassword/updatePassword',{state : email});
        } catch (error) {
            setError(error.response.data.message);
        }
    }
  return (
    <div>
        <form onSubmit={handleCheckCode} method="post">
            Code : <input type="number" onChange={(e)=>{setCode(e.target.value)}}/> <input type="submit" value="Send" />
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}
