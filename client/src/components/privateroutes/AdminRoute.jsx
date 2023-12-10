import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  const admin = currentUser?.user.role;
  return admin == null ? <Navigate to="/admin-not" /> : <Outlet />;
}
