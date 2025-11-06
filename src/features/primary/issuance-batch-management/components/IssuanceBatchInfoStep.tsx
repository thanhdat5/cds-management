import { Button, SectionTitle } from "@common/components";
import {
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  type InputNumberProps,
} from "antd";
import { useState } from "react";
const { TextArea } = Input;

export const IssuanceBatchInfoStep = () => {
  const groupOptions = [
    { value: "2024-SI-BNN-1342", label: "2024-SI-BNN-1342" },
  ];
  const channelOptions = [{ value: "Quầy", label: "Quầy" }];
  const releaseTypeOptions = [{ value: "INHLD", label: "INHLD" }];
  const agencyOptions = [{ value: "Quầy", label: "Quầy" }];
  const customerOptions = [{ value: "SSI", label: "SSI" }];
  const currencyOptions = [{ value: "VNĐ", label: "VNĐ" }];
  const termOptions = [{ value: "12 T", label: "12 T" }];
  const bankOptions = [{ value: "1234 -ACB", label: "1234 -ACB" }];
  const interestPaymentOptions = [{ value: "Cuối kỳ", label: "Cuối kỳ" }];
  const interestTypeOptions = [
    { value: "FIXED", label: "FIXED" },
    { value: "STEP", label: "STEP" },
    { value: "FLOAD", label: "FLOAD" },
  ];
  const statusOptions = [
    { label: "IHLD", value: "IHLD" },
    { label: "Hoàn thành", value: "DONE" },
    { label: "Đang chờ", value: "PENDING" },
  ];
  const dateFormat = "DD/MM/YYYY";
  const formatter: InputNumberProps<number>["formatter"] = (value) => {
    const [start, end] = `${value}`.split(".") || [];
    const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${end ? `${v}.${end}` : `${v}`}`;
  };
  const [interestType, setInterestType] = useState<string>("FIXED");
  return (
    <Flex vertical gap={30}>
      {/* --- THÔNG TIN ĐỢT PHÁT HÀNH --- */}
      <Flex vertical gap={10}>
        <SectionTitle>Thông tin đợt phát hành</SectionTitle>
        <Row gutter={24}>
          <Col span={24} md={12} lg={8}>
            <Form.Item
              name="issuanceBatchCode"
              label="Mã đợt phát hành"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item
              name="certificateName"
              label="Tên chứng chỉ phát hành"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="certificateGroup" label="Nhóm chứng chỉ tiền gửi">
              <Select options={groupOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item
              name="issuanceChannel"
              label="Kênh phát hành"
              rules={[{ required: true }]}
            >
              <Select options={channelOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="issuanceType" label="Kiểu phát hành">
              <Select options={releaseTypeOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="agencyBranch" label="Đại lý/ Chi nhánh phát hành">
              <Select options={agencyOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="customerAgency" label="Khách hàng/Đại lý">
              <Select options={customerOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="currency" label="Tiền tệ">
              <Select options={currencyOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="term" label="Kỳ hạn">
              <Select options={termOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="quantityIssued" label="Số lượng phát hành">
              <InputNumber<number>
                formatter={formatter}
                parser={(value) =>
                  value?.replaceAll(/\$\s?|(,*)/g, "") as unknown as number
                }
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="parValue" label="Mệnh giá">
              <InputNumber<number>
                formatter={formatter}
                parser={(value) =>
                  value?.replaceAll(/\$\s?|(,*)/g, "") as unknown as number
                }
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="totalLimit" label="Tổng hạn mức cho đợt phát hành">
              <InputNumber<number>
                formatter={formatter}
                parser={(value) =>
                  value?.replaceAll(/\$\s?|(,*)/g, "") as unknown as number
                }
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item
              name="startDate"
              label="Ngày khởi tạo"
              rules={[{ required: true }]}
            >
              <DatePicker format={dateFormat} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item
              name="maturityDate"
              label="Ngày đáo hạn"
              rules={[{ required: true }]}
            >
              <DatePicker format={dateFormat} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="status" label="Trạng thái">
              <Select options={statusOptions} />
            </Form.Item>
          </Col>
        </Row>
      </Flex>

      {/* --- THÔNG TIN LÃI SUẤT & HẠCH TOÁN --- */}
      <Flex vertical gap={10}>
        <SectionTitle>Thông tin lãi suất và hạch toán</SectionTitle>
        <Row gutter={24}>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="customerAccountNumber" label="Số TK Khách hàng">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="customerBank" label="Ngân hàng khách hàng">
              <Select options={bankOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item
              name="depositAccountDate"
              label="Số TK ngân hàng lưu giữ gốc CD"
            >
              <DatePicker format={dateFormat} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="isTransferable" label="Cho phép chuyển nhượng">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="interestPaymentMethod" label="Hình thức trả lãi">
              <Select options={interestPaymentOptions} />
            </Form.Item>
          </Col>
          <Col span={24} md={12} lg={8}>
            <Form.Item name="interestType" label="Loại lãi suất">
              <Select
                options={interestTypeOptions}
                onChange={(value) => setInterestType(value)}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Row gutter={24}>
              {/* ✅ FIXED */}
              {interestType === "FIXED" && (
                <>
                  <Col span={24} md={12} lg={8}>
                    <Form.Item
                      name="annualInterestRate"
                      label="Lãi suất (%/năm)"
                    >
                      <InputNumber<number>
                        style={{ width: "100%" }}
                        suffix="%"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24} md={12} lg={8}>
                    <Form.Item
                      name="preMaturityInterestRate"
                      label="Lãi suất trước hạn (%/năm)"
                    >
                      <InputNumber<number>
                        style={{ width: "100%" }}
                        suffix="%"
                      />
                    </Form.Item>
                  </Col>
                </>
              )}

              {/* ✅ STEP */}
              {interestType === "STEP" && (
                <Col span={24}>
                  <Form.List name="stepRates">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                          <Flex
                            vertical
                            key={key}
                            style={{
                              padding: 16,
                              background: "#F3F2F7",
                              borderRadius: 8,
                              position: "relative",
                              marginBottom: 10,
                            }}
                          >
                            <Button
                              type="text"
                              style={{
                                color: "var(--cds-color-error)",
                                position: "absolute",
                                top: 10,
                                right: 10,
                                zIndex: 2,
                              }}
                              onClick={() => remove(name)}
                            >
                              X
                            </Button>
                            <Row gutter={24} align="middle">
                              <Col span={24} md={12} lg={8}>
                                <Form.Item
                                  {...restField}
                                  name={[name, "fromDate"]}
                                  label="Từ ngày"
                                  style={{ margin: 4 }}
                                >
                                  <DatePicker
                                    format={dateFormat}
                                    style={{ width: "100%" }}
                                  />
                                </Form.Item>
                              </Col>
                              <Col span={24} md={12} lg={8}>
                                <Form.Item
                                  {...restField}
                                  name={[name, "toDate"]}
                                  label="Đến ngày"
                                  style={{ margin: 4 }}
                                >
                                  <DatePicker
                                    format={dateFormat}
                                    style={{ width: "100%" }}
                                  />
                                </Form.Item>
                              </Col>
                              <Col span={24} md={12} lg={8}>
                                <Form.Item
                                  {...restField}
                                  name={[name, "rate"]}
                                  label="Lãi suất theo kỳ"
                                  style={{ margin: 4 }}
                                >
                                  <InputNumber<number>
                                    style={{ width: "100%" }}
                                    suffix="%"
                                  />
                                </Form.Item>
                              </Col>
                            </Row>
                          </Flex>
                        ))}

                        <Button
                          type="text"
                          onClick={() => add()}
                          style={{
                            color: "var(--cds-color-primary)",
                            marginBottom: 30,
                          }}
                        >
                          + Thêm lãi suất
                        </Button>
                      </>
                    )}
                  </Form.List>
                </Col>
              )}

              {/* ✅ FLOAD */}
              {interestType === "FLOAD" && (
                <>
                  <Col span={24} md={12} lg={8}>
                    <Form.Item name="fromDate" label="Từ ngày">
                      <DatePicker />
                    </Form.Item>
                  </Col>

                  <Col span={24} md={12} lg={8}>
                    <Form.Item name="toDate" label="Đến ngày">
                      <DatePicker />
                    </Form.Item>
                  </Col>

                  <Col span={24} md={12} lg={8}>
                    <Form.Item
                      name="interestRate"
                      label="Lãi suất phân hạng (%/năm)"
                    >
                      <Select options={[{ value: "10%", label: "10%" }]} />
                    </Form.Item>
                  </Col>

                  <Col span={24} md={12} lg={8}>
                    <Form.Item name="referenceTerm" label="Kỳ hạn tham chiếu">
                      <Select options={[{ value: "12T", label: "12 tháng" }]} />
                    </Form.Item>
                  </Col>

                  <Col span={24} md={12} lg={8}>
                    <Form.Item
                      name="interestFrequency"
                      label="Tần suất trả lãi"
                    >
                      <Select options={[{ value: "12T", label: "12 tháng" }]} />
                    </Form.Item>
                  </Col>

                  <Col span={24} md={12} lg={8}>
                    <Form.Item name="spreadMargin" label="Biên độ (%/năm)">
                      <Select options={[{ value: "10%", label: "10%" }]} />
                    </Form.Item>
                  </Col>
                </>
              )}
            </Row>
          </Col>
          <Col span={24}>
            <Form.Item name="note" label="Ghi chú">
              <TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};
