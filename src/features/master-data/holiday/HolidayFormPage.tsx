import { Button } from "@common/components";
import { PageTemplate } from "@common/components/templates";
import {
    Breadcrumb,
    Col,
    DatePicker,
    Flex,
    Form,
    Input,
    Row,
    Select,
} from "antd";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import type { Holiday } from "./holidayTypes";
const { TextArea } = Input;
export const HolidayFormPage = () => {
  const [form] = Form.useForm<Partial<Holiday>>();
  const handleSubmit = async (values: Partial<Holiday>) => {
    console.log(values);
  };
  const handleSave = () => {
    form.submit();
  };

  const holidayTypeOptions = [
    { value: "Lễ lớn", label: "Lễ lớn" },
    { value: "Lễ truyền thống", label: "Lễ truyền thống" },
    { value: "Lễ tôn giáo", label: "Lễ tôn giáo" },
  ];

  const countryOptions = [
    { value: "Việt Nam", label: "Việt Nam" },
    { value: "Hoa Kỳ", label: "Hoa Kỳ" },
    { value: "Nhật Bản", label: "Nhật Bản" },
  ];

  const statusOptions = [
    { value: "Đang áp dụng", label: "Đang áp dụng" },
    { value: "Ngừng áp dụng", label: "Ngừng áp dụng" },
  ];
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
              title: <Link to="/app/master-data/holiday">Ngày nghỉ</Link>,
            },
            {
              title: "Tạo mới Ngày nghỉ",
            },
          ]}
        />
      }
      footer={
        <Flex gap={10} justify="flex-end">
          <Link to="/app/master-data/holiday">
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
          code: "HOL2025-01",
          name: "Tết Dương lịch",
          type: "Lễ lớn",
          date: dayjs("2025-01-01", "YYYY-MM-DD"),
          country: "Việt Nam",
          status: "Đang áp dụng",
          note: "",
        }}
      >
        <Row gutter={32}>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="code"
              label="Mã ngày nghỉ"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="name"
              label="Tên ngày nghỉ"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="type"
              label="Loại ngày nghỉ"
              rules={[{ required: true }]}
            >
              <Select options={holidayTypeOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="date"
              label="Ngày dương lịch"
              rules={[{ required: true }]}
            >
              <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="country"
              label="Quốc gia"
              rules={[{ required: true }]}
            >
              <Select options={countryOptions} />
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
            <Form.Item name="note" label="Ghi chú">
              <TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </PageTemplate>
  );
};
