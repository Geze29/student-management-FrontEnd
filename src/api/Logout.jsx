import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/store";
import useUserStore from "../store/storeUser";

export default function Logout() {
  const navigator = useNavigate();
  const clearToken = useAuthStore((state) => state.clearToken);
  const token = useAuthStore((state) => state.token);
  const clearUser = useUserStore(state=>state.clearUser);

  const logout = async () => {

    await axios
      .post("http://localhost:8000/api/logout", null,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          clearToken();
          clearUser();
          navigator("/");
        }
        
      })
      .catch((error) => {
        console.log(error.response);
      });


  };

  return (
    <button className="mt-8 border-spacing-0 border-2 p-2" onClick={logout}>
      Log Out
    </button>
  );
}
