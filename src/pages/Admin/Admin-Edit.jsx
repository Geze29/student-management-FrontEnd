import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import profile from "../../assets/Samplepro.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../../store/store";
import AdminSlideBar from "../../components/AdminSlideBar";
import Abstract from "../../assets/AbstractBackground.jpeg"

function AdminEdit() {
  const location = useLocation();
  const admin = location.state;

  const [fname, setfirstName] = useState(admin.fname);
  const [mname, setmiddleName] = useState(admin.mname);
  const [lname, setlastName] = useState(admin.lname);
  const [phoneNumber, setphone] = useState(admin.phoneNumber);
  const [address, setaddress] = useState(admin.address);
  const [birthDate, setBirthDate] = useState(admin.birthDate);
  const [imagePath, setImage] = useState(admin.imagePath);
  const [error, seterror] = useState(false);
  const regexp = /^\d{10}$/;
  const navigator = useNavigate();

  const token = useAuthStore((state) => state.token);

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
    if (fname.length == 0 || fname.length == 0 || mname.length === 0) {
      seterror(true);
      return;
    }
    if (lname.length == 0 || address.length == 0) {
      seterror(true);
      return;
    }
    if (!regexp.test(phoneNumber)) {
      seterror(true);
      return;
    }

    const AdminUpdatedData = {
      fname,
      lname,
      mname,
      phoneNumber,
      address,
      imagePath,
    };
    try {
      const response = await axios.put(
        `http://localhost:8000/api/admin/${admin.admin.id}`,
        AdminUpdatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status === 202) {
        alert("successfully Updated");
        navigator("/admin");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div style={{ backgroundImage: `url(${Abstract})` }}>
      <AdminSlideBar />

      <div className="pt-24 sm:pr-20 pl-44 sm:pl-80 ">
        <p className="text-white py-1 pl-4 rounded text-2xl  bg-blue-900 flex justify-normal">
          <FaUser className="h-8 w-8" />

          <span className="pl-4">Edit information</span>
        </p>
      </div>

      <div className="flex-col sm:flex-row flex justify-normal pt-8 sm:pr20  pl-80">
        <form className="">
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
          </label>
          <br />
          <button className="sm:text-xl font-semibold">
            Upload your photo
          </button>
        </form>
        <form className="" onSubmit={handleSubmitted}>
          <div className=" sm:flex justify-normal ">
            <div className="sm:pl-4 sm:pr-20 ">
              <label className="text-blue-950 sm:text-xl font-semibold ">
                First Name:
              </label>
              <br />
              <input
                type="text"
                value={fname}
                className="bg-gray-300"
                onChange={(e) => setfirstName(e.target.value)}
              />
              {error && fname.length <= 0 ? (
                <p className="text-red-500">first name is required</p>
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
                value={mname}
                className="bg-gray-300"
                onChange={(e) => setmiddleName(e.target.value)}
              />
              {error && mname.length <= 0 ? (
                <p className="text-red-500">middle name is required</p>
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
                value={lname}
                className="bg-gray-300"
                onChange={(e) => setlastName(e.target.value)}
              />
              {error && lname.length <= 0 ? (
                <p className="text-red-500">last name is required</p>
              ) : (
                ""
              )}
              <br />
              <label className="text-blue-950 sm:text-xl font-semibold ">
                Date of berth:
              </label>
              <br />
              <input
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                }}
                className="bg-gray-300"
              />
            </div>
            <div className="sm:pl-4">
              <p className="text-blue-950 sm:text-xl font-semibold ">phone:</p>
              <br />
              <input
                type="numeric"
                value={phoneNumber}
                className="bg-gray-300"
                onChange={(e) => setphone(e.target.value)}
              />
              {error && !regexp.test(phoneNumber) ? (
                <p className="text-red-500">Invalid phone number</p>
              ) : (
                ""
              )}
              <br />
              <p className="text-blue-950 sm:text-xl font-semibold">Address:</p>
              <br />
              <input
                type="text"
                value={address}
                className="bg-gray-300"
                onChange={(e) => setaddress(e.target.value)}
              />
              {error && address.length <= 0 ? (
                <p className=" text-red-500">address is required</p>
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

export default AdminEdit;
