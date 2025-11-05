import { DataTable } from "@common/components";
import { Pagination } from "antd";
import type { ColumnType } from "antd/es/table";
import { PageHeader } from "../../../templates/page-header/PageHeader";
import { MasterDataPageInner } from "../../../templates/page-inner/PageInner";
import type { User } from "./userTypes";
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
    <MasterDataPageInner
      breadcrumbItems={[
        {
          title: "Người sử dụng",
        },
      ]}
      header={
        <PageHeader
          showAddButton
          showSearch
          keyword=""
          onKeywordChanged={() => {}}
          onExport={() => {}}
          onSync={() => {}}
        />
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
    </MasterDataPageInner>
  );
};
