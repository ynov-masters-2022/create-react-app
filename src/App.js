import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Counter from "./components/Counter";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import Theme from "./components/Theme";
import Timer from "./components/Timer";
import UserDetailsPage from "./components/UserDetailsPage";
import Users from "./components/Users";
import {
  initialState,
  ThemeContext,
  themeReducer,
} from "./context/ThemeContext";
import Layout from "./layout/Layout";

function App() {
  const [theme, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path="users/:id" element={<UserDetailsPage />} />
          <Route path="search" element={<Search />} />
          <Route path="counter" element={<Counter />} />
          <Route path="timer" element={<Timer />} />
          <Route path="theme" element={<Theme />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
