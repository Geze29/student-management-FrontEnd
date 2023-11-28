import axios from "axios";
import { baseURL } from "../config";

export const Enroll = async (data, token) => {
  const response = await axios.post(`${baseURL}/pay`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const CheckEnrollment = async (data, token) => {
  try {
    const response = await axios.post(`${baseURL}/checkEnrollment`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const EnrolledStudents = async (token, id) => {
  try {
    const response = await axios.get(
      `${baseURL}/enrollmentInfo/students/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const UpdateEnrollment = async (data, token, id) => {
  try {
    const response = await axios.put(
      `${baseURL}/enrollment/${id}`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const EnrolledCourses = async (token, id) => {
  const response = await axios.get(`${baseURL}/enrollmentInfo/courses/${id}`, 
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
