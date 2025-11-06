import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Button } from "@common/components";
import { PageTemplate } from "@common/components/templates";
import {
  Avatar,
  Breadcrumb,
  Checkbox,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Tabs,
  Tree,
  Typography,
  type TreeProps,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./UserFormPage.module.scss";
import type { User } from "./userTypes";
const { Title } = Typography;
const { Search } = Input;
export const UserFormPage = () => {
  const [form] = Form.useForm<Partial<User>>();
  const [activeTab, setActiveTab] = useState("1");
  const [userInfo, setUserInfo] = useState<Partial<User>>();

  const treeData: TreeProps["treeData"] = [
    { key: "1", title: "Tất cả" },
    {
      key: "2",
      title: "Quản lý phát hành sơ cấp",
      children: [
        { key: "2-1", title: "Xem" },
        { key: "2-2", title: "Thêm" },
        { key: "2-3", title: "Sửa" },
        { key: "2-4", title: "Xóa" },
      ],
    },
    { key: "3", title: "Quản lý nhóm người dùng" },
    { key: "4", title: "Quản lý lãi suất" },
    { key: "5", title: "Quản lý lịch trả lãi" },
    { key: "6", title: "Quản lý khách hàng" },
  ];

  const handleNext = () => {
    form.submit();
  };
  const handleSubmit = async (values: Partial<User>) => {
    setUserInfo(values);
    setActiveTab("2");
  };
  const handleSave = () => {};
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
              title: <Link to="/app/master-data/user">Người sử dụng</Link>,
            },
            {
              title: "Tạo mới Người sử dụng",
            },
          ]}
        />
      }
      footer={
        <Flex gap={10} justify="flex-end">
          <Link to="/app/master-data/user">
            <Button size="large">Hủy</Button>
          </Link>
          {activeTab === "1" ? (
            <Button size="large" type="primary" onClick={handleNext}>
              Tiếp tục
            </Button>
          ) : (
            <Button size="large" type="primary" onClick={handleSave}>
              Lưu
            </Button>
          )}
        </Flex>
      }
      mainHeaderStyle={{ borderWidth: 1 }}
      headerStyle={{ paddingBottom: 0 }}
      bodyStyle={{ paddingTop: 0 }}
    >
      <Tabs
        activeKey={activeTab}
        onChange={(tab) => setActiveTab(tab)}
        items={[
          {
            key: "1",
            label: "Thông tin người dùng",
            children: (
              <Form form={form} onFinish={handleSubmit} layout="vertical">
                <Row gutter={32}>
                  <Col span={24} xl={{ span: 6 }}>
                    <Flex
                      vertical
                      gap={13}
                      align="center"
                      justify="center"
                      style={{ marginBottom: 30 }}
                    >
                      <Avatar src="/avatar.svg" size={196}></Avatar>
                      <Button type="primary">Tải ảnh lên</Button>
                    </Flex>
                  </Col>
                  <Col span={24} xl={{ span: 9 }} md={{ span: 12 }}>
                    <Form.Item
                      name="name"
                      label="Họ và tên"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Nhập họ và tên" />
                    </Form.Item>

                    <Form.Item name="dateOfBirth" label="Ngày sinh">
                      <DatePicker style={{ width: "100%" }} placeholder="" />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[{ required: true }, { type: "email" }]}
                      style={{ marginBottom: 10 }}
                    >
                      <Input placeholder="Nhập email" type="email" />
                    </Form.Item>

                    <Form.Item
                      name="setAsUsername"
                      valuePropName="checked"
                      label={null}
                    >
                      <Checkbox>Đặt làm email đăng nhập</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={24} xl={{ span: 9 }} md={{ span: 12 }}>
                    <Form.Item name="gender" label="Giới tính">
                      <Select
                        options={[
                          { value: "male", label: "Nam" },
                          { value: "female", label: "Nữ" },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item name="dateOfBirth" label="Số điện thoại">
                      <Input placeholder="Nhập số điện thoại" />
                    </Form.Item>

                    <Form.Item name="departmentId" label="Đơn vị">
                      <Select options={[]} />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            ),
          },
          {
            key: "2",
            label: "Phân quyền",
            children: (
              <Row gutter={[32, 32]}>
                <Col xxl={11} md={{ span: 10 }} xs={{ span: 24 }}>
                  <Title level={4}>Quyền chưa gán (4)</Title>
                  <Flex vertical gap={30}>
                    <Search placeholder="Nhập tên quyền" />
                    <Tree
                      checkable
                      treeData={treeData}
                      defaultExpandedKeys={["2"]}
                      defaultCheckedKeys={[
                        "1",
                        "2",
                        "2-1",
                        "2-2",
                        "2-3",
                        "2-4",
                      ]}
                    />
                  </Flex>
                </Col>
                <Col xxl={2} md={{ span: 4 }} xs={{ span: 24 }}>
                  <Flex
                    align="center"
                    justify="center"
                    gap={16}
                    className={styles.controls}
                  >
                    <Button style={{ width: "100%" }} type="secondary">
                      <DoubleLeftOutlined />
                    </Button>
                    <Button style={{ width: "100%" }} type="secondary">
                      <DoubleRightOutlined />
                    </Button>
                  </Flex>
                </Col>
                <Col xxl={11} md={{ span: 10 }} xs={{ span: 24 }}>
                  <Title level={4}>Quyền đã gán (8)</Title>
                  <Flex vertical gap={30}>
                    <Search placeholder="Nhập tên quyền" />
                    <Tree
                      checkable
                      treeData={treeData}
                      defaultExpandedKeys={["2"]}
                    />
                  </Flex>
                </Col>
              </Row>
            ),
            disabled: !userInfo,
          },
        ]}
      />
    </PageTemplate>
  );
};
