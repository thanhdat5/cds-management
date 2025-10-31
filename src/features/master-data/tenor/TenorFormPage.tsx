import { MasterDataPageInner } from "@/features/master-data/components/page-inner/PageInner";
import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { Link } from "react-router-dom";
import { PageFooter } from "../components/page-footer/PageFooter";
import type { Tenor } from "./tenorTypes";
const { TextArea } = Input;
export const TenorFormPage = () => {
  const [form] = Form.useForm<Partial<Tenor>>();
  const handleSubmit = async (values: Partial<Tenor>) => {
    console.log(values);
  };
  const handleSave = () => {
    form.submit();
  };
  return (
    <MasterDataPageInner
      breadcrumbItems={[
        {
          title: <Link to="/app/master-data/tenor">Kỳ hạn</Link>,
        },
        {
          title: "Tạo mới Kỳ hạn",
        },
      ]}
      footer={
        <PageFooter>
          <Button variant="filled" color="primary">
            <Link to="/app/master-data/user">Hủy</Link>
          </Button>
          <Button type="primary" onClick={handleSave}>
            Lưu
          </Button>
        </PageFooter>
      }
    >
      <Form<Partial<Tenor>>
        form={form}
        initialValues={{
          tenorId: "CI00001",
          tenorName: "3T",
          tenorUnit: "Tháng",
          tenorValue: 3,
          days: 90,
        }}
        onFinish={handleSubmit}
        layout="vertical"
        style={{ marginTop: 36, paddingRight: 50 }}
      >
        <Row gutter={40}>
          <Col span={24} md={{ span: 11 }}>
            <Form.Item
              name="tenorId"
              label="Mã kỳ hạn"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 11 }}>
            <Form.Item
              name="tenorName"
              label="Tên Kỳ hạn"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24} md={{ span: 11 }}>
            <Form.Item
              name="tenorUnit"
              label="Đơn vị kỳ hạn"
              rules={[{ required: true }]}
            >
              <Select
                options={[
                  { value: "Tuần", label: "Tuần" },
                  { value: "Tháng", label: "Tháng" },
                  { value: "Năm", label: "Năm" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 11 }}>
            <Form.Item name="tenorValue" label="Giá trị kỳ hạn">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 11 }}>
            <Form.Item name="days" label="Số ngày quy đổi">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 22 }}>
            <Form.Item name="note" label="Ghi chú">
              <TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </MasterDataPageInner>
  );
};
