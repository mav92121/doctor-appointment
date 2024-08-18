import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const PublicRoutes = ({ children }) => {
  if (isAuthenticated()) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoutes;
