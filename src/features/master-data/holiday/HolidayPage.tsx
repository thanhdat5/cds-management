import { PlusOutlined } from "@ant-design/icons";
import { Button } from "@common/components";
import { DataTable } from "@common/components/data-table/DataTable";
import { PageTemplate } from "@common/components/templates";
import { Breadcrumb, Flex, Input, Pagination } from "antd";
import type { ColumnType } from "antd/es/table";
import { Link } from "react-router-dom";
import type { Holiday } from "./holidayTypes";
const { Search } = Input;
export const HolidayPage = () => {
  const columns: ColumnType<Partial<Holiday>>[] = [
    {
      title: "Mã ngày nghỉ",
      dataIndex: "code",
      key: "code",
      width: 120,
    },
    {
      title: "Tên ngày nghỉ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Loại ngày nghỉ",
      dataIndex: "type",
      key: "type",
      width: 140,
      render: (type) => type || "-",
    },
    {
      title: "Ngày dương lịch",
      dataIndex: "date",
      key: "date",
      width: 140,
      render: (date) => (date ? new Date(date).toLocaleDateString() : "-"),
    },
    {
      title: "Quốc gia",
      dataIndex: "country",
      key: "country",
      width: 120,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
    },
  ];
  const dataSource: Partial<Holiday>[] = [
    {
      code: "HOL2025-01",
      name: "Tết Dương lịch",
      type: "Lễ lớn",
      date: "2025-01-01",
      country: "Việt Nam",
      status: "Đang áp dụng",
      note: "Ngày nghỉ toàn quốc",
    },
    {
      code: "HOL2025-02",
      name: "Quốc tế Lao động",
      type: "Lễ lớn",
      date: "2025-05-01",
      country: "Việt Nam",
      status: "Đang áp dụng",
      note: "",
    },
    {
      code: "HOL2025-03",
      name: "Thanksgiving",
      type: "Lễ truyền thống",
      date: "2025-11-27",
      country: "Hoa Kỳ",
      status: "Ngừng áp dụng",
      note: "Chỉ áp dụng một số bang",
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
              title: "Ngày nghỉ",
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
      <DataTable<Partial<Holiday>>
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
