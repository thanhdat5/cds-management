import { Col, DatePicker, Flex, Form, Input, Row, Select } from "antd";
const { TextArea } = Input;

export const IssuanceBatchApprovalStep = () => {
  const departmentOptions = [
    { label: "Bộ phận BO", value: "BO" },
    { label: "Phòng IT", value: "IT" },
    { label: "Phòng Kế toán", value: "ACCT" },
  ];

  const approverOptions = [
    { label: "Đặng Kiều Oanh", value: "dkoanh" },
    { label: "Nguyễn Thanh Đạt", value: "ntdat" },
    { label: "Lê Thị Mai", value: "ltmai" },
  ];

  const relatedUserOptions = [
    { label: "Đặng Kiều Oanh", value: "dkoanh" },
    { label: "Nguyễn Thanh Đạt", value: "ntdat" },
    { label: "Phạm Quốc Bảo", value: "pqbao" },
  ];

  const statusOptions = [
    { label: "IHLD", value: "IHLD" },
    { label: "Hoàn thành", value: "DONE" },
    { label: "Đang chờ", value: "PENDING" },
  ];
  const dateFormat = "DD/MM/YYYY";
  return (
    <Flex vertical gap={30}>
      <Row gutter={24}>
        <Col span={24} md={12} lg={8}>
          <Form.Item label="Đơn vị phê duyệt" name="department">
            <Select placeholder="Chọn đơn vị" options={departmentOptions} />
          </Form.Item>
        </Col>
        <Col span={24} md={12} lg={8}>
          <Form.Item label="Chọn người phê duyệt" name="approver">
            <Select
              placeholder="Chọn người phê duyệt"
              options={approverOptions}
            />
          </Form.Item>
        </Col>
        <Col span={24} md={12} lg={8}>
          <Form.Item label="Người liên quan" name="relatedUser">
            <Select
              placeholder="Chọn người liên quan"
              options={relatedUserOptions}
            />
          </Form.Item>
        </Col>
        <Col span={24} md={12} lg={8}>
          <Form.Item label="Trạng thái" name="approvalStatus">
            <Select options={statusOptions} />
          </Form.Item>
        </Col>
        <Col span={24} md={12} lg={8}>
          <Form.Item label="Ngày gửi phê duyệt" name="approvalDate">
            <DatePicker format={dateFormat} className="w-full" />
          </Form.Item>
        </Col>
        <Col span={24} md={12} lg={8}>
          <Form.Item label="Hạn phê duyệt" name="deadline">
            <DatePicker format={dateFormat} className="w-full" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Ghi chú cho người nhận phê duyệt"
            name="approvalNote"
            rules={[{ max: 100, message: "Tối đa 100 ký tự" }]}
          >
            <TextArea rows={3} showCount maxLength={100} />
          </Form.Item>
        </Col>
      </Row>
    </Flex>
  );
};
