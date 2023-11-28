import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import Abstract from "../../../assets/AbstractBackground.jpeg";
import AdminSlideBar from "../../../components/AdminSlideBar";
import Menu from "../../../components/Menu";
import personImage from "../../../assets/Samplepro.png";
import useAuthStore from "../../../store/store";
import { baseURL } from "../../../config";
import { useNavigate } from "react-router-dom";

function AddInstractor() {
  const [gender, setgender] = useState("");
  const [errors, setErrors] = useState([]);

  const token = useAuthStore((state)=>state.token);
  const navigator = useNavigate();

  const [fname, setFname] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setlname] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [educationLevel, seteducationLevel] = useState("");
  const [birthDate , setBirthDate] = useState();
  const [salary, setSalary] = useState("");
  const [experience, setexperience] = useState("");
  const [imagePath, setImagePath] = useState();
  const [password , setPassword] = useState();
  const [error, seterror] = useState(false);
  const regexp = /^\d{10}$/;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [isValid, setIsValid] = useState(true);



  const cloud_name = "dkpvmwtr4";
  const upload_preset = "profilePicture";
  const handleGenderChange = (e) => {
    setgender(e.target.value);
  };
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
          setImagePath(res.data.secure_url);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fname.length === 0 && lname.length === 0) {
      seterror(true);
      return;
    }
    if (mname.length === 0 && address.length === 0) {
      seterror(true);
      return;
    }
    if (educationLevel.length === 0) {
      seterror(true);
      return;
    }
    if (!regexp.test(phoneNumber)) {
      seterror(true);
      return;
    }
    if (!regex.test(email)) {
      seterror(true);
      return;
    }
    

    const instructor = {
      fname,
      mname,
      lname,
      gender,
      salary,
      educationLevel,
      address,
      imagePath,
      email,
      experience,
      password,
      phoneNumber,
      birthDate
    }


    try{
      const response = await axios.post(`${baseURL}/instructor`,instructor,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response);
      if (response.status === 201) {
        alert('successfully registerd');
        navigator("/admin/instructor")
      }
    }catch(err){
      console.log(err.response);
    }

  };

  return (
    <div>
      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <Menu />
        <AdminSlideBar />
        <div className="pt-32 sm:pr-20 text-slate-300 pl-44 sm:pl-72 ">
          <p className=" py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal">
            <FaPlus className="h-8 w-8" />
            <span className="pl-11 font-semibold"> Add Instructor</span>
          </p>
        </div>
        <div className="pl-44 sm:pl-72">
          <form onSubmit={handleSubmit} className="form-horizontal">
            <div className="flex justify-normal flex-col sm:flex-row pl-36 pt-16">
              <div className="">
                <label className="sm:text-xl font-semibold  text-gray-700 ">
                  First Name
                </label>
                <br />
                <input
                  className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  type="text"
                  name="fname"
                  required
                  onChange={(e) => setFname(e.target.value)}
                />
                <br />

                {error && fname.length <= 0 ? (
                  <p className="text-red-500">first name is required</p>
                ) : (
                  ""
                )}
              </div>
              <div className="sm:pl-44">
                <label className="sm:text-xl font-semibold  text-gray-700 ">
                  Middle Name
                </label>{" "}
                <br />
                <input
                  className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  type="text"
                  name="mname"
                  required
                  onChange={(e) => setmname(e.target.value)}
                />
                <br />
                {error && mname.length <= 0 ? (
                  <p className="text-red-500">middle name is required</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="form-group flex justify-normal pl-36 flex-col sm:flex-row ">
              <div className="pb-0 ">
                <label className="sm:text-xl font-semibold  text-gray-700 ">
                  Last Name
                </label>
                <br />
                <input
                  className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  type="text"
                  name="lname"
                  required
                  onChange={(e) => setlname(e.target.value)}
                />
                <br />

                {error && lname.length <= 0 ? (
                  <p className="text-red-500">last name is required</p>
                ) : (
                  ""
                )}

                <div className="py-4">
                  <label className="sm:text-xl font-semibold  text-gray-700 ">
                    Email
                  </label>
                  <br />
                  <input
                    className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                    type="email"
                    required
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <br />
                  {error && !regex.test(email) ? (
                    <p className="text-red-500"> it is not email format </p>
                  ) : (
                    ""
                  )}
                </div>

                <label className="sm:text-xl font-semibold  text-gray-700 ">
                  Phone Number
                </label>
                <br />
                <input
                  className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  type="numeric"
                  required
                  name="phoneNumberNumber"
                  onChange={(e) => setphoneNumber(e.target.value)}
                />
                <br />
                {error && !regexp.test(phoneNumber) ? (
                  <p className="text-red-500"> it is not correct </p>
                ) : (
                  ""
                )}
                <div className="sm:py-4">
                  <label className="sm:text-xl font-semibold  text-gray-700 ">
                    Date of birth{" "}
                  </label>{" "}
                  <br />
                  <input
                    className=" px-10 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                    type="date"
                    min={"1980-01-01"}
                    max={"2010-01-01"}
                    required
                    onChange={(e) => {
                      setBirthDate(e.target.value);
                    }}
                  />
                  <br />
                </div>
                <div className="mr-28">
                  <label htmlFor="file">
                    <div className="flex justify-center pt-14 ">
                      <img
                        className="h-44 w-44 cursor-pointer hover:opacity-50 rounded-md  shadow"
                        src={imagePath ? imagePath : personImage}
                      />
                    </div>
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleUpload}
                    required
                  />

                  <div className="text-xl p-2 font-semibold text-blue-950">
                    Upload Profile Picture
                  </div>
                </div>
              </div>
              <div className="sm:pl-32">
                <label className="sm:text-xl font-semibold  text-gray-700 ">
                  Gender
                </label>
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
                {errors.map((error, index) => (
                  <p key={index} className="text-red-500 mt-2">
                    {error}
                  </p>
                ))}
                <br />
                <div className="py-4">
                  <label className="sm:text-xl font-semibold  text-gray-700 ">
                    Address :
                  </label>
                  <br />
                  <input
                    className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                    type="text"
                    name="Address"
                    required
                    onChange={(e) => setaddress(e.target.value)}
                  />
                  <br />
                  {error && address.length <= 0 ? (
                    <p className="text-red-500">Address is required</p>
                  ) : (
                    ""
                  )}
                </div>
                <label className="sm:text-xl font-semibold  text-gray-700 ">
                  Education level
                </label>{" "}
                <br />
                <input
                  className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  type="text"
                  name="educationLevel"
                  required
                  onChange={(e) => seteducationLevel(e.target.value)}
                />
                <br />
                {error && educationLevel.length <= 0 ? (
                  <p className="text-red-500">educational level is required</p>
                ) : (
                  ""
                )}
                <div className="sm:py-4">
                  <label className="sm:text-xl font-semibold  text-gray-700 ">
                    Salary{" "}
                  </label>
                  <br />
                  <input
                    type="number"
                    required
                    onChange={(e)=>{setSalary(e.target.value)}}
                    className="border-spacing-3 border py-2 px-3"
                  />
                  {!isValid && (
                    <p className="text-red-500">
                      Salary must be between 4000 and 50000
                    </p>
                  )}
                  <br />
                </div>
                <div className="sm:pb-4">
                  <label className="sm:text-xl font-semibold  text-gray-700 ">
                    experience
                  </label>
                  <br />
                  <input
                    className="border-spacing-3 border py-2 px-3"
                    type="number"
                    min="0"
                    required
                    name="experience"
                    onChange={(e) => setexperience(e.target.value)}
                  />
                  <br />
                  {error && experience <= 0 ? (
                    <p className="text-red-500">
                      place enter your work experience{" "}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="sm:pb-4">
                  <label className="sm:text-xl font-semibold  text-gray-700 ">
                    Password
                  </label>
                  <br />
                  <input
                    className="border-spacing-3 border border-gray-300  py-2 px-3"
                    required
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="pl-32 py-4">
                  <button
                    type="submit"
                    className="py-1 px-4 bg-blue-950 text-gray-300 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddInstractor;
