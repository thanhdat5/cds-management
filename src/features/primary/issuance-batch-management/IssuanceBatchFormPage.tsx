import { Button, Steps } from "@common/components";
import { PageTemplate } from "@common/components/templates";
import { Breadcrumb, Flex, Form } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IssuanceBatchApprovalHistory } from "./components/IssuanceBatchApprovalHistory";
import { IssuanceBatchApprovalStep } from "./components/IssuanceBatchApprovalStep";
import { IssuanceBatchInfoStep } from "./components/IssuanceBatchInfoStep";
import type { IssuanceBatch } from "./issuanceBatchTypes";

export const IssuanceBatchFormPage = () => {
  const [formStep1] = Form.useForm<Partial<IssuanceBatch>>();
  const [formStep2] = Form.useForm<Partial<IssuanceBatch>>();
  const [step, setStep] = useState(1);

  const handleSubmitStep1 = async (values: Partial<IssuanceBatch>) => {
    console.log(values);
    setStep(2);
  };
  const handleSubmitStep2 = async (values: Partial<IssuanceBatch>) => {
    console.log(values);
  };

  const dateFormat = "DD/MM/YYYY";
  const basicInfoInitialValues = {
    issuanceBatchCode: "CI00001",
    certificateName: "2024-SI-BNN-1342",
    certificateGroup: "2024-SI-BNN-1342",
    issuanceChannel: "Quầy",
    issuanceType: "INHLD",
    agencyBranch: "Quầy",
    customerAgency: "SSI",
    currency: "VNĐ",
    term: "12 T",
    quantityIssued: 1000000,
    parValue: 1000000,
    totalLimit: 100000000000,
    startDate: dayjs("21/12/2026", dateFormat),
    maturityDate: dayjs("21/12/2026", dateFormat),
    status: "INHLD",
    customerAccountNumber: "1234-acb",
    customerBank: "1234 -ACB",
    depositAccountDate: dayjs("21/12/2026", dateFormat),
    isTransferable: "Có",
    interestPaymentMethod: "Cuối kỳ",
    interestType: "FIXED",
    note: "",
    // FIXED
    annualInterestRate: 12,
    preMaturityInterestRate: 5,
    // STEP
    stepRates: [
      {
        fromDate: dayjs("21/12/2026", dateFormat),
        toDate: dayjs("21/12/2026", dateFormat),
        rate: 10,
      },
    ],
    // FLOAD
    fromDate: dayjs("21/12/2026", dateFormat),
    toDate: dayjs("21/12/2026", dateFormat),
    interestRate: "10%",
    referenceTerm: "12T",
    interestFrequency: "12T",
    spreadMargin: "10%",
  };
  const approvalInitialValues = {
    department: "Bộ phận BO",
    approver: "Đặng Kiều Oanh",
    relatedUser: "Đặng Kiều Oanh",
    approvalStatus: "INHLD",
    approvalDate: dayjs("21/12/2026", dateFormat),
    deadline: dayjs("21/12/2026", dateFormat),
    approvalNote: "",
  };

  return (
    <PageTemplate
      stickyHeader
      stickyFooter
      footerShadow
      bodyStyle={{ paddingTop: 16 }}
      header={
        <Breadcrumb
          items={[
            {
              title: <Link to="/app/master-data">Danh mục</Link>,
            },
            {
              title: (
                <Link to="/app/master-data/issuance-batch-management">
                  Danh sách đợt phát hành
                </Link>
              ),
            },
            {
              title: "Tạo mới đợt phát hành",
            },
          ]}
        />
      }
      subHeader={
        <Steps
          current={step.toString()}
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
        />
      }
      footer={
        <Flex gap={10} justify="flex-end">
          {step === 1 ? (
            <>
              <Link to="/app/primary/issuance-batch-management">
                <Button size="large">Hủy bỏ</Button>
              </Link>
              <Button
                type="primary"
                size="large"
                onClick={() => formStep1.submit()}
              >
                Lưu thông tin
              </Button>
            </>
          ) : (
            <></>
          )}
          {step === 2 ? (
            <>
              <Button size="large" onClick={() => setStep(1)}>
                Hủy bỏ
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={() => formStep2.submit()}
              >
                Lưu và Duyệt
              </Button>
            </>
          ) : (
            <></>
          )}
        </Flex>
      }
    >
      {/* Step 1 */}
      {step === 1 ? (
        <Form<Partial<IssuanceBatch>>
          form={formStep1}
          onFinish={handleSubmitStep1}
          layout="vertical"
          initialValues={basicInfoInitialValues}
        >
          <IssuanceBatchInfoStep />
        </Form>
      ) : (
        <></>
      )}

      {/* Step 2 */}
      {step === 2 ? (
        <Form<Partial<IssuanceBatch>>
          form={formStep2}
          onFinish={handleSubmitStep2}
          layout="vertical"
          initialValues={approvalInitialValues}
        >
          <IssuanceBatchApprovalStep />
          <IssuanceBatchApprovalHistory />
        </Form>
      ) : (
        <></>
      )}
    </PageTemplate>
  );
};
