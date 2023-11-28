import React, { useState } from "react";
import Course from "../assets/course.png";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function ContactUs() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [error, seterror] = useState(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length == 0) {
      seterror(true);
      return;
    }
    if (!regex.test(email)) {
      seterror(true);
      return;
    }
    if (message.length == 0) {
      seterror(true);
      return;
    }
    //Send('/Contsct')
  };
  return (
    <div className="bg-white">
      <Menu />
      <div className='bg-cover bg-center h-900 rounded-b-lg' style={{backgroundImage: `url(${Course})`}}>
        <div className="text-white flex justify-center">
          <div className="pt-60">
            <h1 className="text-6xl font-extrabold tracking-widest font-mono opacity-80 pb-11 ">Contact <span className="border-b border-cyan-400 font-mono">US</span></h1>
            <p className="pb-10">
              if you want to work with us or want to know <br />
              more about us, please use the following options.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="flex-col sm:flex-row flex justify-evenly">
          <div className="">
            <h1 className="text-3x sm:text-6xl pl-11 pt-11">Get In Touch</h1>
            <p className="text-blue-900 sm:text-xl p-11">
              "Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit. <br />
              Vestibulum sagittis nisi ac enim fringilla, <br />
              nec suscipit arcu pharetra."
            </p>
          </div>
          <div className="flex sm:flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-96 bg-stone-300 rounded-2xl ">
              <div className="p-8">
                <input
                  type="text"
                  name="name"
                  className=" text-black px-4 py-2 h-12 w-80 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="name  "
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              {error && name.length <= 0 ? (
                <p className="text-red-500">sender name is required </p>
              ) : (
                ""
              )}
              <div className="p-8">
                <input
                  type="email"
                  name="email"
                  className=" text-black px-4 py-2 w-80 h-12 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="email  "
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              {error && !regex.test(email) ? (
                <p className="text-red-500">it is not email format</p>
              ) : (
                ""
              )}
              <div className="p-8">
                <textarea
                  className="rounded-xl w-80"
                  placeholder="message"
                  rows="5"
                  onChange={(e) => setmessage(e.target.value)}
                />
                {error && message.length <= 0 ? (
                  <p className="text-red-500">the message is required</p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex justify-end pr-8 pb-8">
                <button className="rounded w-24 border-spacing-3 border bg-gray-900 text-stone-400 text-center  text-2xl font-normal border-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-col sm:flex-row flex justify-evenly p-16 ">
          <div className=" bg-stone-300 rounded-3xl mb-8 sm:mb-0  flex justify-normal">
            <div className="p-10">
              <FaEnvelopeOpenText className="w-14 h-24 text-gray-700" />
            </div>
            <div className="">
              <p className="pt-10 pr-4">
                <span className="pb-4 text-2xl font-fontawesome"> Email</span>
                <br />
                info@omishtujoy.com
                <br />
                omishtujoy@gmail.com
              </p>
            </div>
          </div>
          <div className=" bg-stone-300 rounded-3xl mb-8 sm:mb-0 p-8">
            <div className="flex justify-normal">
              <div className="pt-7 pr-4">
                <FaMobileAlt className="h-24 w-12 text-gray-600" />
              </div>
              <p className="px-6">
                <span className="pb-4 text-2xl font-fontawesome"> Phone</span>
                <br />
                + 251 916 396011
                <br />
                + 251 932 265791
                <br />+ 251 939 140883
              </p>
            </div>
          </div>
          <div className=" bg-stone-300 p-10 rounded-3xl ">
            <div className="flex justify-normal">
              <FaMapMarkerAlt className="h-28 w-16 text-gray-700" />
              <p className="pl-4">
                <span className="pb-4 text-2xl font-fontawesome">Location</span>{" "}
                <br />
                Addis Ababa,EthiopiaYeka <br />
                Sub-City, Megenegna , <br />
                Metebaber building, 7th floor,
                <br />
                office number: 711A
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
