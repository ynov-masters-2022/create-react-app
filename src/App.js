import { useContext, useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AdminUsers from "./components/AdminUsers";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import { PrivateRoute } from "./components/PrivateRoute";
import Search from "./components/Search";
import Theme from "./components/Theme";
import Timer from "./components/Timer";
import UserDetailsPage from "./components/UserDetailsPage";
import Users from "./components/Users";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import { useAxiosInstance } from "./hooks/useAxiosInstance";
import Layout from "./layout/Layout";

function App() {
  const [theme, setTheme] = useState("light");
  const instance = useAxiosInstance();
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    console.log("launching Check auth");
    instance
      .get(`${process.env.REACT_APP_API_ENTRYPOINT}/check/auth`)
      .then(() => dispatch({ type: "login" }));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path="users/:id" element={<UserDetailsPage />} />
          <Route path="search" element={<Search />} />
          <Route path="counter" element={<Counter />} />
          <Route path="timer" element={<Timer />} />
          <Route path="theme" element={<Theme />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<PrivateRoute />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
