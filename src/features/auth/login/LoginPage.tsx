import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Flex, Form } from "antd";
import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthButton } from "../components/auth-button/AuthButton";
import { AuthFormItem } from "../components/auth-form/AuthFormItem";
import { loginApi } from "../authService";
import { loginFailure, loginStart, loginSuccess } from "../authSlice";
import type { LoginRequest } from "../authTypes";
import styles from "./LoginPage.module.scss";

export const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const [form] = Form.useForm<LoginRequest>();
  const navigate = useNavigate();
  const initValues = useMemo(
    () => ({
      username: "admin@example.com",
      password: "123456",
    }),
    []
  );

  const handleLogin = async (values: LoginRequest) => {
    dispatch(loginStart());
    try {
      const user = await loginApi(values.username, values.password);
      dispatch(loginSuccess(user));
      navigate("/app");
    } catch (err: unknown) {
      let errorMsg = "Đăng nhập thất bại";
      if (err instanceof Error) {
        errorMsg = err.message;
      }
      dispatch(loginFailure(errorMsg));
    }
  };

  return (
    <Flex vertical className={styles.inner}>
      <Flex vertical className={styles.form}>
        <h2 className={styles.heading}>LOGIN</h2>
        <Form
          form={form}
          initialValues={initValues}
          onFinish={handleLogin}
          layout="vertical"
        >
          <AuthFormItem
            name="username"
            rules={[{ required: true, message: "Username doesn’t exit" }]}
            placeholder="Username"
          />
          <AuthFormItem
            name="password"
            rules={[{ required: true, message: "Incorrect password" }]}
            placeholder="Password"
            type="password"
          />

          <Flex className={styles.forgotPassword} justify="flex-end">
            <Link to="/forgot-password">Forgot Password?</Link>
          </Flex>

          <AuthButton loading={loading}>Sign in</AuthButton>
        </Form>
      </Flex>
    </Flex>
  );
};
