import { SectionTitle, Steps } from "@common/components";
import { PageFooter } from "@templates/page-footer/PageFooter";
import { MasterDataPageInner } from "@templates/page-inner/PageInner";
import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import type { InputNumberProps } from "antd/lib";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import type { IssuanceBatch } from "./issuanceBatchTypes";
const { TextArea } = Input;
export const IssuanceBatchFormPage = () => {
  const [form] = Form.useForm<Partial<IssuanceBatch>>();
  const handleSubmit = async (values: Partial<IssuanceBatch>) => {
    console.log(values);
  };
  const handleSave = () => {
    form.submit();
  };
  const dateFormat = "DD/MM/YYYY";
  const formatter: InputNumberProps<number>["formatter"] = (value) => {
    const [start, end] = `${value}`.split(".") || [];
    const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${end ? `${v}.${end}` : `${v}`}`;
  };
  return (
    <MasterDataPageInner
      breadcrumbItems={[
        {
          title: (
            <Link to="/app/master-data/issuance-batch-management">
              Danh sách đợt phát hành
            </Link>
          ),
        },
        {
          title: "Tạo mới",
        },
      ]}
      footer={
        <PageFooter>
          <Button variant="filled" color="primary">
            <Link to="/app/master-data/user">Hủy bỏ</Link>
          </Button>
          <Button type="primary" onClick={handleSave}>
            Lưu thông tin
          </Button>
          <Button type="primary" onClick={handleSave}>
            Lưu và Duyệt
          </Button>
        </PageFooter>
      }
    >
      <Form<Partial<IssuanceBatch>>
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        style={{ marginTop: 36, paddingRight: 50 }}
        initialValues={{
          x1: "CI00001",
          x2: "2024-SI-BNN-1342",
          x3: "2024-SI-BNN-1342",
          x4: "Quầy",
          x5: "INHLD",
          x6: "Quầy",
          x7: "SSI",
          x8: "VNĐ",
          x9: "12 T",
          x10: 1000000,
          x11: 1000000,
          x12: 100000000000,
          x13: dayjs("21/12/2026", dateFormat),
          x14: dayjs("21/12/2026", dateFormat),
          x15: "INHLD",
          x16: "1234-acb",
          x17: "1234 -ACB",
          x18: dayjs("21/12/2026", dateFormat),
          x19: "Có",
          x20: "Cuối kỳ",
          x21: "FIXED",
          x22: 12,
          x23: "",
        }}
      >
        <Steps
          current="1"
          steps={[
            {
              key: "1",
              label: "Bước 1: Thông tin phát hành",
            },
            {
              key: "2",
              label: "Bước 2: Chuyển phê duyệt",
            },
          ]}
          style={{ marginBottom: 30 }}
        />

        <Flex vertical gap={20} style={{ marginBottom: 30 }}>
          <Flex align="center" gap={10}>
            <SectionTitle>Thông tin đợt phát hành</SectionTitle>
          </Flex>
          <Row gutter={40}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item
                name="x1"
                label="Mã đợt phát hành"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item
                name="x2"
                label="Tên chứng chỉ phát hành"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x3" label="Nhóm chứng chỉ tiền gửi">
                <Select
                  options={[
                    { value: "2024-SI-BNN-1342", label: "2024-SI-BNN-1342" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item
                name="x4"
                label="Kênh phát hành"
                rules={[{ required: true }]}
              >
                <Select options={[{ value: "Quầy", label: "Quầy" }]} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x5" label="Kiểu phát hành">
                <Select options={[{ value: "INHLD", label: "INHLD" }]} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x6" label="Đại lý/ Chi nhánh phát hành">
                <Select options={[{ value: "Quầy", label: "Quầy" }]} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x7" label="Khách hàng/Đại lý">
                <Select options={[{ value: "SSI", label: "SSI" }]} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x8" label="Tiền tệ">
                <Select options={[{ value: "VNĐ", label: "VNĐ" }]} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x9" label="Kỳ hạn">
                <Select options={[{ value: "12 T", label: "12 T" }]} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x10" label="Số lượng phát hành">
                <InputNumber<number>
                  formatter={formatter}
                  parser={(value) =>
                    value?.replaceAll(/\$\s?|(,*)/g, "") as unknown as number
                  }
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x11" label="Mệnh giá">
                <InputNumber<number>
                  formatter={formatter}
                  parser={(value) =>
                    value?.replaceAll(/\$\s?|(,*)/g, "") as unknown as number
                  }
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x12" label="Tổng hạn mức cho đợt phát hành">
                <InputNumber<number>
                  formatter={formatter}
                  parser={(value) =>
                    value?.replaceAll(/\$\s?|(,*)/g, "") as unknown as number
                  }
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item
                name="x13"
                label="Ngày khởi tạo"
                rules={[{ required: true }]}
              >
                <DatePicker format={dateFormat} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item
                name="x14"
                label="Ngày đáo hạn"
                rules={[{ required: true }]}
              >
                <DatePicker format={dateFormat} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x15" label="Trạng thái">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Flex>

        <Flex vertical gap={20}>
          <Flex align="center" gap={10} style={{ marginBottom: 20 }}>
            <SectionTitle>Thông tin lãi suất và hạch toán</SectionTitle>
          </Flex>
          <Row gutter={40}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x16" label="Số TK Khách hàng">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x17" label="Ngân hàng khách hàng">
                <Select
                  options={[{ value: "1234 -ACB", label: "1234 -ACB" }]}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x18" label="Số TK ngân hàng lưu giữ gốc CD ">
                <DatePicker format={dateFormat} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x19" label="Cho phép chuyển nhượng">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x20" label="Hình thức trả lãi">
                <Select options={[{ value: "Cuối kỳ", label: "Cuối kỳ" }]} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x21" label="Loại lãi suất">
                <Select options={[{ value: "FIXED", label: "FIXED" }]} />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item name="x22" label="Lãi suất (%/năm)">
                <InputNumber<number> style={{ width: "100%" }} suffix="%" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="x23" label="Ghi chú">
            <TextArea rows={4} />
          </Form.Item>
        </Flex>
      </Form>
    </MasterDataPageInner>
  );
};
