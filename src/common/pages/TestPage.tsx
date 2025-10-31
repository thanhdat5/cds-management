import { Button, Flex, Space } from "antd";
import { usePopup } from "../hooks/usePopupContext";

export const TestPage = () => {
  const { openPopup } = usePopup();
  return (
    <Flex style={{ padding: 50 }}>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            openPopup({
              type: "confirm",
              props: {
                message: "Bạn có chắc chắc muốn xóa bản ghi này không?",
                onConfirm: () => {
                  /* handle confirm logic here if needed */
                },
                onCancel: () => {
                  /* handle cancel logic here if needed */
                },
              },
            })
          }
        >
          Confirm Popup
        </Button>
        <Button
          type="primary"
          onClick={() =>
            openPopup({
              type: "message",
              props: {
                type: "warning",
                title: "Cảnh báo",
                message:
                  "Đợt phạt hành đã phát sinh giao dịch, bạn không thể xóa.",
                onCancel: () => {
                  /* handle cancel logic here if needed */
                },
              },
            })
          }
        >
          Warning Popup
        </Button>
        <Button
          type="primary"
          onClick={() =>
            openPopup({
              type: "message",
              props: {
                type: "fail",
                title: "Đăng ký thất bại",
                message:
                  "Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ với Tổng đài để được hỗ trợ.",
                onCancel: () => {
                  /* handle cancel logic here if needed */
                },
              },
            })
          }
        >
          Fail Popup
        </Button>
        <Button
          type="primary"
          onClick={() =>
            openPopup({
              type: "message",
              props: {
                type: "success",
                title: "Đăng ký thành công",
                message:
                  "Chúng tôi đã gửi một đường dẫn kích hoạt tài khoản đến hòm thư của bạn.",
                onCancel: () => {
                  /* handle cancel logic here if needed */
                },
              },
            })
          }
        >
          Success Popup
        </Button>
        <Button
          type="primary"
          onClick={() =>
            openPopup({
              type: "loading",
              props: {
                message:
                  "Vui lòng xác thực ký số trên App mobile để hoàn thành giao dịch!",
                buttonText: "04:59",
                onButtonClick: () => {
                  /* handle button logic if needed */
                },
                onCancel: () => {
                  /* handle cancel logic if needed */
                },
              },
            })
          }
        >
          Loading Popup
        </Button>
      </Space>
    </Flex>
  );
};
