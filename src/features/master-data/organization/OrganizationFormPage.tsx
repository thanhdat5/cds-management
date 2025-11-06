import { Button } from "@common/components";
import { PageTemplate } from "@common/components/templates";
import { Breadcrumb, Col, Flex, Form, Input, Row, Select } from "antd";
import { Link } from "react-router-dom";
import type { Organization } from "./organizationTypes";
const { TextArea } = Input;
export const OrganizationFormPage = () => {
  const [form] = Form.useForm<Partial<Organization>>();
  const levelOptions = [
    { value: "Trụ sở chính", label: "Trụ sở chính" },
    { value: "Chi nhánh", label: "Chi nhánh" },
    { value: "Phòng ban", label: "Phòng ban" },
  ];

  const parentOptions = [
    { value: "", label: "Không có" },
    { value: "DV001", label: "Công ty TNHH ABC" },
    { value: "DV002", label: "Chi nhánh Hà Nội" },
  ];

  const typeOptions = [
    { value: "Doanh nghiệp", label: "Doanh nghiệp" },
    { value: "Phòng ban", label: "Phòng ban" },
  ];

  const statusOptions = [
    { value: "Hoạt động", label: "Hoạt động" },
    { value: "Ngừng hoạt động", label: "Ngừng hoạt động" },
  ];
  const handleSubmit = async (values: Partial<Organization>) => {
    console.log(values);
  };
  const handleSave = () => {
    form.submit();
  };
  return (
    <PageTemplate
      stickyHeader
      stickyFooter
      footerShadow
      mainHeaderStyle={{ borderWidth: 1 }}
      bodyStyle={{ paddingTop: 6 }}
      header={
        <Breadcrumb
          items={[
            {
              title: <Link to="/app/master-data">Danh mục</Link>,
            },
            {
              title: <Link to="/app/master-data/organization">Đơn vị</Link>,
            },
            {
              title: "Tạo mới Đơn vị",
            },
          ]}
        />
      }
      footer={
        <Flex gap={10} justify="flex-end">
          <Link to="/app/master-data/organization">
            <Button size="large">Hủy bỏ</Button>
          </Link>
          <Button type="primary" size="large" onClick={handleSave}>
            Lưu
          </Button>
        </Flex>
      }
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{
          code: "DV001",
          name: "Công ty TNHH ABC",
          shortName: "ABC",
          level: "Trụ sở chính",
          parent: "DV001",
          type: "Doanh nghiệp",
          phone: "0123456789",
          email: "info@abc.com",
          taxCode: "0301234567",
          status: "Hoạt động",
          address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
        }}
      >
        <Row gutter={32}>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="code"
              label="Mã đơn vị"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="name"
              label="Tên đơn vị"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="shortName"
              label="Tên viết tắt"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="level"
              label="Cấp đơn vị"
              rules={[{ required: true }]}
            >
              <Select options={levelOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="parent"
              label="Đơn vị cha"
              rules={[{ required: true }]}
            >
              <Select options={parentOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="type"
              label="Loại đơn vị"
              rules={[{ required: true }]}
            >
              <Select options={typeOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item name="phone" label="Điện thoại">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item name="email" label="Email">
              <Input type="email" />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item name="taxCode" label="MST">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="status"
              label="Trạng thái"
              rules={[{ required: true }]}
            >
              <Select options={statusOptions} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="address" label="Địa chỉ">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="note" label="Ghi chú">
              <TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </PageTemplate>
  );
};
