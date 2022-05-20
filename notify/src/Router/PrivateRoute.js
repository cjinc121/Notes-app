import React from "react";
import { useAuth } from "../context/auth-context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ navigateTo }) => {
  const { user } = useAuth();

  return user.isUserLoggedIn ? navigateTo : <Navigate replace to="/login" />;
};

export default ProtectedRoute;
