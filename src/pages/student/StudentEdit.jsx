import React, { useEffect } from "react";
import StudentSlideBar from "./StudentSlideBar";
import { FaPenSquare } from "react-icons/fa";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/Samplepro.png";
import axios from "axios";
import useAuthStore from "../../store/store";
import Menu from "../../components/Menu";
import Abstract from "../../assets/AbstractBackground.jpeg"; 
import { UpdateUser, User } from "../../api/getUserData";
import useUserStore from "../../store/storeUser";

function StudentEdit() {
  const navigator = useNavigate();
  const [ user , setUser ] = useState();

  const token = useAuthStore((state) => state.token);
  const userData = useUserStore((state) => state.user);
  
  const studentData = JSON.parse(userData);

  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setphone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [imagePath , setImage] = useState("");
  const [address, setaddress] = useState("");
  const [error, seterror] = useState(false);
  const regexp = /^\d{10}$/;

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
        setaddress(user.address),
        setImage(user.imagePath));
    };
    set();
  }, [user]);


  const cloud_name = "dkpvmwtr4";
  const upload_preset = "profilePicture";

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);
    axios
      .post(
        `http://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        console.log(res);
        if (res.data) {
          setImage(res.data.secure_url);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmitted = async (e) => {
    e.preventDefault();
    if (firstName.length == 0 || lastName.length == 0) {
      seterror(true);
      return;
    }
    if (middleName.length == 0 || address.length == 0) {
      seterror(true);
      return;
    }
    if (!regexp.test(phone)) {
      seterror(true);
      return;
    }

    const studentUpdatedData = {
      fname: firstName,
      lname: lastName,
      mname: middleName,
      birthDate: birthDate,
      address: address,
      phoneNumber: phone,
      imagePath:imagePath
    };


    UpdateUser(studentUpdatedData, studentData.student.id, token, "student")
    .then((res) => {
      if (res.status === 200) {
        alert("successfully Updated");
        navigator("/student");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="h-screen"
    style={{ backgroundImage: `url(${Abstract})` }} >
      <Menu></Menu>
      <StudentSlideBar />
      <div className="pt-24 sm:pr-20 pl-44 sm:pl-80 ">
        <p className="text-white py-1 pl-4 rounded text-2xl  bg-blue-900 flex justify-normal">
          <FaPenSquare className="h-8 w-8" />

          <span className="pl-4">Edit student information</span>
        </p>
      </div>
      <div className="flex-col sm:flex-row flex justify-normal pt-8 sm:pr20  pl-80">
        <form className="" onSubmit={handleSubmitted}>
          <div className=" sm:flex justify-normal ">
            <div className="">
              <br />
              <input
                type="file"
                onChange={handleUpload}
                id="file"
                accept="image/*"
                className="hidden"
              />
              <label htmlFor="file">
                <img
                  className="  rounded-2xl  w-48 h-52"
                  src={imagePath ? imagePath : profile}
                />
                <p className="sm:text-xl font-semibold">Upload your photo</p>
              </label>
              <br />
            </div>
            <div className="sm:pl-4 sm:pr-20 ">
              <h2 className="pl-24 pr-32 py-4 text-xl sm:text-2xl text-blue-950 font-semibold sm:font-bold">
                Student
              </h2>
              <label className="text-blue-950 sm:text-xl font-semibold ">
                First Name:
              </label>
              <br />
              <input
                type="text"
                className="bg-gray-300"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
              {error && firstName.length <= 0 ? (
                <p className="text-red-500">first name is can't empty</p>
              ) : (
                ""
              )}
              <br />
              <label className="text-blue-950 sm:text-xl font-semibold ">
                Middle Name:
              </label>
              <br />
              <input
                type="text"
                className="bg-gray-300"
                value={middleName}
                onChange={(e) => setmiddleName(e.target.value)}
              />
              {error && middleName.length <= 0 ? (
                <p className="text-red-500">middle name is can't empty</p>
              ) : (
                ""
              )}
              <br />
              <label className="text-blue-950 sm:text-xl font-semibold">
                last Name:
              </label>
              <br />
              <input
                type="text"
                className="bg-gray-300"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
              {error && lastName.length <= 0 ? (
                <p className="text-red-500">last name is can't empty</p>
              ) : (
                ""
              )}
              <br />
              <label className="text-blue-950 sm:text-xl font-semibold ">
                Date of birth:
              </label>
              <br />
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e)}
                className="bg-gray-300"
              />
            </div>
            <div className="sm:pl-4">
              <h2 className=" text-xl sm:text-2xl text-blue-950 font-semibold sm:font-bold pt-4 pb-4">
                contact
              </h2>
              <p className="text-blue-950 sm:text-xl font-semibold ">phone:</p>
              <br />
              <input
                type="numeric"
                className="bg-gray-300"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
              {error && !regexp.test(phone) ? (
                <p className="text-red-500">Invalid phone number</p>
              ) : (
                ""
              )}
              <br />
              <p className="text-blue-950 sm:text-xl font-semibold">Address:</p>
              <br />
              <input
                type="text"
                className="bg-gray-300"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
              {error && address.length <= 0 ? (
                <p className=" text-red-500">address can't empty</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex justify-end pt-14  pl-64">
            <button
              type="submit"
              className="bg-blue-950 px-5 text-white rounded font-semibold">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentEdit;
