import { Form, Input } from "antd";
import type { Rule } from "antd/es/form";
import React from "react";
import styles from "./AuthFormItem.module.scss";

export interface AuthFormItemProps {
  name: string;
  placeholder?: string;
  type?: "password" | "email";
  rules?: Rule[];
}

const AuthFormItemComponent = ({
  name,
  rules,
  type,
  placeholder,
}: AuthFormItemProps) => {
  return (
    <Form.Item name={name} rules={rules} className={styles.formItem}>
      {type == "password" ? (
        <Input.Password placeholder={placeholder} className={styles.input} />
      ) : (
        <Input type={type} placeholder={placeholder} className={styles.input} />
      )}
    </Form.Item>
  );
};

export const AuthFormItem = React.memo(AuthFormItemComponent);
