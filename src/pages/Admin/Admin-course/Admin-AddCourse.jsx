import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Abstract from "../../../assets/AbstractBackground.jpeg";
import { useNavigate } from "react-router-dom";
import AdminSlideBar from "../../../components/AdminSlideBar";
import useAuthStore from "../../../store/store";
import { Instructor } from "../../../api/getUserData";
function AddCourse() {
  const navigator = useNavigate();
  const [courseCode, setcourseCode] = useState();
  const [courseName, setcourseName] = useState();
  const [enrollmentType, setenrollmentType] = useState();
  const [instructor_id, setinstructor_id] = useState();
  const [fee, setfee] = useState();
  const [maxCapacity, setmaxCapacity] = useState();
  const [classStartDate, setClassStartDate] = useState();
  const [classEndDate, setClassEndDate] = useState();
  const [dayTaken, setDayTaken] = useState();
  const [backgroundURL, setBackgroundURL] = useState();

  const [instructors, setInstructors] = useState();

  const getCurrentDate = () =>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const [error, seterror] = useState(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [isHiddenEnroll, setIsHiddenEnroll] = useState(true);

  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    Instructor(token)
      .then((res) => setInstructors(res))
      .catch((err) => console.log(err));
  }, []);

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
        console.log(res.data);
        if (res.data) {
          setBackgroundURL(res.data.secure_url);
        }
        backgroundURL && console.log(backgroundURL);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dayTaken.length === 0 && fee.length === 0) {
      seterror(true);
      return;
    }
    if (enrollmentType.length === 0) {
      seterror(true);
      return;
    }


    const years = 0;
    if (maxCapacity <= years) {
      seterror(true);
      return;
    }

    
    const course = {
      courseCode,
      courseName,
      instructor_id,
      maxCapacity,
      fee,
      classStartDate,
      classEndDate,
      enrollmentType,
      dayTaken,
      backgroundURL,
    };


    axios
      .post("http://localhost:8000/api/checkCourseCode", {courseCode})
      .then((res) => {
        if (res.status === 200) {
          navigator("/admin/courses/addcourse/description", { state: course });
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert('message : course code is exist');
        }
        console.log(err.response);
      });

  };

  return (
    <div>
      <div
        className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <AdminSlideBar />
        <div className="pt-32 sm:pr-20 text-white pl-44 sm:pl-72 ">
          <p className=" py-1 pl-4 rounded sm:text-2xl text-xl sm:font-bold  bg-blue-900 flex justify-normal">
            <FaPlus className="h-8 w-8" />
            <span className="pl-11 "> Add Courses</span>
          </p>
        </div>

        <div className="pl-44 sm:pl-72">
          <form onSubmit={handleSubmit} className="form-horizontal">
            <div className="flex justify-normal flex-col sm:flex-row pl-36 pt-16  ">
              <div className="">
                <label className=" font-semibold">Course Name</label>
                <br />
                <input
                  className=" border-spacing-3 border border-gray-800 px-3 py-2"
                  type="text"
                  name="courseName"
                  required
                  placeholder="Course Name"
                  onChange={(e) => setcourseName(e.target.value)}
                />
                <br />
                {error && courseName.length <= 0 ? (
                  <p className="text-red-500">course is required</p>
                ) : (
                  ""
                )}
              </div>

              <div className="sm:pl-56">
                <label className="sm:text-xl font-semibold ">Capacity</label>
                <br />
                <input
                  className="border-spacing-3 border border-gray-800 py-2 px-3"
                  type="number"
                  min="0"
                  required
                  name="maxCapacity"
                  placeholder="maxCapacity"
                  onChange={(e) => setmaxCapacity(e.target.value)}
                />
                <br />
                {error && maxCapacity <= 0 ? (
                  <p className="text-red-500">place enter capacity </p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="form-group flex justify-normal pl-36 flex-col sm:flex-row ">
              <div className="sm:pt-2">
                <label className="sm:text-xl font-semibold ">
                  course code{" "}
                </label>
                <br />
                <input
                  className="border-spacing-3 border border-gray-800 py-2 px-3"
                  type="text"
                  required
                  name="courseCode"
                  placeholder="course code"
                  onChange={(e) => {setcourseCode(e.target.value)
                  }}
                />
                <br />

                {error && courseCode.length <= 0 ? (
                  <p className="text-red-500">course code is required</p>
                ) : (
                  ""
                )}

                <div className="sm:py-2">
                  <label className="sm:text-xl font-semibold ">Day Taken</label>{" "}
                  <br />
                  <input
                    className="border-spacing-3 border border-gray-800 px-3 py-2"
                    type="text"
                    required
                    placeholder="course Day Taken "
                    onChange={(e) => setDayTaken(e.target.value)}
                  />
                  <br />
                  {error && dayTaken.length <= 0 ? (
                    <p className="text-red-500">
                      course day taken is required{" "}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="pb-2">
                  <label className="sm:text-xl font-semibold ">
                    Enrollment type{" "}
                  </label>{" "}
                  <br />
                  <select
                    className="border-spacing-3 border border-gray-800 px-3 py-2 w-44"
                    required
                    onChange={(e) => {
                      setenrollmentType(e.target.value);
                    }}
                    onClick={() => {
                      setIsHiddenEnroll(true);
                    }}>
                    <option
                      className={`${
                        isHiddenEnroll ? "hidden" : ""
                      } text-red-500`}
                      value={null}>
                      Choose Enrollment type
                    </option>
                    <option value="regular">Regular</option>
                    <option value="summer">Summer</option>
                  </select>
                  <br />
                  {error && enrollmentType.length <= 0 ? (
                    <p className="text-red-500">enrollment type is required </p>
                  ) : (
                    ""
                  )}
                </div>

                <input
                  type="file"
                  onChange={handleUpload}
                  id="file"
                  required
                  accept="image/*"
                  className=""
                />
              </div>
              <div className="sm:pl-40">
                <div className="sm:py-2">
                  <label className="sm:text-xl font-semibold ">Fee :</label>
                  <br />
                  <input
                    className="border-spacing-3 border border-gray-800 py-2 px-3"
                    type="text"
                    required
                    placeholder="fee"
                    onChange={(e) => setfee(e.target.value)}
                  />
                  <br />
                  {error && fee.length <= 0 ? (
                    <p className="text-red-500">Fee is required</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="sm:py-2">
                  <label className="sm:text-xl font-semibold ">
                    class start Date{" "}
                  </label>{" "}
                  <br />
                  <input
                    className="border-spacing-3 border border-gray-800 py-2 px-3"
                    required
                    min={getCurrentDate()}
                    onChange={(e) => setClassStartDate(e.target.value)}
                    type="date"
                  />
                  <br />
                </div>

                <div className="">
                  <label className="sm:text-xl font-semibold ">
                    class end Date{" "}
                  </label>{" "}
                  <br />
                  <input
                    className="border-spacing-3 border border-gray-800 py-2 px-3"
                    onChange={(e) => setClassEndDate(e.target.value)}
                    required
                    min={classStartDate && classStartDate}
                    type="date"
                  />
                  <br />
                </div>

                <div className="sm:py-2">
                  <label className="sm:text-xl font-semibold ">
                    Instructor Name
                  </label>
                  <br />

                  <select
                    className="border-spacing-3 border border-gray-800 px-3 py-2 w-44"
                    required
                    onChange={(e) => {
                      setinstructor_id(e.target.value);
                      console.log(e.target.value);
                    }}
                    onClick={() => {
                      setIsHiddenEnroll(true);
                    }}>
                    <option
                      className={`${
                        isHiddenEnroll ? "hidden" : ""
                      } text-red-500`}
                      value={null}>
                      Choose Instructor
                    </option>
                    {instructors &&
                      instructors.map((inst, index) => (
                        <option value={inst.id} key={index}>
                          {inst.user.fname + " " + inst.user.mname}
                        </option>
                      ))}
                  </select>

                  <br />
                </div>
                <div className="pl-32 py-4">
                  <button type="submit" className="py-1 px-4 bg-blue-950 text-gray-300 rounded">
                    Next
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

export default AddCourse;
