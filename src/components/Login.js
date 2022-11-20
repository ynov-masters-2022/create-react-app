import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const { loading, login } = useAuth();
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("triggering login");
      const response = await login({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      localStorage.setItem("refresh_token", response.data.refresh_token);
      dispatch({ type: "login" });
      navigate("/admin/users");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Login :</label>
          <input
            type="text"
            name="username"
            id="username"
            ref={usernameRef}
            defaultValue="bobby@bob.com"
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            defaultValue="bobby1234"
          />
        </div>
        <div>
          <input type="submit" value="Connexion" disabled={loading} />
        </div>
      </form>
    </>
  );
};

export default Login;
