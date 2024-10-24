/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useState(true);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <>{children}</>;
  }

  return (
    <Navigate
      to="/admin-login"
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;