import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const SpinLayout = () => {
  const temp = useSelector((state) => state.loading);

  return (
    <>
      {temp && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default SpinLayout;
