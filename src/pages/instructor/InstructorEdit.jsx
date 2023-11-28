import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import profile from "../../assets/Samplepro.png";
import { useNavigate } from "react-router-dom";
import Abstract from "../../assets/AbstractBackground.jpeg";
import InstructorSlideBar from "../../components/intructor/InstructorSlideBar";
import Menu from "../../components/Menu";
import useAuthStore from "../../store/store";
import { UpdateUser, User } from "../../api/getUserData";
import useUserStore from "../../store/storeUser";

function InstructorEdit() {
  const [user, setUser] = useState();
  const token = useAuthStore((state) => state.token);
  const userData = useUserStore((state) => state.user);

  const instructorData = JSON.parse(userData);

  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [error, seterror] = useState(false);
  const regexp = /^\d{10}$/;
  const navigator = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await User(token);
      setUser(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const set = async () => {
      user &&
        (setfirstName(user.fname),
        setmiddleName(user.mname),
        setlastName(user.lname),
        setBirthDate(user.birthDate),
        setphone(user.phoneNumber),
        setaddress(user.address));
    };
    set();
  }, [user]);

  const handleSubmitted = (e) => {
    e.preventDefault();

    const updatedData = {
      fname: firstName,
      lname: lastName,
      mname: middleName,
      birthDate: birthDate,
      address: address,
      phoneNumber: phone,
    };

    UpdateUser(updatedData, instructorData.instructor.id, token, "instructor")
      .then((res) => {
        if (res.status === 200) {
          alert('successfully updated')
          navigator("/instructor");
        }
      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <div>
      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <InstructorSlideBar />
        <Menu />
        <div className="pt-24 sm:pr-20 pl-44 sm:pl-80 ">
          <p className="text-slate-400 py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal">
            <FaUser className="h-8 w-8" />

            <span className="pl-4">Edit information</span>
          </p>
        </div>

        <div className="flex-col sm:flex-row flex justify-normal pt-8 sm:pt-16 sm:pr20  pl-80">
          <form onSubmit={handleSubmitted}>
            <div className=" sm:flex justify-normal ">
              <div className="">
                <img className="  rounded-2xl " src={profile} />
                <br />
                <p className="sm:text-xl font-semibold">Upload your photo</p>
                <br />
              </div>
              <div className="sm:pl-4 sm:pr-20 ">
                <label className="text-gray-700 sm:text-xl font-semibold ">
                  First Name:
                </label>
                <br />
                <input
                  type="text"
                  value={user && firstName}
                  className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  onChange={(e) => setfirstName(e.target.value)}
                />
                {error && firstName.length <= 0 ? (
                  <p className="text-red-500">first name is can't empty</p>
                ) : (
                  ""
                )}
                <br />
                <label className="text-gray-700 sm:text-xl font-semibold ">
                  Middle Name:
                </label>
                <br />
                <input
                  type="text"
                  value={user && middleName}
                  className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  onChange={(e) => setmiddleName(e.target.value)}
                />
                {error && middleName.length <= 0 ? (
                  <p className="text-red-500">middle name is can't empty</p>
                ) : (
                  ""
                )}
                <br />
                <label className="text-gray-700 sm:text-xl font-semibold">
                  last Name:
                </label>
                <br />
                <input
                  type="text"
                  value={user && lastName}
                  className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  onChange={(e) => setlastName(e.target.value)}
                />
                {error && lastName.length <= 0 ? (
                  <p className="text-red-500">last name is can't empty</p>
                ) : (
                  ""
                )}
                <br />
                <label className="text-gray-700 sm:text-xl font-semibold ">
                  Date of birth:
                </label>
                <br />
                <input
                  type="date"
                  value={user && birthDate}
                  className=" px-10 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="sm:pl-4">
                <p className="text-xl sm:text-gray-700 font-semibold ">
                  phone:
                </p>
                <br />
                <input
                  type="numeric"
                  value={user && phone}
                  className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  onChange={(e) => setphone(e.target.value)}
                />
                {error && !regexp.test(phone) ? (
                  <p className="text-red-500">Invalid phone number</p>
                ) : (
                  ""
                )}
                <br />
                <p className="text-gray-700 sm:text-xl font-semibold">
                  Address:
                </p>
                <br />
                <input
                  type="text"
                  value={user && address}
                  className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  onChange={(e) => setaddress(e.target.value)}
                />
                {error && address.length <= 0 ? (
                  <p className=" text-red-500">address can't empty</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex justify-end py-14  pl-64">
              <button
                type="submit"
                className="bg-blue-950 px-5 text-white rounded font-semibold">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InstructorEdit;
