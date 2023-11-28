import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo-300x180.png";
import useUserStore from "../store/storeUser";

function Menu() {
  const [isScrolled, setScrolled] = useState(false);
  const [isLogged, setIslogged] = useState(false);

  const [name, setName] = useState();
  const [imagePath, setImagePath] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const user = useUserStore((state) => state.user);
  useEffect(() => {
    if (user) {
      setIslogged(true);
      const UserData = JSON.parse(user);
      setImagePath(UserData.imagePath);
      setName(UserData.fname + " " + UserData.mname.slice(0, 1) + "...");
    }
  }, [isLogged]);

  return (
    <div
      className={`${
        isScrolled ? "bg-slate-900" : "bg-slate-500 bg-opacity-20"
      } ${
        isScrolled ? "text-white" : "text-white"
      } tracking-wider sm:text-2xl fixed z-10 top-0 left-0 right-0 flex justify-between items-center p-3 px-11`}>
      <div>
        <img
          className="h-12 bg-slate-300 bg-opacity-5 rounded-lg "
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex sm:flex">
        <div className="h-fit border-blue-500">
          <Link
            className="text-2xl mx-4 font-serif border-b-2 hover:text-blue-900"
            to="/">
            Home
          </Link>
          <Link
            className="text-2xl mx-4 font-serif border-b-2  hover:text-blue-900"
            to="/course">
            Courses
          </Link>
          <Link
            className="text-2xl mx-4 font-serif border-b-2  hover:text-blue-900"
            to="/contact">
            Contact
          </Link>
          <Link
            className="text-2xl mx-4 font-serif border-b-2  hover:text-blue-900"
            to="/About">
            About
          </Link>
          <Link
            className="text-2xl mx-4 font-serif border-b-2  hover:text-blue-900"
            to={"/account"}>
            Account
          </Link>
        </div>

        <div className={`${isLogged ? "hidden" : ""}`}>
          <div className=" ml-12 bg-blue-900 text-white items-center rounded-md h-fit flex justify-between  px-3">
            <Link
              className="bg-white text-xl font-serif text-blue-950 px-5 rounded-md  hover:text-blue-500"
              to="/Login">
              Login
            </Link>
            <Link
              className="text-xl pl-4 pr-6 py-1 font-serif  hover:text-blue-300"
              to="/Signup">
              Sign up
            </Link>
          </div>
        </div>

        <div className={`${isLogged ? "" : "hidden"}`}>
          <div className=" w-fit ml-6 bg-blue-900 text-white items-center rounded-md h-fit flex">
            <div className="w-11 rounded-full h-11">
              <img
                className="w-11 h-11 rounded-full"
                src={`${imagePath && imagePath}`}
                alt=""
              />
            </div>
            <div className="px-2 text-xl font-light justifiy-start">
              {name && name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
