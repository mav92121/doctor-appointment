import React, { useState } from "react";
import NotificationsCard from "./NotificationsCard";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { message } from "antd";
import { setUser } from "../../slice/userSlice";

const Read = () => {
  const user = useSelector((s) => s.user);
  const noOfReadNotificatoins = user?.seen_notifications.length;
  const dispatch = useDispatch();
  const ClearAll = async () => {
    try {
      const backend_url = import.meta.env.VITE_BACKEND_URL;
      const data = await axios.post(`${backend_url}/user/clear-all`, {
        id: user._id,
      });
      dispatch(setUser(data.data));
      message.success("Cleared all notifications successfully");
    } catch (e) {
      message.error("Something went wrong");
    }
  };

  return (
    <div className="relative">
      {noOfReadNotificatoins > 0 && (
        <div
          onClick={ClearAll}
          className=" absolute z-20 right-3 top-1 underline cursor-pointer hover:text-[#1677FF]"
        >
          Clear all
        </div>
      )}
      {user?.seen_notifications.map((message) => (
        <NotificationsCard messages={message} />
      ))}
    </div>
  );
};

export default Read;
