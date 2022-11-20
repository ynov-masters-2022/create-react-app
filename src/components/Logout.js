import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Logout = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_ENTRYPOINT}/token/invalidate`, {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .then((res) => {
        localStorage.removeItem("refresh_token");
        dispatch({ type: "logout" });
        navigate("/");
      });
  }, [dispatch, navigate]);

  return <div>Déconnexion en cours...</div>;
};

export default Logout;
