import { CloseOutlined } from "@ant-design/icons";
import { Button, Modal, type ModalProps } from "antd";
import type { ReactNode } from "react";
import styles from "./ConfirmPopup.module.scss";
import IconConfirm from "../../assets/icons/icon-delete.svg";

export interface ConfirmPopupProps
  extends Pick<
    ModalProps,
    "title" | "cancelText" | "okText" | "open" | "onCancel"
  > {
  onConfirm?: ModalProps["onOk"];
  message: string | ReactNode;
}
export const ConfirmPopup = ({
  open,
  title = "Thông báo",
  okText = "Đồng ý",
  cancelText = "Hủy",
  message,
  onConfirm,
  onCancel,
}: ConfirmPopupProps) => {
  return (
    <Modal
      centered
      width={380}
      closeIcon={false}
      open={open}
      footer={[
        <Button
          color="primary"
          variant="outlined"
          key="back"
          onClick={onCancel}
          icon={<CloseOutlined />}
          iconPosition="start"
        >
          {cancelText}
        </Button>,
        <Button key="submit" type="primary" onClick={onConfirm}>
          {okText}
        </Button>,
      ]}
      className={styles.modal}
    >
      <div className={styles.inner}>
        <div className={styles.icon}>
          <img src={IconConfirm} alt="confirm" />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.message}>{message}</div>
      </div>
    </Modal>
  );
};
