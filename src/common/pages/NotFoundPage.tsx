import { Button } from "@common/components";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "64px 16px" }}>
      <h1>404 - Không tìm thấy trang</h1>
      <p>Trang bạn truy cập không tồn tại.</p>
      <Button type="primary" onClick={() => navigate("/")}>
        Về trang chủ
      </Button>
    </div>
  );
};
