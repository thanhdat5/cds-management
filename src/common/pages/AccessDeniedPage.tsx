import { Button } from "@common/components";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

export const AccessDeniedPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "64px 16px" }}>
      <Title>403 - Access denied</Title>
      <Paragraph>Bạn không có quyền truy cập trang này.</Paragraph>
      <Button type="primary" onClick={() => navigate("/")}>
        Về trang chủ
      </Button>
    </div>
  );
};
