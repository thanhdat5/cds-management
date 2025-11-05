import {
  Breadcrumb,
  Checkbox,
  DatePicker,
  Flex,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Tabs,
  Tree,
  Typography,
} from "antd";
import { usePopup } from "../hooks/usePopupContext";
import {
  AppstoreAddOutlined,
  BellOutlined,
  PlusOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  Button,
  DropdownButton,
  IconCard,
  NameTag,
  SectionTitle,
  Steps,
} from "../components";
const { Title } = Typography;
const { Search, TextArea } = Input;
const { RangePicker } = DatePicker;

export const TestPage = () => {
  const { openPopup } = usePopup();
  const [form] = Form.useForm();
  return (
    <Flex vertical gap={100} style={{ padding: 50 }}>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            openPopup({
              type: "confirm",
              props: {
                message: "Bạn có chắc chắc muốn xóa bản ghi này không?",
                onConfirm: () => {
                  /* handle confirm logic here if needed */
                },
                onCancel: () => {
                  /* handle cancel logic here if needed */
                },
              },
            })
          }
        >
          Confirm Popup
        </Button>
        <Button
          type="primary"
          onClick={() =>
            openPopup({
              type: "message",
              props: {
                type: "warning",
                title: "Cảnh báo",
                message:
                  "Đợt phạt hành đã phát sinh giao dịch, bạn không thể xóa.",
                onCancel: () => {
                  /* handle cancel logic here if needed */
                },
              },
            })
          }
        >
          Warning Popup
        </Button>
        <Button
          type="primary"
          onClick={() =>
            openPopup({
              type: "message",
              props: {
                type: "fail",
                title: "Đăng ký thất bại",
                message:
                  "Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ với Tổng đài để được hỗ trợ.",
                onCancel: () => {
                  /* handle cancel logic here if needed */
                },
              },
            })
          }
        >
          Fail Popup
        </Button>
        <Button
          type="primary"
          onClick={() =>
            openPopup({
              type: "message",
              props: {
                type: "success",
                title: "Đăng ký thành công",
                message:
                  "Chúng tôi đã gửi một đường dẫn kích hoạt tài khoản đến hòm thư của bạn.",
                onCancel: () => {
                  /* handle cancel logic here if needed */
                },
              },
            })
          }
        >
          Success Popup
        </Button>
        <Button
          type="primary"
          onClick={() =>
            openPopup({
              type: "loading",
              props: {
                message:
                  "Vui lòng xác thực ký số trên App mobile để hoàn thành giao dịch!",
                buttonText: "04:59",
                onButtonClick: () => {
                  /* handle button logic if needed */
                },
                onCancel: () => {
                  /* handle cancel logic if needed */
                },
              },
            })
          }
        >
          Loading Popup
        </Button>
      </Space>

      <div className="inner">
        {/* Page Header */}
        <div className="page-header">
          <h2>Tiêu đề trang</h2>
          {/* Any actions/buttons */}
        </div>
        {/* Page Body */}
        <div className="page-body">
          <Flex wrap style={{ padding: 20 }} gap={100}>
            {/* Buttons */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>Buttons</Title>
              <Flex gap={10} align="center">
                <Button type="primary" icon={<SearchOutlined />}>
                  Button
                </Button>
                <Button type="primary" size="large" icon={<SearchOutlined />}>
                  Button
                </Button>
              </Flex>

              <Flex gap={10} align="center">
                <Button icon={<SearchOutlined />}>Button</Button>
                <Button size="large" icon={<SearchOutlined />}>
                  Button
                </Button>
              </Flex>

              <Flex gap={10} align="center">
                <Button type="secondary" icon={<SearchOutlined />}>
                  Button
                </Button>
                <Button type="secondary" size="large" icon={<SearchOutlined />}>
                  Button
                </Button>
              </Flex>
            </Flex>

            {/* DropdownButton */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>DropdownButton</Title>
              <Flex gap={10} align="center">
                <DropdownButton
                  icon={<PlusOutlined />}
                  menu={{
                    items: [
                      { key: "1", label: "Item label" },
                      { key: "2", label: "Item label" },
                    ],
                  }}
                >
                  Button
                </DropdownButton>
                <DropdownButton
                  size="large"
                  icon={<PlusOutlined />}
                  menu={{
                    items: [
                      {
                        key: "1",
                        label: "Item label",
                        icon: <AppstoreAddOutlined />,
                      },
                      {
                        key: "2",
                        label: "Item label",
                        icon: <AppstoreAddOutlined />,
                      },
                    ],
                  }}
                >
                  Button
                </DropdownButton>
              </Flex>
            </Flex>

            {/* Breadcrumb */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>Breadcrumb</Title>
              <Breadcrumb
                items={[
                  {
                    title: <Link to="/">Parent 1</Link>,
                  },
                  {
                    title: <Link to="/">Parent 1-1</Link>,
                  },
                  {
                    title: <Link to="/">Parent 1-1-1</Link>,
                  },
                  {
                    title: "Active",
                  },
                ]}
              />
            </Flex>

            {/* Tabs */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>Tabs</Title>
              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    key: "1",
                    label: "Tab item",
                    children: "Content of Tab Pane 1",
                  },
                  {
                    key: "2",
                    label: "Tab item",
                    children: "Content of Tab Pane 2",
                  },
                  {
                    key: "3",
                    label: "Tab item",
                    children: "Content of Tab Pane 3",
                  },
                ]}
              />
            </Flex>

            {/* PageTitle */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>PageTitle</Title>
              <Title level={1}>Page Title</Title>
            </Flex>

            {/* SectionTitle */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>SectionTitle</Title>
              <SectionTitle>Section Title</SectionTitle>
              <SectionTitle size="large">Section Title</SectionTitle>
            </Flex>

            {/* IconCard */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>IconCard</Title>
              <IconCard icon={<BellOutlined />} badgeCount={5} />
            </Flex>

            {/* NameTag */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>NameTag</Title>
              <NameTag name="Nguyễn Văn D">D</NameTag>
            </Flex>

            {/* Steps */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>Steps</Title>
              <Steps
                current="1"
                steps={[
                  { key: "1", label: "Bước 1: Cấu hình thông tin vai trò" },
                  { key: "2", label: "Bước 2: Thiết lập người dùng" },
                  { key: "3", label: "Bước 3: Hoàn tất", disabled: true },
                ]}
              />
            </Flex>

            {/* Tree */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>Tree</Title>
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
            </Flex>

            {/* Form */}
            <Flex vertical align="start" gap={10}>
              <Title level={3}>Form</Title>
              <Form layout="vertical" form={form}>
                {/* Input */}
                <Form.Item
                  name="name1"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    suffix={<SearchOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="name2"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    suffix={<SearchOutlined />}
                    size="large"
                  />
                </Form.Item>

                {/* Search */}
                <Form.Item
                  name="name3"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <Search />
                </Form.Item>
                <Form.Item
                  name="name4"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <Search size="large" />
                </Form.Item>

                {/* TextArea */}
                <Form.Item
                  name="name5"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <TextArea />
                </Form.Item>
                <Form.Item
                  name="name6"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <TextArea size="large" />
                </Form.Item>

                {/* DatePicker */}
                <Form.Item
                  name="name7"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  name="name8"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <DatePicker size="large" />
                </Form.Item>

                {/* RangePicker */}
                <Form.Item
                  name="name9"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <RangePicker />
                </Form.Item>
                <Form.Item
                  name="name10"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <RangePicker size="large" />
                </Form.Item>

                {/* Select */}
                <Form.Item
                  name="name11"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <Select
                    allowClear
                    placeholder="Select"
                    options={[
                      { label: "male", value: "male" },
                      { label: "female", value: "female" },
                      { label: "other", value: "other" },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  name="name12"
                  label="Label"
                  rules={[{ required: true }]}
                >
                  <Select
                    size="large"
                    allowClear
                    placeholder="Select"
                    options={[
                      { label: "male", value: "male" },
                      { label: "female", value: "female" },
                      { label: "other", value: "other" },
                    ]}
                  />
                </Form.Item>

                {/* Checkbox */}
                <Form.Item
                  label="Checkbox"
                  name="name13"
                  valuePropName="checked"
                >
                  <Checkbox>Checkbox</Checkbox>
                </Form.Item>

                {/* Radio */}
                <Form.Item label="Radio" name="name14">
                  <Radio.Group>
                    <Radio value="apple"> Apple </Radio>
                    <Radio value="pear"> Pear </Radio>
                  </Radio.Group>
                </Form.Item>
              </Form>
            </Flex>
          </Flex>
        </div>

        {/* Page Footer */}
        <div className="page-footer">
          <button className="ant-btn ant-btn-default">Hủy bỏ</button>
          <button className="ant-btn ant-btn-primary">Lưu nháp</button>
          <button className="ant-btn ant-btn-primary">Lưu và duyệt</button>
        </div>
      </div>
    </Flex>
  );
};
