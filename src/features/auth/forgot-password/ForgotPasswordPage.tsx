import { Flex, Form } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthButton } from "../components/auth-button/AuthButton";
import { AuthCard } from "../components/auth-card/AuthCard";
import { AuthFormItem } from "../components/auth-form/AuthFormItem";
import type { ForgotPasswordRequest } from "../authTypes";
import styles from "./ForgotPasswordPage.module.scss";

export const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<ForgotPasswordRequest>();

  const handleRequest = async (values: ForgotPasswordRequest) => {
    console.log(values);
    navigate("/email-verification");
  };

  return (
    <AuthCard
      title="Forgot Password"
      description="Please enter your email address to reset your password"
    >
      <Form form={form} onFinish={handleRequest} layout="vertical">
        <Flex vertical align="center" className={styles.inner}>
          <AuthFormItem
            type="email"
            name="email"
            rules={[{ required: true }, { type: "email" }]}
            placeholder="Enter your email address"
          />
          <AuthButton>Request</AuthButton>
        </Flex>
      </Form>
    </AuthCard>
  );
};
