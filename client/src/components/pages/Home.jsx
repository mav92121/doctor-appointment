import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log("user ", user);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
