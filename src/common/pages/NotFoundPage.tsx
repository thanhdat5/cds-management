import { Button } from "@common/components";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "64px 16px" }}>
      <Title>404 - Không tìm thấy trang</Title>
      <Paragraph>Trang bạn truy cập không tồn tại.</Paragraph>
      <Button type="primary" onClick={() => navigate("/")}>
        Về trang chủ
      </Button>
    </div>
  );
};
