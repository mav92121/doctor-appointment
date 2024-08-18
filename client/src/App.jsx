import React from "react";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    const data = axios.get("http://localhost:3000/");
    console.log("data is -> ", data);
  }, []);
  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
