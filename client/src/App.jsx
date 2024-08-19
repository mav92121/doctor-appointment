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
import Layout from "./components/Layout";

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
            path="/"
            element={
              <ProtectedRoutes>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
