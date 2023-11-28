import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/store";
import logo from "../../assets/Logo-300x180.png";
import useUserStore from "../../store/storeUser";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigator = useNavigate();

  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useUserStore((state)=>state.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      });
      if (response.status == 200) {
        setUser(JSON.stringify(response.data.user));
        setToken(response.data.token);
        navigator("/account");
      }
    } catch (error) {
      if (error.response.status == 401) {
        setError("Invalid email or password");
        console.log(error.response.status);
      }
    }
  };
  return (
    <div className="bg-gray-300 flex justify-normal flex-col sm:flex-row pb-0">
      <div className="h-screen bg-blue-950  text-white pt-20">
        <Link to={'/'}>
          <img className="h-11 pl-20" src={logo} alt="" />
        </Link>
        <div className=" pt-11 ">
          <h1 className="p-8 pl-20 text-2xl sm:text-6xl font-bold">
            WELCOME <br />
            Back
          </h1>
          <p className="pl-20">
            IF tou don’t have an <br />
            account we recommended <br />
            you to register for free.
          </p>
        </div>
        <div className=" items-center pl-20 pt-11 pb-24">
          <button
            onClick={() => {
              navigator("/SignUp");
            }}
            className="border-spacing-3 border border-white text-white py-1 px-4 rounded-xl text-xl font-medium border-2">
            Sign Up
          </button>
        </div>
      </div>
      <div className="bg-gray-300 pt-11 sm:pl-40  w-2/3">
        <h1 className="flex justify-center text-2xl sm:text-5xl font-bold text-black sm:py-14 pr-40">
          Sign IN
        </h1>
        {error && <p>{error}</p>}
        <form className="" onSubmit={handleSubmit} method="post">
          <div className="sm:pl-11 pb-11">
            <input
              className=" text-black px-4 py-2 h-12 w-96 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
              type="email"
              name="email"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </div>

          <div className="sm:pl-11 pb-6">
            <input
              className=" text-black px-4 py-2 h-12 w-96 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          <Link className="sm:pl-80" to="/forgetPassword">
            forgot password ?
          </Link>
          <div className="pl-40 py-11">
            <button
              type="submit"
              className="rounded-xl py-1 px-4 cursor-pointer bg-blue-950 text-stone-100 text-center  text-2xl font-normal border-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
