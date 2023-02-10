import React from "react";
import { Navigate } from "react-router-dom";


const Privaterouter = ({ children, user }) => {
  if (!user) {
    alert("please login admin");
    return <Navigate to="/createitem" />;
  }
  return children;
};
export default Privaterouter;
