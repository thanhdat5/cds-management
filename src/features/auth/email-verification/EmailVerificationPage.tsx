import { Flex, Form } from "antd";
import React from "react";
import { AuthButton } from "../components/auth-button/AuthButton";
import { AuthCard } from "../components/auth-card/AuthCard";
import styles from "./EmailVerificationPage.module.scss";
import OTPInput from "react-otp-input";

const OTP_LENGTH = 6;
export const EmailVerificationPage: React.FC = () => {
  const [form] = Form.useForm();
  const handleVerify = async (values: {
    username: string;
    password: string;
  }) => {
    console.log(values);
  };

  const handleResend = () => {
    console.log("Resend clicked!");
  };

  return (
    <AuthCard
      title="Email Verification"
      description="Please enter the 6-digit verification code that was sent to your email"
    >
      <Form form={form} onFinish={handleVerify} layout="vertical">
        <Flex vertical align="center" className={styles.inner}>
          <Form.Item
            name="otp"
            rules={[
              {
                required: true,
                message: "Please enter your OTP",
              },
            ]}
            valuePropName="value"
            trigger="onChange"
          >
            <OTPInput
              value={form.getFieldValue("otp")}
              onChange={(val) => form.setFieldsValue({ otp: val })}
              numInputs={OTP_LENGTH}
              shouldAutoFocus
              inputType="number"
              renderInput={(props) => <input {...props} />}
            />
          </Form.Item>

          <AuthButton htmlType="button" onClick={handleResend}>
            Resend (59s)
          </AuthButton>
        </Flex>
      </Form>
    </AuthCard>
  );
};
