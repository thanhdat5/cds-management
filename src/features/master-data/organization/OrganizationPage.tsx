import { PlusOutlined } from "@ant-design/icons";
import { Button } from "@common/components";
import { DataTable } from "@common/components/data-table/DataTable";
import { PageTemplate } from "@common/components/templates";
import { Breadcrumb, Flex, Input, Pagination } from "antd";
import type { ColumnType } from "antd/es/table";
import { Link } from "react-router-dom";
import type { Organization } from "./organizationTypes";
const { Search } = Input;
export const OrganizationPage = () => {
  const columns: ColumnType<Partial<Organization>>[] = [
    { title: "Mã đơn vị", dataIndex: "code", key: "code", width: 120 },
    { title: "Tên đơn vị", dataIndex: "name", key: "name", minWidth: 160 },
    {
      title: "Tên viết tắt",
      dataIndex: "shortName",
      key: "shortName",
      width: 120,
    },
    { title: "Cấp đơn vị", dataIndex: "level", key: "level", width: 100 },
    { title: "Địa chỉ", dataIndex: "address", key: "address", minWidth: 220 },
  ];
  const dataSource: Partial<Organization>[] = [
    {
      code: "DV001",
      name: "Công ty TNHH ABC",
      shortName: "ABC",
      level: "Trụ sở chính",
      parent: "",
      type: "Doanh nghiệp",
      phone: "0123456789",
      email: "info@abc.com",
      taxCode: "0301234567",
      status: "Hoạt động",
      address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
    },
    {
      code: "DV002",
      name: "Chi nhánh Hà Nội",
      shortName: "CNHN",
      level: "Chi nhánh",
      parent: "DV001",
      type: "Doanh nghiệp",
      phone: "0987654321",
      email: "hanoi@abc.com",
      taxCode: "0107654321",
      status: "Hoạt động",
      address: "456 Đường Trần Duy Hưng, Cầu Giấy, Hà Nội",
    },
    {
      code: "DV003",
      name: "Phòng Kế toán",
      shortName: "KT",
      level: "Phòng ban",
      parent: "DV001",
      type: "Phòng ban",
      phone: "0234567890",
      email: "ketoan@abc.com",
      taxCode: "",
      status: "Ngừng hoạt động",
      address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
    },
  ];

  return (
    <PageTemplate
      stickyHeader
      stickyFooter
      bodyStyle={{ paddingTop: 16 }}
      header={
        <Breadcrumb
          items={[
            {
              title: <Link to="/app/master-data">Danh mục</Link>,
            },
            {
              title: "Đơn vị",
            },
          ]}
        />
      }
      subHeader={
        <Flex gap={24} flex={1}>
          <Search size="large" placeholder="Tìm kiếm" />
          <Link to="create">
            <Button type="primary" size="large" icon={<PlusOutlined />}>
              Thêm mới
            </Button>
          </Link>
        </Flex>
      }
      footer={
        <Pagination showSizeChanger total={5000} pageSize={50} align="center" />
      }
    >
      <DataTable<Partial<Organization>>
        columnNoHeader="STT"
        rowKey="code"
        columns={columns}
        dataSource={dataSource}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </PageTemplate>
  );
};
