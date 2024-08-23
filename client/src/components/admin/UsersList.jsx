import React, { useEffect, useState } from "react";
import LayoutHelper from "../Layout";
import axios from "axios";
import { Button, Table } from "antd";

const UsersList = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await axios.get(`${backend_url}/user/get_all_users`);
      setUsers(users.data);
    };
    fetchUsers();
  }, []);
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text, act) => {
        const date = text ? new Date(text) : null;
        return date ? date.toLocaleDateString() : "-";
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, act) => <Button>Block</Button>,
    },
  ];

  console.log("users ", users);
  return (
    <div>
      <LayoutHelper>
        <Table dataSource={users} columns={columns} />
      </LayoutHelper>
    </div>
  );
};

export default UsersList;
