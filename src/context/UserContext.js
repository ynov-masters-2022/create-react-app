import { createContext, useReducer } from "react";

const initialState = {
  isConnected: false,
};

export const UserContext = createContext(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isConnected: true,
      };
    case "logout":
      return {
        ...state,
        isConnected: false,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
