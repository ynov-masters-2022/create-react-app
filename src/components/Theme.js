import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  const switchTheme = () =>
    dispatch({
      type: "SWITCH_THEME",
      payload: theme.value === "dark" ? "light" : "dark",
    });

  return (
    <div>
      <h1>Thème : {theme.value}</h1>
      <div>
        <button onClick={switchTheme}>Switch Theme</button>
      </div>
    </div>
  );
};

export default Theme;
