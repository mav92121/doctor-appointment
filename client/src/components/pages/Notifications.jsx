import React from "react";
import LayoutHelper from "../Layout";
import { Tabs } from "antd";
import Unread from "./Unread";
import Read from "./Read";

const Notifications = () => {
  const items = [
    {
      key: "1",
      label: "Unread",
      children: <Unread />,
    },
    {
      key: "2",
      label: "Read",
      children: <Read />,
    },
  ];
  return (
    <LayoutHelper>
      <div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </LayoutHelper>
  );
};

export default Notifications;
