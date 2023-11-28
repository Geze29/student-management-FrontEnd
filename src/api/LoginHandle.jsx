import axios from "axios";

export const LoginHandle = async ({e, email,password}) =>{
    e.preventDefault();

    try {     
      const response = await axios.post('http://localhost:8000/api/login',{
        email:email,
        password:password
      });
      console.log(response);
    } catch (error) {
      // setError(error);
      console.log(error.response);
    }
  }