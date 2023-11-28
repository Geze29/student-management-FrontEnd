import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function UpdatePassword() {

    const navigator = useNavigate(); 
    const location = useLocation();
    const email = location.state;

    const [password , setPassword] = useState();
    const [confirmPassword , setConfirmPassword] = useState();
    const [error , setError ] = useState();

    const handleUpdatePassword = async (e) =>{
        e.preventDefault();

        if (password != confirmPassword) {
            setError("Password does not match");
        }else{
            try {
                setError();
                const response = await axios.post("http://localhost:8000/api/updatePassword/",{
                    email:email,
                    password:password
                });
                console.log(response);
                navigator('../../login');
            } catch (error) {
                // error && setError(error.response.data.message.email);
                console.log(error.response);
            }
        }

    }
  return (
    <div>
        UpdatePassword

        <form onSubmit={handleUpdatePassword} method="post">
            Password : <input type="password" name='password' onChange={(e)=>{setPassword(e.target.value)}} required/> <br />
            Confirm Password : <input type="password" name='ConfirmPassword' onChange={(e)=>{setConfirmPassword(e.target.value)}} required/> <br />
            <input type="submit" value="Update Password" />

            {error && error}
        </form>
    </div>
  )
}
