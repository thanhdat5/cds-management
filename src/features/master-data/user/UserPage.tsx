import {
  DownloadOutlined,
  PlusOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Button, DataTable } from "@common/components";
import { PageTemplate } from "@common/components/templates";
import { Breadcrumb, Flex, Input, Pagination } from "antd";
import type { ColumnType } from "antd/es/table";
import { Link } from "react-router-dom";
import type { User } from "./userTypes";
const { Search } = Input;
export const UserPage = () => {
  const columns: ColumnType<Partial<User>>[] = [
    {
      key: "userId",
      title: "Mã người dùng",
      dataIndex: "userId",
      fixed: "left",
    },
    { key: "name", title: "Tên người dùng", dataIndex: "name" },
    { key: "gender", title: "Giới tính", dataIndex: "gender" },
    { key: "phoneNumber", title: "Số điện thoại", dataIndex: "phoneNumber" },
    { key: "email", title: "Email", dataIndex: "email" },
  ];
  const dataSource: Partial<User>[] = [
    {
      userId: "ABC01",
      name: "Nguyễn Văn A",
      gender: "Nam",
      phoneNumber: "0900000000",
      email: "abc@gmail.com",
    },
    {
      userId: "ABC02",
      name: "Nguyễn Văn A",
      gender: "Nam",
      phoneNumber: "0900000000",
      email: "abc@gmail.com",
    },
    {
      userId: "ABC03",
      name: "Nguyễn Văn A",
      gender: "Nam",
      phoneNumber: "0900000000",
      email: "abc@gmail.com",
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
              title: "Quản lý người sử dụng",
            },
          ]}
        />
      }
      subHeader={
        <Flex gap={24} flex={1}>
          <Search size="large" placeholder="Tìm kiếm" />
          <Flex gap={10}>
            <Button type="primary" size="large" icon={<DownloadOutlined />}>
              Export
            </Button>
            <Button type="primary" size="large" icon={<SyncOutlined />}>
              Đồng bộ
            </Button>
            <Link to="create">
              <Button type="primary" size="large" icon={<PlusOutlined />}>
                Thêm mới
              </Button>
            </Link>
          </Flex>
        </Flex>
      }
      footer={
        <Pagination showSizeChanger total={5000} pageSize={50} align="center" />
      }
    >
      <DataTable<Partial<User>>
        columnNoHeader="STT"
        rowKey="userId"
        columns={columns}
        dataSource={dataSource}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </PageTemplate>
  );
};
