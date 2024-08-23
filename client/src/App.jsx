import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SpinLayout from "./components/SpinLayout";
import PublicRoutes from "./components/PublicRoutes";
import ApplyDoctor from "./components/pages/ApplyDoctor";
import Notifications from "./components/pages/Notifications";
import DoctorsList from "./components/admin/DoctorsList";
import UsersList from "./components/admin/UsersList";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <SpinLayout />
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoutes>
                <Register />
              </PublicRoutes>
            }
          />
          <Route
            path="/apply-doctor"
            element={
              <ProtectedRoutes>
                <ApplyDoctor />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoutes>
                <Notifications />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/doctors"
            element={
              <ProtectedRoutes>
                <DoctorsList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoutes>
                <UsersList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
