import React from "react";
import { useSelector } from "react-redux";
import LayoutHelper from "../Layout";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log("user ", user);
  return (
    <LayoutHelper>
      <div>
        <h1>Home</h1>
      </div>
    </LayoutHelper>
  );
};

export default Home;
