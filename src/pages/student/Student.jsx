import React, { useEffect, useState } from "react";
import StudentSlideBar from "./StudentSlideBar";
import { FaUser } from "react-icons/fa";
import profile from "../../assets/Samplepro.png";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/store";
import { User } from "../../api/getUserData";
import Menu from "../../components/Menu";
import Abstract from "../../assets/AbstractBackground.jpeg"

function Student() {
  const navigator = useNavigate();
  const [user, setUser] = useState();

  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    const getData = async () => {
      const data = await User(token);
      setUser(data);
    };
    getData();
  }, []);

  return (
    <div className="h-screen"
    style={{ backgroundImage: `url(${Abstract})` }} >
      <StudentSlideBar />
      <Menu></Menu>
      <div className="pt-24 sm:pr-20 pl-44 sm:pl-80 ">
        <p className="text-white py-1 pl-4 rounded text-2xl  bg-blue-900 flex justify-normal">
          <FaUser className="h-8 w-8" />

          <span className="pl-11">students information</span>
        </p>
      </div>

      <div className="flex justify-normal sm:pr-20 pl-96 pt-5 "></div>
      <div className="flex-col sm:flex-row flex justify-normal pt-8 sm:pr20 pl-44 sm:pl-80">
        <div className="flex justify-normal ">
          <img className="  rounded-2xl w-48 h-52 " src={user ? user.imagePath : profile} />
          <div className="pl-4 sm:pl-8 pr-28 ">
            <h2 className="pl-20 pr-32 text-2xl text-blue-950 font-semibold">
              Student{" "}
            </h2>
            <p className="text-blue-950 sm:text-xl sm:font-light ">
              First Name:{" "}
              {user && <span className="font-bold ml-1">{user.fname}</span>}
            </p>
            <p className="text-blue-950 sm:text-xl sm:font-light ">
              Middle Name:{" "}
              {user && <span className="font-bold ml-1">{user.mname}</span>}
            </p>
            <p className="text-blue-950 sm:text-xl sm:font-light">
              last Name:{" "}
              {user && <span className="font-bold ml-1">{user.lname}</span>}
            </p>
            <p className="text-blue-950 sm:text-xl sm:font-light ">
              email:
              {user && <span className="font-bold ml-1">{user.email}</span>}
            </p>
            <p className="text-blue-950 sm:text-xl  sm:font-light ">
              Date of berth:
              {user && <span className="font-bold ml-1">{user.birthDate}</span>}
            </p>
          </div>
        </div>
        <div className="pl-4 sm:pl-0">
          <h2 onClick={()=>navigator('contact')} className=" text-2xl text-blue-950 font-semibold">contact</h2>
          <p className="text-blue-950 text-xl font-light ">
            phone:{" "}
            {user && <span className="font-bold ml-1">{user.phoneNumber}</span>}
          </p>
          <p className="text-blue-950 text-xl font-light ">
            Gender:{" "}
            {user && <span className="font-bold ml-1">{user.gender}</span>}
          </p>
          <p className="text-blue-950 text-xl font-light ">
            Address:{" "}
            {user && <span className="font-bold ml-1">{user.address}</span>}
          </p>
        </div>
      </div>
      <div className="flex justify-end pb-0 sm:pt-32 pr-20">
        <button
          className="bg-blue-950 px-5 text-white rounded"
          onClick={() => {
            navigator("edit/");
          }}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default Student;
