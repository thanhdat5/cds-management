import { Button, type ButtonProps } from "antd";
import styles from "./AuthButton.module.scss";

export const AuthButton = ({
  htmlType = "submit",
  loading,
  children,
}: ButtonProps) => {
  return (
    <Button htmlType={htmlType} loading={loading} className={styles.authButton}>
      {children}
    </Button>
  );
};
