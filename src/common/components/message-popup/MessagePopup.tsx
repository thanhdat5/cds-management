import { Button, Modal, type ModalProps } from "antd";
import { useMemo, type ReactNode } from "react";
import styles from "./MessagePopup.module.scss";
import IconWarning from "../../assets/icons/icon-warning.svg";
import IconFail from "../../assets/icons/icon-fail.svg";
import IconSuccess from "../../assets/icons/icon-success.svg";

export interface MessagePopupProps
  extends Pick<ModalProps, "title" | "cancelText" | "open" | "onCancel"> {
  message: string | ReactNode;
  type?: "warning" | "fail" | "success";
}
export const MessagePopup = ({
  open,
  title = "Cảnh báo",
  cancelText = "ĐÓNG",
  type = "warning",
  message,
  onCancel,
}: MessagePopupProps) => {
  const icon = useMemo(() => {
    if (type == "fail") return IconFail;
    if (type == "success") return IconSuccess;
    return IconWarning;
  }, [type]);
  return (
    <Modal
      centered
      width={380}
      closeIcon={false}
      open={open}
      footer={[
        <Button
          type="primary"
          key="back"
          onClick={onCancel}
          style={{ width: type == "warning" ? 140 : "100%" }}
        >
          {cancelText}
        </Button>,
      ]}
      className={styles.modal}
    >
      <div className={styles.inner}>
        <div className={styles.icon}>
          <img src={icon} alt={type} />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.message}>{message}</div>
      </div>
    </Modal>
  );
};
