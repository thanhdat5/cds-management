import { Button, Modal, type ModalProps } from "antd";
import type { MouseEvent, ReactNode } from "react";
import styles from "./LoadingPopup.module.scss";
import IconLoading from "../../assets/icons/icon-loading.svg";

export interface LoadingPopupProps extends Pick<ModalProps, "open" | "onCancel"> {
  buttonText?: ModalProps["cancelText"];
  message: string | ReactNode;
  onButtonClick?: (event: MouseEvent) => void;
}
export const LoadingPopup = ({
  open,
  buttonText = "00:00",
  message,
  onButtonClick,
  onCancel,
}: LoadingPopupProps) => {
  return (
    <Modal
      centered
      width={380}
      open={open}
      onCancel={onCancel}
      footer={[
        <Button
          color="primary"
          variant="outlined"
          key="back"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>,
      ]}
      className={styles.modal}
    >
      <div className={styles.inner}>
        <div className={styles.icon}>
          <img src={IconLoading} alt="loading" />
        </div>
        <div className={styles.message}>{message}</div>
      </div>
    </Modal>
  );
};
