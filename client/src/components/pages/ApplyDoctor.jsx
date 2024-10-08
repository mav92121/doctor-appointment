import React from "react";
import LayoutHelper from "../Layout";
import {
  Row,
  Col,
  Form,
  Input,
  Divider,
  TimePicker,
  Button,
  message,
} from "antd";
import axios from "axios";
import { useSelector } from "react-redux";

const ApplyDoctor = () => {
  const [form] = Form.useForm();
  const user = useSelector((state) => state.user);
  const { RangePicker } = TimePicker;
  const handleOnFinish = async (value) => {
    try {
      const backend_url = import.meta.env.VITE_BACKEND_URL;
      await axios.post(`${backend_url}/user/apply-doctor-account`, {
        ...value,
        user_id: user._id,
      });
      message.success("Doctor applied successfully");
      form.resetFields();
    } catch (e) {
      console.error(e);
    }
  };
  const inputPerRow = 3;
  return (
    <LayoutHelper>
      <div>
        <h1 className=" font-bold text-3xl mb-4 ">Apply Doctor Account</h1>
        <Divider />
        <Form form={form} layout="vertical" onFinish={handleOnFinish}>
          <Row gutter={[0, 48]}>
            <h3 className=" text-gray-700 text-lg mb-2 ">
              Personal Information
            </h3>
          </Row>
          <Row gutter={[48, 48]}>
            <Col span={24 / inputPerRow}>
              <Form.Item name="first_name" required label={"First Name"}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24 / inputPerRow}>
              <Form.Item name="last_name" required label={"Last Name"}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24 / inputPerRow}>
              <Form.Item
                rules={[{ type: "email", message: "Please enter valid Email" }]}
                name="email"
                required
                label={"Email"}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[48, 48]}>
            <Col span={24 / inputPerRow}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number",
                  },
                  {
                    validator: (_, value) => {
                      if (!value || /^\d+$/.test(value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Please enter a valid phone number")
                      );
                    },
                  },
                ]}
                name="phone_number"
                required
                label={"Phone Number"}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24 / inputPerRow}>
              <Form.Item name="website" required label={"Website"}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[0, 48]}>
            <h3 className=" text-gray-700 text-lg mb-2 ">
              Professional Information
            </h3>
          </Row>
          <Row gutter={[48, 48]}>
            <Col span={24 / inputPerRow}>
              <Form.Item
                name="specialization"
                required
                label={"Specialization"}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24 / inputPerRow}>
              <Form.Item name="address" required label={"Address"}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24 / inputPerRow}>
              <Form.Item name="experience" required label={"Experience"}>
                <Input type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[48, 48]}>
            <Col span={24 / inputPerRow}>
              <Form.Item name="fees_per_hour" required label={"Fees Per Hour"}>
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={24 / inputPerRow}>
              <Form.Item name="timings" required label={"Timings"}>
                <RangePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-end mt-4">
            <Button
              htmlType="submit"
              className="bg-slate-600 text-white w-[150px]"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </LayoutHelper>
  );
};

export default ApplyDoctor;
