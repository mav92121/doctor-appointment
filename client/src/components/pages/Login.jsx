import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

let navigate;
const handleLogin = async (values) => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const { data } = await axios.post(`${backend_url}/user/login`, values);
  const token = data.token;
  localStorage.setItem("token", token);
  navigate("/");
};
const onFinish = (values) => {
  console.log("Success:", values);
  handleLogin(values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => {
  navigate = useNavigate();
  return (
    <div className="bg-slate-100 h-screen flex flex-col  items-center">
      <h1 className=" pt-5 font-bold  ">Login</h1>
      <div className=" mt-14 ">
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              type="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please enter you email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                className=" text-center "
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className=" text-center ">
          Don't have an account?
          <Link className=" text-[#40a9ff] " to="/register">
            {" "}
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
