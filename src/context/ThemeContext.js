import { createContext } from "react";

export const initialState = {
  value: "light",
};

export const ThemeContext = createContext(initialState);

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      return {
        value: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
};
