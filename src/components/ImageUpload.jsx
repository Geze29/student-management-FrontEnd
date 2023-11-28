import React, { useState } from "react";
import person from "../assets/Samplepro.png";
import axios from "axios";
export default function ImageUpload1() {
  const [image, setImage] = useState("");
  const [url ,setUrl] = useState();
  const upload_preset = 'ksramwzj';

  const handleUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', image);
    data.append('upload_present', upload_preset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dkpvmwtr4/image/upload`,{data}
      );
      setUrl(response.url)
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <form onSubmit={handleUpload} method="post">
      <div className="self-center mt-6 px-11 pt-11 shadow-md bg-slate-200">
        <input
          type="file"
          accept="image/*"
          onChange={e=>{setImage(e.target.files[0])}}
          className="hidden"
          id="file"
        />
        <label htmlFor="file" className="hover:opacity-70 cursor-pointer">
            <img src={person} alt="person" />
        </label>
        <h3 className="px-5 py-5 font-bold ">Upload image</h3>
      </div>
    <input className="bg-blue-700 rounded-md px-4 py-2 text-white mx-3 cursor-pointer" type="submit" value={"submit"}/>
    </form>
  );
}
