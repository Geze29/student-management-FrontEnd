import React, { useEffect } from "react";
import useAuthStore from "../store/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigator = useNavigate();
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:8000/api/userData", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          switch (res.data.role) {
            case "student":
              navigator("/student");
              break;
            case "admin":
              navigator("/admin");
              break;
            case "instructor":
              navigator("instructor");
              break;
            default:
              break;
          }
        })
        .catch((error) => console.log(error.resonse));
    } else {
      navigator("/login");
    }
  }, []);
}
