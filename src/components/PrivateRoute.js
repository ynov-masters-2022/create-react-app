import { Outlet, Navigate } from "react-router-dom";
import { hasToken } from "../utils";

export const PrivateRoute = () => {
  return hasToken() ? <Outlet /> : <Navigate to="/login" />;
};
