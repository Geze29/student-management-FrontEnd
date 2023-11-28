import axios from "axios";

export const UploadImage = (file) =>
{
    const cloud_name = "dkpvmwtr4";
    const upload_preset = "profilePicture";

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
        return(res.data.secure_url);
      })
      .catch((error) => console.log(error));
}