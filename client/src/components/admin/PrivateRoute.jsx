/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { admin, loading } = useContext(AuthContext)
  console.log(admin)

  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (admin) {
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