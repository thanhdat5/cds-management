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
    Tabs,
} from "antd";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import type { Customer } from "./customerTypes";
export const CustomerFormPage = () => {
  const [form] = Form.useForm<Partial<Customer>>();

  const customerGroupOptions = [
    { value: "Cá nhân", label: "Cá nhân" },
    { value: "Doanh nghiệp", label: "Doanh nghiệp" },
    { value: "Khác", label: "Khác" },
  ];

  const genderOptions = [
    { value: "Nam", label: "Nam" },
    { value: "Nữ", label: "Nữ" },
    { value: "Khác", label: "Khác" },
  ];

  const identityTypeOptions = [
    { value: "CCCD", label: "CCCD" },
    { value: "CMND", label: "CMND" },
    { value: "Hộ chiếu", label: "Hộ chiếu" },
    { value: "GPKD", label: "GPKD" },
  ];
  const issuingAuthorityOptions = [
    { value: "CA Hà Nội", label: "CA Hà Nội" },
    { value: "CA TP.HCM", label: "CA TP.HCM" },
    { value: "Sở KHĐT", label: "Sở KHĐT" },
  ];

  const registrationBranchOptions = [
    { value: "Chi nhánh 1", label: "Chi nhánh 1" },
    { value: "Chi nhánh 2", label: "Chi nhánh 2" },
    { value: "Khác", label: "Khác" },
  ];

  const statusOptions = [
    { value: "Hoạt động", label: "Hoạt động" },
    { value: "Ngừng hoạt động", label: "Ngừng hoạt động" },
  ];

  const provinceOptions = [
    { value: "Hà Nội", label: "Hà Nội" },
    { value: "TP.HCM", label: "TP.HCM" },
    { value: "Đà Nẵng", label: "Đà Nẵng" },
  ];

  const wardOptions = [
    { value: "Phương Mai", label: "Phương Mai" },
    { value: "Bến Nghé", label: "Bến Nghé" },
    { value: "Thạch Thang", label: "Thạch Thang" },
  ];

  const hamletOptions = [
    { value: "Tổ 1", label: "Tổ 1" },
    { value: "Tổ 2", label: "Tổ 2" },
    { value: "Tổ 3", label: "Tổ 3" },
  ];

  const houseNumberOptions = [
    { value: "23", label: "23" },
    { value: "99", label: "99" },
    { value: "45", label: "45" },
  ];
  const handleSubmit = async (values: Partial<Customer>) => {
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
              title: <Link to="/app/master-data/customer">Khách hàng</Link>,
            },
            {
              title: "Tạo mới Khách hàng",
            },
          ]}
        />
      }
      footer={
        <Flex gap={10} justify="flex-end">
          <Link to="/app/master-data/customer">
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
          customerCode: "C00001",
          cifCode: "3T001",
          customerName: "Nguyễn Văn A",
          customerGroup: "Cá nhân",
          dateOfBirth: dayjs("1990-01-01", "YYYY-MM-DD"),
          gender: "Nam",
          nationality: "Việt Nam",
          identityType: "CCCD",
          identityNumber: "001234567890",
          dateOfIssue: dayjs("2015-01-01", "YYYY-MM-DD"),
          placeOfIssue: "Hà Nội",
          issuingAuthority: "CA Hà Nội",
          expiryDate: dayjs("2030-01-01", "YYYY-MM-DD"),
          registrationBranch: "Chi nhánh 1",
          status: "Hoạt động",
          taxCode: "123456789",
          email: "vana@example.com",
          phone: "0901234567",
          province: "Hà Nội",
          district: "Đống Đa",
          ward: "Phương Mai",
          hamlet: "Tổ 1",
          houseNumber: "23",
          addressDetail: "23 Phương Mai, Đống Đa, Hà Nội",
        }}
      >
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: "1",
              label: "Thông tin chung",
              children: (
                <Row gutter={32}>
                  {/* Cột trái */}
                  <Col span={12}>
                    <Form.Item
                      name="customerCode"
                      label="Mã KH"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="customerName"
                      label="Tên Khách hàng"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item name="dateOfBirth" label="Ngày sinh">
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item name="nationality" label="Quốc tịch">
                      <Input />
                    </Form.Item>
                    <Form.Item name="identityNumber" label="Số GTTT">
                      <Input />
                    </Form.Item>
                    <Form.Item name="placeOfIssue" label="Nơi cấp">
                      <Input />
                    </Form.Item>
                    <Form.Item name="expiryDate" label="Ngày hết hạn">
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item name="registrationBranch" label="Kênh đăng ký">
                      <Select options={registrationBranchOptions} />
                    </Form.Item>
                  </Col>

                  {/* Cột phải */}
                  <Col span={12}>
                    <Form.Item
                      name="cifCode"
                      label="Mã CIF"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item name="customerGroup" label="Nhóm khách hàng">
                      <Select options={customerGroupOptions} />
                    </Form.Item>
                    <Form.Item name="gender" label="Giới tính">
                      <Select options={genderOptions} />
                    </Form.Item>
                    <Form.Item name="identityType" label="Loại GTTT">
                      <Select options={identityTypeOptions} />
                    </Form.Item>
                    <Form.Item name="dateOfIssue" label="Ngày cấp">
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item name="issuingAuthority" label="Cơ quan cấp">
                      <Select options={issuingAuthorityOptions} />
                    </Form.Item>
                    <Form.Item name="status" label="Trạng thái">
                      <Select options={statusOptions} />
                    </Form.Item>
                    <Form.Item name="taxCode" label="Mã số thuế">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              ),
            },
            {
              key: "2",
              label: "Thông tin liên hệ",
              children: (
                <Row gutter={32}>
                  {/* Cột trái */}
                  <Col span={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="province"
                      label="Địa chỉ"
                      rules={[{ required: true }]}
                    >
                      <Select
                        options={provinceOptions}
                        placeholder="Tỉnh/Thành phố"
                      />
                    </Form.Item>
                    <Form.Item name="hamlet" label="Tổ dân phố">
                      <Select options={hamletOptions} />
                    </Form.Item>
                  </Col>

                  {/* Cột phải */}
                  <Col span={12}>
                    <Form.Item
                      name="phone"
                      label="Điện thoại"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item name="ward" label="Xã/Phường">
                      <Select options={wardOptions} />
                    </Form.Item>
                    <Form.Item name="houseNumber" label="Số nhà">
                      <Select options={houseNumberOptions} />
                    </Form.Item>
                  </Col>
                </Row>
              ),
            },
          ]}
        />
      </Form>
    </PageTemplate>
  );
};
