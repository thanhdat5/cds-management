import { DataTable } from "@/common/components/data-table/DataTable";
import {
  AppstoreAddOutlined,
  ArrowRightOutlined,
  CaretDownOutlined,
  DeleteOutlined,
  DownloadOutlined,
  DownOutlined,
  EditOutlined,
  MoreOutlined,
  PlusOutlined,
  PrinterOutlined,
  ReloadOutlined,
  SearchOutlined,
  SettingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Divider,
  Dropdown,
  Flex,
  Form,
  Input,
  Pagination,
  Row,
  Select,
  Tag,
  Typography,
} from "antd";
import type { ColumnType } from "antd/es/table";
import styles from "./IssuanceBatchPage.module.scss";
import type { IssuanceBatch } from "./issuanceBatchTypes";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
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
              { key: "edit", label: "Cập nhật", icon: <ReloadOutlined /> },
              {
                key: "edit",
                label: "Gửi phê duyệt",
                icon: <ArrowRightOutlined />,
              },
              { key: "edit", label: "In", icon: <PrinterOutlined /> },
              { key: "delete", label: "Xóa", icon: <DeleteOutlined /> },
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
      id: 2325,
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
      id: 2326,
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
      id: 2327,
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
      id: 2328,
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
      id: 2329,
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
      id: 2330,
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
      id: 2331,
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
      id: 2332,
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
      id: 2333,
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
      id: 2334,
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
      id: 2335,
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
      id: 2336,
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
  const dateFormat = "DD/MM/YYYY";

  return (
    <div className={styles.inner}>
      <Flex vertical>
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
            <Link to="create">Tạo mới</Link>
          </Dropdown.Button>
        </Flex>

        <Form
          layout="vertical"
          initialValues={{
            releaseDate: dayjs("12/12/2024", dateFormat),
            dueDate: dayjs("12/12/2025", dateFormat),
            type: "INHLD",
            distributionChannel: "INHLD",
            tenor: "INHLD",
            status: "INHLD",
            httl: "INHLD",
            thm: "INHLD",
            ncctg: "INHLD",
          }}
        >
          <Flex vertical className={styles.filter}>
            <Flex align="end" gap={20} wrap>
              <Form.Item name="keyword" style={{ marginBottom: 10, flex: 1 }}>
                <Input
                  size="large"
                  placeholder="Tìm kiếm"
                  suffix={<SearchOutlined />}
                />
              </Form.Item>
              <Form.Item
                name="releaseDate"
                label="Phát hành từ ngày"
                style={{ marginBottom: 10, width: 200 }}
              >
                <DatePicker
                  format={dateFormat}
                  size="large"
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item
                name="dueDate"
                label="Phát hành đến ngày"
                style={{ marginBottom: 10, width: 200 }}
              >
                <DatePicker
                  format={dateFormat}
                  size="large"
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Button
                type="primary"
                icon={<SearchOutlined />}
                htmlType="submit"
                style={{ height: 40, marginBottom: 10 }}
              >
                Tìm kiếm
              </Button>
            </Flex>

            <Collapse
              size="small"
              items={[
                {
                  key: "1",
                  showArrow: false,
                  label: (
                    <Flex gap={4} align="center">
                      <Typography
                        style={{ whiteSpace: "nowrap", fontWeight: 500 }}
                      >
                        Bộ lọc nâng cao
                      </Typography>
                      <CaretDownOutlined style={{ fontSize: 12 }} />
                      <Divider
                        style={{
                          margin: 0,
                          width: "auto",
                          minWidth: "unset",
                          flex: 1,
                        }}
                      />
                    </Flex>
                  ),
                  children: (
                    <Row gutter={20}>
                      <Col
                        span={24}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xxl={{ span: 6 }}
                      >
                        <Form.Item name="type" label="Kiểu lãi suất">
                          <Select
                            options={[{ value: "INHLD", label: "INHLD" }]}
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        span={24}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xxl={{ span: 6 }}
                      >
                        <Form.Item
                          name="distributionChannel"
                          label="Kênh phát hành"
                        >
                          <Select
                            options={[{ value: "INHLD", label: "INHLD" }]}
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        span={24}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xxl={{ span: 6 }}
                      >
                        <Form.Item name="tenor" label="Kỳ hạn">
                          <Select
                            options={[{ value: "INHLD", label: "INHLD" }]}
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        span={24}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xxl={{ span: 6 }}
                      >
                        <Form.Item name="status" label="Trạng thái">
                          <Select
                            options={[{ value: "INHLD", label: "INHLD" }]}
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        span={24}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xxl={{ span: 6 }}
                      >
                        <Form.Item name="httl" label="Hình thức trả lãi">
                          <Select
                            options={[{ value: "INHLD", label: "INHLD" }]}
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        span={24}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xxl={{ span: 6 }}
                      >
                        <Form.Item name="thm" label="Tổng hạn mức">
                          <Select
                            options={[{ value: "INHLD", label: "INHLD" }]}
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        span={24}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xxl={{ span: 6 }}
                      >
                        <Form.Item name="ncctg" label="Nhóm chứng chỉ tiền gửi">
                          <Select
                            options={[{ value: "INHLD", label: "INHLD" }]}
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        span={24}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xxl={{ span: 6 }}
                      ></Col>
                    </Row>
                  ),
                },
              ]}
            />
          </Flex>
        </Form>
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
