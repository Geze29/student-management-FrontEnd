import React, { useEffect, useState } from "react";
import StudentSlideBar from "../StudentSlideBar";
import { FaPenSquare } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../../store/store";
import axios from "axios";
import Menu from "../../../components/Menu";
function StudentContactEdit() {
  const navigator = useNavigate();
  const token = useAuthStore((state) => state.token);

  const location = useLocation();
  const student_contact = location.state;

  const [contactFname, setFname] = useState(student_contact.contactFname);
  const [contactLname, setLname] = useState(student_contact.contactLname);
  const [contactEmail, setEmail] = useState(student_contact.contactEmail);
  const [contactPhone, setPhone] = useState(student_contact.contactPhone);
  const [relation, setRelation] = useState(student_contact.relation);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      contactFname,
      contactLname,
      contactPhone,
      contactEmail,
      relation,
    };

    console.log(data);

    try {
      const response = await axios.put(`http://localhost:8000/api/studentContact/${student_contact.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 202) {
        alert('successfully Updated');
        navigator('/student/contact')
      }
      console.log(response);    
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <Menu></Menu>
      <StudentSlideBar />
      <div className="pt-24 sm:pr-20 pl-44 sm:pl-80 ">
        <p className="text-white py-1 pl-4 rounded text-2xl  bg-blue-900 flex justify-normal">
          <FaPenSquare className="h-8 w-8" />

          <span className="pl-4">Edit Contact information</span>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex-col sm:flex-row flex justify-normal pt-8 sm:pr20 pl-44 sm:pl-80">
          <div className="flex justify-normal ">
            <div className="pl-4 sm:pr-28 ">
              <label className="text-blue-950 sm:text-xl font-semibold ">
                First Name:
              </label>
              <br />
              <input
                onChange={(e) => setFname(e.target.value)}
                value={contactFname}
                type="text"
                className="bg-gray-300"
              />
              <br />
              <label className="text-blue-950 sm:text-xl font-semibold">
                last Name:
              </label>
              <br />
              <input
                onChange={(e) => setLname(e.target.value)}
                value={contactLname}
                type="text"
                className="bg-gray-300"
              />
              <br />
              <label className="text-blue-950 sm:text-xl font-semibold ">
                Phone Number:
              </label>
              <br />
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={contactPhone}
                type="numeric"
                className="bg-gray-300"
              />
            </div>
          </div>
          <div className="pl-4">
            <p className="text-blue-950 sm:text-xl font-semibold ">Email:</p>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={contactEmail}
              type="email"
              className="bg-gray-300"
            />
            <br />
            <p className="text-blue-950 sm:text-xl font-semibold">Relation:</p>
            <br />
            <input
              onChange={(e) => setRelation(e.target.value)}
              value={relation}
              type="text"
              className="bg-gray-300"
            />
          </div>
        </div>
        <div className="flex justify-end pb-4  pr-20">
          <button
            type="submit"
            className="bg-blue-950 px-5 text-white rounded font-semibold">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentContactEdit;
