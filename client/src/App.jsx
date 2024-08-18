import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SpinLayout from "./components/SpinLayout";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <SpinLayout />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
