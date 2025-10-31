import { MasterDataPageInner } from "@/features/master-data/components/page-inner/PageInner";
import { Link } from "react-router-dom";
export const PermissionFormPage = () => {
  return (
    <MasterDataPageInner
      breadcrumbItems={[
        {
          title: <Link to="/app/master-data/permission">Phân quyền</Link>,
        },
        {
          title: "Tạo mới Phân quyền",
        },
      ]}
    >
      PermissionFormPage
    </MasterDataPageInner>
  );
};
