import { SyncOutlined } from "@ant-design/icons";
import { Button, DataTable, SectionTitle, Steps } from "@common/components";
import { PageTemplate } from "@common/components/templates";
import {
  Breadcrumb,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Tree,
  Typography,
} from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./PermissionFormPage.module.scss";
const { Search } = Input;
export const PermissionFormPage = () => {
  const [step, setStep] = useState(1);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const navigate = useNavigate();
  const handleSave = () => {
    form.submit();
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleSubmit = () => {
    navigate("/app/master-data/permission");
  };
  return (
    <PageTemplate
      stickyHeader
      stickyFooter
      footerShadow
      header={
        <Breadcrumb
          items={[
            {
              title: <Link to="/app/master-data">Danh mục</Link>,
            },
            {
              title: <Link to="/app/master-data/permission">Phân quyền</Link>,
            },
            {
              title: "Tạo mới Phân quyền",
            },
          ]}
        />
      }
      subHeader={
        <Steps
          current={step.toString()}
          steps={[
            { key: "1", label: "Bước 1: Cấu hình thông tin vai trò" },
            { key: "2", label: "Bước 2: Thiết lập người dùng" },
          ]}
        />
      }
      footer={
        <Flex gap={10} justify="flex-end">
          <Link to="/app/master-data/permission">
            <Button size="large">Hủy</Button>
          </Link>
          <Button size="large" onClick={handleSave}>
            Lưu thông tin
          </Button>
          <Button size="large" type="primary" onClick={handleSave}>
            Lưu và Đóng
          </Button>
        </Flex>
      }
    >
      <div className={styles.form}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleNext}
          style={{ display: step == 1 ? "block" : "none" }}
        >
          <Row gutter={24}>
            <Col span={24} xl={{ span: 12 }}>
              <Form.Item
                name="code"
                label="Mã vai trò"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} xl={{ span: 12 }}>
              <Form.Item
                name="name"
                label="Tên vai trò"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nhập tên vai trò" />
              </Form.Item>
            </Col>
            <Col span={24} xl={{ span: 24 }}>
              <Form.Item label="Quyền hạn vai trò:">
                <Tree
                  checkable
                  defaultExpandedKeys={["0-0", "0-0-0"]}
                  defaultCheckedKeys={[
                    "0-0-0-0",
                    "0-0-0-1",
                    "0-0-0-2",
                    "0-0-0-3",
                  ]}
                  treeData={[
                    {
                      title: "Tất cả",
                      key: "0-0",
                      children: [
                        {
                          title: "Quản lý phát hành sơ cấp",
                          key: "0-0-0",
                          children: [
                            { title: "Xem", key: "0-0-0-0" },
                            { title: "Thêm", key: "0-0-0-1" },
                            { title: "Sửa", key: "0-0-0-2" },
                            { title: "Xóa", key: "0-0-0-3" },
                          ],
                        },
                        {
                          title: "Quản lý nhóm người dùng",
                          key: "0-0-1",
                        },
                        {
                          title: "Quản lý lãi suất",
                          key: "0-0-2",
                        },
                        {
                          title: "Quản lý lịch trả lãi",
                          key: "0-0-3",
                          children: [
                            { title: "0-0-3-0", key: "0-0-3-0" },
                            { title: "0-0-3-1", key: "0-0-3-1" },
                            { title: "0-0-3-2", key: "0-0-3-2" },
                          ],
                        },
                        {
                          title: "Quản lý khách hàng",
                          key: "0-0-4",
                          children: [
                            { title: "0-0-4-0", key: "0-0-4-0" },
                            { title: "0-0-4-1", key: "0-0-4-1" },
                            { title: "0-0-4-2", key: "0-0-4-2" },
                          ],
                        },
                      ],
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <Form
          form={form2}
          layout="vertical"
          onFinish={handleSubmit}
          style={{ display: step == 2 ? "block" : "none" }}
        >
          <Flex wrap gap={16}>
            <Form.Item style={{ flex: 1 }}>
              <Search size="large" placeholder="Tìm kiếm nhân sự" />
            </Form.Item>

            <Form.Item>
              <Select size="large" options={[]} placeholder="Thành viên" />
            </Form.Item>

            <Form.Item>
              <Select size="large" options={[]} placeholder="Quyền hạn" />
            </Form.Item>

            <Button size="large" icon={<SyncOutlined />}>
              Đặt lại bộ lọc
            </Button>
          </Flex>

          <Row gutter={[64, 32]}>
            <Col
              span={24}
              md={12}
              style={{ borderRight: "1px solid var(--cds-color-border)" }}
            >
              <Flex vertical gap={16}>
                <SectionTitle>
                  <Flex align="center" gap={20}>
                    Danh sách nhân sự
                    <Typography
                      style={{
                        fontSize: 13,
                        color: "var(--cds-color-primary)",
                      }}
                    >
                      Đã chọn: 2
                    </Typography>
                  </Flex>
                </SectionTitle>

                <DataTable<{ id: string; name: string }>
                  rowKey="id"
                  columns={[
                    { key: "id", dataIndex: "id", title: "STT", width: 60 },
                    { key: "name", dataIndex: "name", title: "Tên nhân sự" },
                  ]}
                  dataSource={[
                    { id: "01", name: "Nguyễn Văn D" },
                    { id: "02", name: "Nguyễn Văn D" },
                    { id: "03", name: "Nguyễn Văn D" },
                    { id: "04", name: "Nguyễn Văn D" },
                    { id: "05", name: "Nguyễn Văn D" },
                  ]}
                  rowSelection={{ type: "checkbox" }}
                />
              </Flex>
            </Col>

            <Col span={24} md={12}>
              <Flex vertical gap={16}>
                <SectionTitle>Danh sách nhân sự đã chọn</SectionTitle>
                <DataTable<{ id: string; name: string }>
                  rowKey="id"
                  columns={[
                    { key: "id", dataIndex: "id", title: "STT", width: 60 },
                    { key: "name", dataIndex: "name", title: "Tên nhân sự" },
                  ]}
                  dataSource={[
                    { id: "01", name: "Nguyễn Văn D" },
                    { id: "02", name: "Nguyễn Văn D" },
                  ]}
                />
              </Flex>
            </Col>
          </Row>
        </Form>
      </div>
    </PageTemplate>
  );
};
