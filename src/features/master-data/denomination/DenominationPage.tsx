import { PlusOutlined } from "@ant-design/icons";
import { Button } from "@common/components";
import { DataTable } from "@common/components/data-table/DataTable";
import { PageTemplate } from "@common/components/templates";
import { Breadcrumb, Flex, Input, Pagination } from "antd";
import type { ColumnType } from "antd/es/table";
import { Link } from "react-router-dom";
import type { Denomination } from "./denominationTypes";
const { Search } = Input;
export const DenominationPage = () => {
  const columns: ColumnType<Partial<Denomination>>[] = [
    {
      title: "Mã mệnh giá",
      dataIndex: "code",
      key: "code",
      width: 140,
    },
    {
      title: "Tên mệnh giá",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Đơn vị tiền tệ",
      dataIndex: "currencyCode",
      key: "currencyCode",
      width: 120,
      align: "center",
    },
    {
      title: "Mệnh giá hiển thị",
      dataIndex: "displayLabel",
      key: "displayLabel",
      width: 160,
      render: (label) => label || "-",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 130,
    },
  ];
  const dataSource: Partial<Denomination>[] = [
    {
      code: "DENOM100K",
      name: "Mệnh giá 100,000",
      value: 100000,
      currencyCode: "VND",
      displayLabel: "100,000 VND",
      status: "Đang hoạt động",
      note: "Mệnh giá phổ biến",
    },
    {
      code: "DENOM50USD",
      name: "Mệnh giá 50 USD",
      value: 50,
      currencyCode: "USD",
      displayLabel: "50 USD",
      status: "Ngừng sử dụng",
      note: "Chỉ dùng cho giao dịch quốc tế",
    },
    {
      code: "DENOM10EUR",
      name: "Mệnh giá 10 Euro",
      value: 10,
      currencyCode: "EUR",
      displayLabel: "10 EUR",
      status: "Đang hoạt động",
      note: "",
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
              title: "Mệnh giá",
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
      <DataTable<Partial<Denomination>>
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
