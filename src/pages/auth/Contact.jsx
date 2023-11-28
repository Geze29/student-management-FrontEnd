import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import personImage from "../../assets/yourim.png";
import axios from "axios";

function Contact() {
  const navigator = useNavigate();

  const location = useLocation();
  const data = location.state;

  const [imagePath, setImage] = useState();
  const [contactFname, setcontactFname] = useState("");
  const [contactLname, setcontactLname] = useState("");
  const [contactPhone, setcontactPhone] = useState();
  const [contactEmail, setcontactEmail] = useState();
  const [relationship, setrelationship] = useState("");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexp = /^\d{10}$/;
  const [error, seterror] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contactFname.length == 0 || contactLname.length == 0) {
      seterror(true);
      return;
    }

    if (relationship.length == 0) {
      seterror(true);
      return;
    }
    if (!regex.test(contactEmail)) {
      seterror(true);
      return;
    }
    if (!regexp.test(contactPhone)) {
      seterror(true);
      return;
    }

    const data2 = {
      contactFname,
      contactLname,
      contactPhone,
      contactEmail,
      relationship,
      imagePath,
    };

    const student = { ...data, ...data2 };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/student",
        student
      );
      alert("successfuly Registered");
      navigator("../../login");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex justify-normal">
          <div className="pt-16 bg-gray-300 w-1/2">
            <h1 className="text-6xl font-bold flex justify-end text-blue-950">
              sign
            </h1>

            <input
              type="file"
              id="file"
              onChange={handleUpload}
              accept="image/*"
              className="hidden"
              required
            />
            <label htmlFor="file">
              <div className="flex justify-center pt-14 ">
                <img
                  className="h-44 w-44 cursor-pointer hover:opacity-50 rounded-md  shadow"
                  src={imagePath ? imagePath : personImage}
                />
              </div>
            </label>
            <div>
              <p className="text-blue-950 flex justify-center  text-2xl pt-8">
                Upload your photo
              </p>
            </div>
          </div>

          <div className=" bg-blue-950 h-screen pt-16 w-1/2 px-2">
            <h1 className="text-slate-300 text-6xl font-bold">up</h1>
            <p className="text-slate-300 text-2xl font-bold mb-2 text-center font-xl ">
              Contact Information
            </p>
            <div className="sm:flex justify-normal pt-8 pb-4 pl-11">
              <div className="pr-32">
                <label className="text-slate-300">First Name</label>
                <br />
                <input
                  className="sm:h-8 rounded"
                  type="text"
                  name="contactFname"
                  onChange={(e) => setcontactFname(e.target.value)}
                />
                {error && contactFname.length <= 0 ? (
                  <p className="text-red-500"> first name is required</p>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <label className="text-slate-300 ">last Name</label> <br />
                <input
                  className="sm:h-8 rounded"
                  type="text"
                  name="contactLname"
                  onChange={(e) => setcontactLname(e.target.value)}
                />
                {error && contactLname.length <= 0 ? (
                  <p className="text-red-500">last name is required</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="pl-11 pb-4">
              <label className="text-slate-300 ">Phone number</label> <br />
              <input
                className="rounded sm:h-8 sm:w-60"
                type="numeric"
                name="contactPhone"
                onChange={(e) => setcontactPhone(e.target.value)}
              />
              {error && !regexp.test(contactPhone) ? (
                <p className="text-red-500">Invalid contactPhone number</p>
              ) : (
                ""
              )}
            </div>
            <div className="pl-11 pb-4">
              <label className="text-slate-300 ">Email</label>
              <br />
              <input
                className="sm:w-60 sm:h-8 rounded"
                type="contactEmail"
                name="contactEmail"
                onChange={(e) => setcontactEmail(e.target.value)}
              />
              {error && !regex.test(contactEmail) ? (
                <p className="text-red-500">it is not contactEmail format</p>
              ) : (
                ""
              )}
            </div>
            <div className="pl-11 pb-4">
              <label className="text-slate-300 ">Relation </label>
              <br />
              <input
                className="rounded sm:w-60 sm:h-8"
                type="text"
                name="relation"
                onChange={(e) => setrelationship(e.target.value)}
              />
              {error && relationship.length <= 0 ? (
                <p className="text-red-500">the relationship is required </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-end p-11">
              <button className="text-slate-300 border-spacing-3 border border-white px-5 border-2">
                Finish
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
