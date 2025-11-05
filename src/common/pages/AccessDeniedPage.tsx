import { Button } from "@common/components";
import { useNavigate } from "react-router-dom";

export const AccessDeniedPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "64px 16px" }}>
      <h1>403 - Access denied</h1>
      <p>Bạn không có quyền truy cập trang này.</p>
      <Button type="primary" onClick={() => navigate("/")}>
        Về trang chủ
      </Button>
    </div>
  );
};