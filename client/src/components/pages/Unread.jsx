import React, { useState } from "react";
import NotificationsCard from "./NotificationsCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { message } from "antd";

const Unread = () => {
  const user = useSelector((s) => s.user);
  const [rerender, setRerender] = useState(true);
  const markAllRead = async () => {
    try {
      const backend_url = import.meta.env.VITE_BACKEND_URL;
      const data = await axios.post(`${backend_url}/user/mark-all-read`, {
        id: user._id,
      });
      message.success(data.data);
    } catch (e) {
      message.error("Something went wrong");
    }
  };

  return (
    <div className="relative">
      <div
        onClick={markAllRead}
        className=" absolute z-20 right-3 top-1 underline cursor-pointer hover:text-[#1677FF]"
      >
        Mark all read
      </div>
      {user?.unseen_notifications.map((message) => (
        <NotificationsCard messages={message} />
      ))}
    </div>
  );
};

export default Unread;
