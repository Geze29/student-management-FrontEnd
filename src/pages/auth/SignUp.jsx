import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import axios from "axios";
export default function Signup() {
  const navigator = useNavigate();
  const [fname, setfname] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState();
  const [gender, setGender] = useState();
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [address, setaddress] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [phoneNumber, setphone] = useState();
  const [educationLevel, setEducationLevel] = useState();
  const [errors, seterrors] = useState(false);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexp = /^\d{10}$/;

  const handleChange = async (e) => {
    e.preventDefault();
    if (fname.length == 0 || lname.length == 0) {
      seterrors(true);
      return;
    }
    if (mname.length == 0 || address.length == 0) {
      seterrors(true);
      return;
    }

    if (password.length < 6) {
      seterrors(true);
      return;
    }

    if (password !== confirmPassword) {
      seterrors(true);
      return;
    }
    if (!regex.test(email)) {
      seterrors(true);
      return;
    }
    if (!regexp.test(phoneNumber)) {
      seterrors(true);
      return;
    }

    const data = {
      email,
      fname,
      mname,
      lname,
      gender,
      password,
      address,
      birthDate,
      phoneNumber,
      educationLevel,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/checkEmail",
        { email }
      );

      if (response.status === 200) {
        console.log(response);
        navigator("contact", { state: data });
      }
      
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400) {
        alert("Email exist");
      }
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleShowPassword = (e) => {
    const pwd = document.getElementById("password");
    const check = document.getElementById("show_password");

    pwd.type = check.checked ? "text" : "password";
  };

  const handleShowConfirmPassword = (e) => {
    const pwd = document.getElementById("confirmPassword");
    const check = document.getElementById("show_confirm_password");

    pwd.type = check.checked ? "text" : "password";
  };

  return (
    <div className="h-screen ">
      <form className="" onSubmit={handleChange}>
        <div className="flex justify-normal pb-0 h-screen ">
          <div className="pt-16 bg-gray-300 w-1/2 h-screen ">
            <h1 className="text-2xl sm:text-6xl font-bold flex justify-end text-blue-950">
              sign
            </h1>
            <div className="sm:pl-16 pl-4 pt-10">
              <div className="">
                <div className="flex-col sm:flex-row flex justify-normal ">
                  <div className="pb-4 pr-32">
                    <label className="">First Name</label>
                    <br />
                    <input
                      className="rounded h-10"
                      type="text"
                      name="fname"
                      onChange={(e) => setfname(e.target.value)}
                    />
                    {errors && fname.length <= 0 ? (
                      <p className="text-red-500">first name is required</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="pb-4">
                    <label className="">Middle Name</label>
                    <br />
                    <input
                      className="rounded h-10"
                      type="text"
                      name="mname"
                      onChange={(e) => setmname(e.target.value)}
                    />
                    {errors && mname.length <= 0 ? (
                      <p className="text-red-500">middle name is required</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="pb-4">
                  <label className="">Education </label>
                  <br />
                  <input
                    className="rounded h-10"
                    type="text"
                    name="educationLevel"
                    onChange={(e) => setEducationLevel(e.target.value)}
                    required
                  />
                </div>
                <div className="pb-4">
                  <label className="">Last Name</label>
                  <br />
                  <input
                    className="rounded h-10"
                    type="text"
                    name="lname"
                    onChange={(e) => setlname(e.target.value)}
                  />
                  {errors && lname.length <= 0 ? (
                    <p className="text-red-500">last name is required</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="pb-4">
                  <label className="">Email</label>
                  <br />
                  <input
                    className="rounded h-10 sm:w-64"
                    type="email"
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  {errors && !regex.test(email) ? (
                    <p className="text-red-500">it is not email format</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="pb-4">
                  <label className="">Gender</label>
                  <br />
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGenderChange}
                    />
                    <label className="text-blue-950 px-1" htmlFor="male">
                      Male
                    </label>

                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGenderChange}
                      required
                    />
                    <label className="text-blue-950 px-1" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
                <div className="pb-10">
                  <label className="">Address</label>
                  <br />
                  <input
                    className="rounded sm:h-10 sm:w-64 "
                    type="text"
                    name="address"
                    onChange={(e) => setaddress(e.target.value)}
                  />
                  {errors && address.length <= 0 ? (
                    <p className=" text-red-500">address is required</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-16 bg-blue-950 h-screen w-1/2">
            <h1 className="text-slate-300 text-2xl sm:text-6xl font-bold">
              up
            </h1>
            <div className="sm:pl-20 pt-8 pb-4 ">
              <label className="text-white">Phone Number</label>
              <br />
              <input
                type="numeric"
                name="phone"
                className="h-10 rounded "
                onChange={(e) => setphone(e.target.value)}
              />
              {errors && !regexp.test(phoneNumber) ? (
                <p className="text-red-500">Invalid phone number</p>
              ) : (
                ""
              )}
            </div>

            <div className="sm:pl-20 pb-4">
              <label className="text-white">Date of birth</label>
              <br />
              <input
                type="date"
                min={"1980-01-01"}
                max={"2010-01-01"}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                }}
                className="lg:pb-8 pt-2 sm:h-10 rounded sm:w-72"
                required
              />
            </div>

            <div className="sm:pl-20 pb-2">
              <label className="text-white">password</label>
              <br />
              <div className="w-fit relative">
                <input
                  className="rounded sm:h-10 sm:w-64 "
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <input
                  type="checkbox"
                  id="show_password"
                  onChange={handleShowPassword}
                  style={{ display: "none" }}
                />
                <label htmlFor="show_password">
                  <FaEye className="text-blue-950 text-blue-100 absolute right-1 top-3 cursor-pointer" />
                </label>
              </div>
              {errors && password.length <= 8 ? (
                <p className=" text-red-500">
                  Password must be at least 8 characters long
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="sm:pl-20 pb-2">
              <label className="text-white">confirm password</label>
              <br />

              <div className="w-fit relative">
                <input
                  className="rounded sm:h-10 sm:w-64 "
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />

                <input
                  type="checkbox"
                  id="show_confirm_password"
                  onChange={handleShowConfirmPassword}
                  style={{ display: "none" }}
                />
                <label htmlFor="show_confirm_password">
                  <FaEye className="text-blue-950 text-blue-100 absolute right-1 top-3 cursor-pointer" />
                </label>
              </div>

              {errors && password !== confirmPassword ? (
                <p className=" text-red-500">Passwords do not match</p>
              ) : (
                ""
              )}
            </div>
            <div className="sm:pl-20 pb-4">
              <p className="text-white">
                already have an account?
                <Link to="/Login">login</Link>
              </p>
              <div className="flex justify-end p-10 pt-0">
                <button
                  type="submit"
                  className="border-spacing-3 border border-white text-white px-5 text-xl font-medium border-2 ">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
