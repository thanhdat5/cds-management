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
import type { Currency } from "./currencyTypes";
const { TextArea } = Input;
export const CurrencyFormPage = () => {
  const [form] = Form.useForm<Partial<Currency>>();
  const handleSubmit = async (values: Partial<Currency>) => {
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
              title: <Link to="/app/master-data/currency">Tiền tệ</Link>,
            },
            {
              title: "Tạo mới Tiền tệ",
            },
          ]}
        />
      }
      footer={
        <Flex gap={10} justify="flex-end">
          <Link to="/app/master-data/currency">
            <Button size="large">Hủy bỏ</Button>
          </Link>
          <Button type="primary" size="large" onClick={handleSave}>
            Lưu
          </Button>
        </Flex>
      }
    >
      <Form<Partial<Currency>>
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{
          code: "USD",
          name: "Đô la Mỹ",
          symbol: "$",
          exchangeRate: 26500,
          decimalDigits: 3,
          status: "Đang hoạt động",
          isAccountingCurrency: "Có",
          note: "",
        }}
      >
        <Row gutter={32}>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="code"
              label="Mã tiền tệ"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="name"
              label="Tên tiền tệ"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="symbol"
              label="Ký hiệu tiền tệ"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item name="decimalDigits" label="Số chữ số thập phân">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item name="exchangeRate" label="Tỉ giá quy đổi">
              <InputNumber<number>
                style={{ width: "100%" }}
                min={0}
                formatter={(value) =>
                  value !== undefined && value !== null
                    ? value.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : ""
                }
                parser={(value) =>
                  value?.replaceAll(/\$\s?|(,*)/g, "") as unknown as number
                }
              />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item name="status" label="Trạng thái">
              <Select
                options={[
                  { value: "Đang hoạt động", label: "Đang hoạt động" },
                  { value: "Ngừng hoạt động", label: "Ngừng hoạt động" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="isAccountingCurrency"
              label="Là đồng tiền hạch toán"
            >
              <Select
                options={[
                  { value: "Có", label: "Có" },
                  { value: "Không", label: "Không" },
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
