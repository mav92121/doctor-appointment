import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Badge } from "antd";

const LayoutHelper = ({ children }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const userOptions = [
    {
      name: "Home",
      to: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      to: "/appointments",
      icon: "ri-calendar-line",
    },
    {
      name: "Apply doctors",
      to: "/apply-doctor",
      icon: "ri-hospital-line",
    },
    {
      name: "Profile",
      to: "/profile",
      icon: "ri-user-line",
    },
  ];
  const adminOptions = [
    {
      name: "Home",
      to: "/",
      icon: "ri-home-line",
    },
    {
      name: "Users",
      to: "/users",
      icon: "ri-user-line",
    },
    {
      name: "Doctors",
      to: "/doctors",
      icon: "ri-user-star-line",
    },
    {
      name: "Profile",
      to: "/profile",
      icon: "ri-user-line",
    },
  ];
  const siderOptions = user?.is_admin ? adminOptions : userOptions;
  return (
    <div className="layout flex gap-3">
      <div className="flex items-center h-screen ">
        <div className=" box-border siderbar h-[95vh] w-[13vw] ml-[10px] bg-slate-300 rounded-lg">
          <h1
            onClick={() => navigate("/")}
            className="text-center text-lg font-bold mt-4 mb-6 cursor-pointer"
          >
            Mv
          </h1>
          <div className="flex flex-col gap-9 m-2 justify-center">
            {siderOptions.map((ele) => {
              const isActive = location.pathname === ele.to;
              return (
                <div className="">
                  <Link to={ele.to}>
                    <div
                      className={`justify-center lg:justify-start p-2 flex gap-1 ${
                        isActive ? " bg-slate-600 text-white  " : ""
                      }`}
                    >
                      <i className={ele.icon}></i>
                      <span className="hidden lg:block">{ele.name}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
            <div className="">
              <Link
                to={"/login"}
                onClick={() => {
                  localStorage.clear();
                }}
              >
                <div
                  className={` p-2 flex gap-1 justify-center lg:justify-start `}
                >
                  <i className={`ri-logout-box-line`}></i>
                  <span className="hidden lg:block">Logout</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center h-screen w-[90vw] mr-[10px]">
        <div className=" h-[95vh]  w-full rounded-lg flex flex-col">
          <div className=" border-[1px] border-solid flex justify-end pr-4 items-center border-gray-500 h-[5vh] rounded-lg  mb-[1.5vh]">
            <h1 className="flex gap-4">
              <div className="cursor-pointer">
                <Badge count={user?.unseen_notifications.length}>
                  <i className="mr-2 ri-notification-line"></i>
                </Badge>
              </div>
              <div className=" font-bold ">{user?.name}</div>
            </h1>
          </div>
          <div className="w-full rounded-lg p-4 border-[1px] border-solid border-gray-500  h-[88.5vh]">
            <h2></h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutHelper;
