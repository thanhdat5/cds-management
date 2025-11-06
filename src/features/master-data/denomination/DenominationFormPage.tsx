import { Button } from "@common/components";
import { PageTemplate } from "@common/components/templates";
import {
    Breadcrumb,
    Col,
    Flex,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from "antd";
import { Link } from "react-router-dom";
import type { Denomination } from "./denominationTypes";
const { TextArea } = Input;

export const DenominationFormPage = () => {
  const [form] = Form.useForm<Partial<Denomination>>();
  const handleSubmit = async (values: Partial<Denomination>) => {
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
              title: <Link to="/app/master-data/denomination">Mệnh giá</Link>,
            },
            {
              title: "Tạo mới Mệnh giá",
            },
          ]}
        />
      }
      footer={
        <Flex gap={10} justify="flex-end">
          <Link to="/app/master-data/denomination">
            <Button size="large">Hủy bỏ</Button>
          </Link>
          <Button type="primary" size="large" onClick={handleSave}>
            Lưu
          </Button>
        </Flex>
      }
    >
      <Form<Partial<Denomination>>
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{
          code: "MG001",
          name: "500,000",
          value: 500000,
          currencyCode: "VND",
          displayLabel: "500 nghìn đồng",
          status: "Đang hoạt động",
          note: "",
        }}
      >
        <Row gutter={32}>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="code"
              label="Mã mệnh giá"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="name"
              label="Tên mệnh giá"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="value"
              label="Giá trị mệnh giá"
              rules={[{ required: true }]}
            >
              <InputNumber style={{ width: "100%" }} min={0} />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item name="currencyCode" label="Đơn vị tiền tệ">
              <Select options={[{ value: "VND", label: "Việt Nam Đồng" }]} />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item name="displayLabel" label="Mệnh giá hiển thị">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item name="status" label="Trạng thái">
              <Select
                options={[
                  { value: "Đang hoạt động", label: "Đang hoạt động" },
                  { value: "Ngừng sử dụng", label: "Ngừng sử dụng" },
                ]}
              />
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
