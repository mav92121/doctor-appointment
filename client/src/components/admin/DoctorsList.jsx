import React, { useEffect, useState } from "react";
import LayoutHelper from "../Layout";
import axios from "axios";
import { Button, Table } from "antd";

const DoctorsList = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const doctors = await axios.get(`${backend_url}/doctor/get_all_doctors`);
      setDoctors(doctors.data);
    };
    fetchDoctors();
  }, []);
  const columns = [
    { title: "Name", dataIndex: "first_name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone Number", dataIndex: "phone_number", key: "phone_number" },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text, act) => {
        const date = new Date(text);
        return date.toLocaleDateString();
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, act) => <Button>Block</Button>,
    },
  ];

  return (
    <div>
      <LayoutHelper>
        <Table dataSource={doctors} columns={columns} />
      </LayoutHelper>
    </div>
  );
};

export default DoctorsList;
