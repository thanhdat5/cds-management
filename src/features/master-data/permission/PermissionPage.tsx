import { DataTable } from "@common/components";
import {
  DownOutlined,
  MoreOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Flex, Pagination, Tree } from "antd";
import type { ColumnType } from "antd/es/table";
import { MasterDataPageInner } from "../../../templates/page-inner/PageInner";
import { PageHeader } from "../../../templates/page-header/PageHeader";
import type { Permission, PermissionDetail } from "./permissionTypes";
export const PermissionPage = () => {
  const columns: ColumnType<Partial<Permission>>[] = [
    {
      key: "permissionId",
      title: "Mã vai trò",
      dataIndex: "permissionId",
      fixed: "left",
    },
    {
      key: "permissionName",
      title: "Tên vai trò",
      dataIndex: "permissionName",
    },
    {
      key: "permissionDetails",
      title: "Quyền hạn",
      dataIndex: "permissionDetails",
      width: 400,
      render: (value: PermissionDetail[], record, index) => (
        <Tree
          showIcon
          selectable={false}
          defaultExpandAll={index === 0}
          switcherIcon={<DownOutlined />}
          treeData={value.map((item, itemIndex) => ({
            title: item.moduleName,
            key: `${index}_${record.permissionId}_${itemIndex}`,
            style: {
              fontWeight: "bold",
            },
            children: item.actions?.map((action, actionIndex) => ({
              title: action,
              key: `${index}_${record.permissionId}_${itemIndex}_${actionIndex}`,
              icon: "●",
            })),
          }))}
        />
      ),
    },
    {
      key: "members",
      title: "Thành viên",
      dataIndex: "members",
      width: 400,
      render: (value: string[]) => (
        <Flex style={{ rowGap: 10, columnGap: 3 }} wrap>
          {value.map((name, index) => {
            const initial =
              name.trim().split(" ").pop()?.charAt(0).toUpperCase() || "";
            return (
              <Flex align="center" key={name} gap={5}>
                <Avatar
                  size={20}
                  style={{ backgroundColor: "#d81b60", fontSize: 12 }}
                >
                  {initial}
                </Avatar>
                {index === value.length - 1 ? name : <span>{name} ,</span>}
              </Flex>
            );
          })}
        </Flex>
      ),
    },
    {
      key: "action",
      title: <SettingOutlined style={{ fontSize: "20px" }} />,
      dataIndex: "permissionId",
      fixed: "right",
      align: "center",
      width: 63,
      className: "padding-0 with-bg",
      render: () => (
        <Dropdown
          menu={{
            items: [
              { key: "edit", label: "Chỉnh sửa" },
              { key: "delete", label: "Xóa" },
            ],
          }}
          trigger={["click"]}
        >
          <Button
            type="text"
            icon={<MoreOutlined />}
            style={{ width: "100%", fontSize: "20px" }}
          />
        </Dropdown>
      ),
    },
  ];
  const dataSource: Partial<Permission>[] = [
    {
      permissionId: "ABC01",
      permissionName: "Admin",
      permissionDetails: [
        {
          moduleName: "Quản lý danh mục",
          actions: ["Truy cập danh mục", "Sửa danh mục", "Xóa danh mục"],
        },
        {
          moduleName: "Quản lý cấu hình",
          actions: ["Thêm", "Sửa", "Xóa", "Export"],
        },
      ],
      members: [
        "Nguyễn Văn D",
        "Nguyễn Văn A",
        "Trần Văn B",
        "Lê Văn X",
        "Võ Thị G",
        "Lữ Thị T",
      ],
    },
    {
      permissionId: "ABC02",
      permissionName: "Member",
      permissionDetails: [
        {
          moduleName: "Quản lý danh mục",
          actions: ["Truy cập danh mục", "Sửa danh mục", "Xóa danh mục"],
        },
        {
          moduleName: "Quản lý sơ cấp",
          actions: ["Thêm", "Sửa", "Xóa", "Export"],
        },
        {
          moduleName: "Quản lý thứ cấp",
          actions: ["Thêm", "Sửa", "Xóa", "Export"],
        },
      ],
      members: [
        "Nguyễn Văn D",
        "Nguyễn Văn A",
        "Trần Văn B",
        "Lê Văn X",
        "Võ Thị G",
        "Lữ Thị T",
      ],
    },
    {
      permissionId: "ABC03",
      permissionName: "Vai trò 1",
      permissionDetails: [
        {
          moduleName: "Quản lý danh mục",
          actions: ["Truy cập danh mục", "Sửa danh mục", "Xóa danh mục"],
        },
        {
          moduleName: "Quản lý cấu hình",
          actions: ["Thêm", "Sửa", "Xóa", "Export"],
        },
      ],
      members: [
        "Nguyễn Văn D",
        "Nguyễn Văn A",
        "Trần Văn B",
        "Lê Văn X",
        "Võ Thị G",
        "Lữ Thị T",
      ],
    },
    {
      permissionId: "ABC04",
      permissionName: "Vai trò 2",
      permissionDetails: [
        {
          moduleName: "Quản lý danh mục",
          actions: ["Truy cập danh mục", "Sửa danh mục", "Xóa danh mục"],
        },
        {
          moduleName: "Quản lý sơ cấp",
          actions: ["Thêm", "Sửa", "Xóa", "Export"],
        },
        {
          moduleName: "Quản lý thứ cấp",
          actions: ["Thêm", "Sửa", "Xóa", "Export"],
        },
      ],
      members: [
        "Nguyễn Văn D",
        "Nguyễn Văn A",
        "Trần Văn B",
        "Lê Văn X",
        "Võ Thị G",
        "Lữ Thị T",
      ],
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
        />
      }
      footer={
        <Pagination showSizeChanger total={5000} pageSize={50} align="center" />
      }
    >
      <DataTable<Partial<Permission>>
        rowKey="permissionId"
        columns={columns}
        dataSource={dataSource}
        rowSelection={{ type: "checkbox" }}
        className="ant-vertical-top"
      />
    </MasterDataPageInner>
  );
};
