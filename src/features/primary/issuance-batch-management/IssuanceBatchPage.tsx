import { DataTable } from "@/common/components/data-table/DataTable";
import {
  AppstoreAddOutlined,
  DownloadOutlined,
  DownOutlined,
  EditOutlined,
  MoreOutlined,
  PlusOutlined,
  SettingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Flex, Pagination, Tag } from "antd";
import type { ColumnType } from "antd/es/table";
import styles from "./IssuanceBatchPage.module.scss";
import type { IssuanceBatch } from "./issuanceBatchTypes";
const formatCurrency = (value?: number) => {
  if (value == null) return "";
  return new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
export const IssuanceBatchPage = () => {
  const columns: ColumnType<Partial<IssuanceBatch>>[] = [
    {
      key: "id",
      title: "Mã kỳ hạn",
      dataIndex: "id",
      fixed: "left",
    },
    {
      key: "name",
      title: "Tên CD",
      dataIndex: "name",
      fixed: "left",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => (a.name?.length ?? 0) - (b.name?.length ?? 0),
      sortDirections: ["descend"],
    },
    {
      key: "distributionChannel",
      title: "Kênh phát hành",
      dataIndex: "distributionChannel",
    },
    { key: "tenor", title: "Kỳ hạn", dataIndex: "tenor" },
    { key: "releaseDate", title: "Ngày phát hành", dataIndex: "releaseDate" },
    { key: "dueDate", title: "Ngày đáo hạn", dataIndex: "dueDate" },
    {
      key: "interestRate",
      title: "Lãi suất/năm",
      dataIndex: "interestRate",
      render: (value: number) => `${value}%`,
    },
    {
      key: "value",
      title: "Mệnh giá",
      dataIndex: "value",
      render: (value: number) => formatCurrency(value),
    },
    {
      key: "paymentMethod",
      title: "HÌnh thức trả lãi",
      dataIndex: "paymentMethod",
    },
    {
      key: "status",
      title: "Trạng thái",
      dataIndex: "status",
      align: "center",
      render: (value) => {
        let color = "";
        switch (value) {
          case "INAU":
            color = "#8BE0FF7A";
            break;
          case "CANCEL":
            color = "#FF383C24";
            break;
          case "CLOS":
            color = "#A5A6F6";
            break;
          case "IHLD":
            color = "#FEBC2F";
            break;
          case "HIS":
            color = "#A6A1AB";
            break;
          case "AUTH":
            color = "#00CE6B99";
            break;
          default:
            color = "#8BE0FF7A";
            break;
        }
        return (
          <Tag color={color} style={{ color: "#024FF0", fontWeight: 500 }}>
            {value}
          </Tag>
        );
      },
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
  const dataSource: Partial<IssuanceBatch>[] = [
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "INAU",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "CANCEL",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "CLOS",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "IHLD",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "HIS",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "AUTH",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "INAU",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "INAU",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "INAU",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "INAU",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "INAU",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "INAU",
    },
    {
      id: 2324,
      name: "CD001",
      distributionChannel: "Trực tiếp",
      tenor: "12T",
      releaseDate: "06/09/2025",
      dueDate: "06/09/2026",
      interestRate: 5,
      value: 150000000,
      paymentMethod: "",
      status: "INAU",
    },
  ];

  return (
    <div className={styles.inner}>
      <Flex
        align="center"
        justify="space-between"
        gap={20}
        className={styles.header}
      >
        <h2>Quản lý lô phát hành</h2>
        <Dropdown.Button
          type="primary"
          icon={<DownOutlined />}
          menu={{
            items: [
              {
                key: "m-1",
                label: "Tạo mới mẫu mặc định",
                icon: <AppstoreAddOutlined />,
              },
              { key: "m-2", label: "Tạo mới tự do", icon: <EditOutlined /> },
              { key: "m-3", label: "Tải lên", icon: <UploadOutlined /> },
              { key: "m-4", label: "Tải xuống", icon: <DownloadOutlined /> },
            ],
          }}
        >
          <PlusOutlined />
          Tạo mới
        </Dropdown.Button>
      </Flex>

      <div className={styles.body}>
        <DataTable<Partial<IssuanceBatch>>
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
          rowSelection={{ type: "checkbox" }}
        />
      </div>
      <div className={styles.footer}>
        <Pagination showSizeChanger total={5000} pageSize={50} align="center" />
      </div>
    </div>
  );
};
