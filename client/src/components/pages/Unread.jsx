import React, { useState } from "react";
import NotificationsCard from "./NotificationsCard";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { message } from "antd";
import { setUser } from "../../slice/userSlice";

const Unread = () => {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  const noOfUnreadNotificatoins = user?.unseen_notifications.length;
  const markAllRead = async () => {
    try {
      const backend_url = import.meta.env.VITE_BACKEND_URL;
      const data = await axios.post(`${backend_url}/user/mark-all-read`, {
        id: user._id,
      });
      dispatch(setUser(data.data));
      message.success("Notifications marked as read");
    } catch (e) {
      message.error("Something went wrong");
    }
  };

  return (
    <div className="relative">
      {noOfUnreadNotificatoins > 0 && (
        <div
          onClick={markAllRead}
          className=" absolute z-20 right-3 top-1 underline cursor-pointer hover:text-[#1677FF]"
        >
          Mark all read
        </div>
      )}
      {user?.unseen_notifications.map((message) => (
        <NotificationsCard messages={message} />
      ))}
    </div>
  );
};

export default Unread;
