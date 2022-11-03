import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Counter from "./components/Counter";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import Timer from "./components/Timer";
import UserDetailsPage from "./components/UserDetailsPage";
import Users from "./components/Users";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Users />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
        <Route path="search" element={<Search />} />
        <Route path="counter" element={<Counter />} />
        <Route path="timer" element={<Timer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
