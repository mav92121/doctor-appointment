import { Card } from "antd";
import React from "react";

const NotificationsCard = ({ messages }) => {
  console.log(messages);
  return (
    <div>
      <Card className="w-[60vw] mb-2">
        <h1>{messages.name}</h1>
      </Card>
    </div>
  );
};

export default NotificationsCard;
