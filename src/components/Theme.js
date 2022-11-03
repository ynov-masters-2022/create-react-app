import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div>
      <h1>Thème : {theme}</h1>
      <div>
        <button onClick={switchTheme}>Switch Theme</button>
      </div>
    </div>
  );
};

export default Theme;
