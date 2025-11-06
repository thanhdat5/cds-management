import { PlusOutlined } from "@ant-design/icons";
import { Button } from "@common/components";
import { DataTable } from "@common/components/data-table/DataTable";
import { PageTemplate } from "@common/components/templates";
import { Breadcrumb, Flex, Input, Pagination } from "antd";
import type { ColumnType } from "antd/es/table";
import { Link } from "react-router-dom";
import type { Currency } from "./currencyTypes";
const { Search } = Input;
export const CurrencyPage = () => {
  const columns: ColumnType<Partial<Currency>>[] = [
    {
      title: "Mã tiền tệ",
      dataIndex: "code",
      key: "code",
      width: 120,
    },
    {
      title: "Tên tiền tệ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ký hiệu tiền tệ",
      dataIndex: "symbol",
      key: "symbol",
      width: 120,
    },
    {
      title: "Tỉ giá quy đổi",
      dataIndex: "exchangeRate",
      key: "exchangeRate",
      align: "right",
      width: 150,
      render: (rate) => rate?.toLocaleString(),
    },
    {
      title: "Trạng thái",
      width: 160,
      dataIndex: "status",
      key: "status",
    },
  ];
  const dataSource: Partial<Currency>[] = [
    {
      code: "USD",
      name: "US Dollar",
      symbol: "$",
      exchangeRate: 24100,
      status: "Đang hoạt động",
    },
    {
      code: "EUR",
      name: "Euro",
      symbol: "€",
      exchangeRate: 25800,
      status: "Đang hoạt động",
    },
    {
      code: "JPY",
      name: "Japanese Yen",
      symbol: "¥",
      exchangeRate: 171,
      status: "Ngừng hoạt động",
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
              title: "Tiền tệ",
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
      <DataTable<Partial<Currency>>
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
