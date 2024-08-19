import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../slice/userSlice";

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const getUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const backend_url = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(`${backend_url}/user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setUser(res.data));
      } catch (error) {
        console.log("errr");
      }
    }
  };
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  if (!isAuthenticated()) {
    // localStorage.clear();
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoutes;
