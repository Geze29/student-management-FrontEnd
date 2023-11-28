import axios from "axios";
import { baseURL } from "../config";

export const User = async (token) => {
  const user = await axios.get(`${baseURL}/userData`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return user.data;
};

export const Instructor = async (token) => {
  const instructors = await axios.get(`${baseURL}/instructor`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return instructors.data;
};

export const Student = async (token) => {
  const student = await axios.get(`${baseURL}/student`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return student.data;
};

export const UpdateUser = async (data, id, token, path) => {
  const update = await axios.put(`${baseURL + "/" + path + "/" + id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return update;
};
