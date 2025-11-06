import { PageTemplate } from "@common/components/templates";
import { Col, Flex, Image, Row, Typography, type RowProps } from "antd";
import styles from "./DashboardPage.module.scss";
import StatisticIcon2 from "./assets/icons/icon-delivered.svg";
import StatisticIcon3 from "./assets/icons/icon-order-2.svg";
import StatisticIcon4 from "./assets/icons/icon-order-3.svg";
import StatisticIcon1 from "./assets/icons/icon-order.svg";
import ChartSample1 from "./assets/images/chart-1.svg";
import ChartSample2 from "./assets/images/chart-2.svg";
import ChartSample3 from "./assets/images/chart-3.svg";
import ChartSample4 from "./assets/images/chart-4.svg";
import ChartSample5 from "./assets/images/chart-5.svg";
import ChartSample6 from "./assets/images/chart-6.svg";
import { ChartCard } from "./components/chart-card/ChartCard";
import { SelectDate } from "./components/select-date/SelectDate";
import { StatisticsCard } from "./components/statistics-card/StatisticsCard";
const { Title } = Typography;
export const DashboardPage = () => {
  const rowGutter: RowProps["gutter"] = [
    {
      xs: 16,
      md: 24,
    },
    {
      xs: 16,
      md: 24,
    },
  ];
  return (
    <PageTemplate
      header={
        <Flex wrap align="start" justify="space-between" gap={16}>
          <Title level={1}>Dashboard</Title>
          <SelectDate />
        </Flex>
      }
      headerBg="var(--cds-color-bg-base)"
    >
      <Flex vertical gap={30} className={styles.inner}>
        <Row gutter={rowGutter}>
          <Col span={24} md={{ span: 12 }} xxl={6}>
            <StatisticsCard
              icon={StatisticIcon1}
              value={175}
              label="Giao dịch mua"
              percent={4}
              percentLabel="30 days"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} xxl={6}>
            <StatisticsCard
              icon={StatisticIcon2}
              value={357}
              label="Giao dịch bán"
              percent={4}
              percentLabel="30 days"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} xxl={6}>
            <StatisticsCard
              icon={StatisticIcon3}
              value={5}
              label="Giao dịch Chuyển nhượng"
              percent={-25}
              percentLabel="30 days"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} xxl={6}>
            <StatisticsCard
              icon={StatisticIcon4}
              value={12825}
              label="Tổng giá trị (tr.đồng) "
              percent={-12}
              percentLabel="30 days"
            />
          </Col>
        </Row>

        <Row gutter={rowGutter}>
          <Col span={24} md={{ span: 12 }}>
            <ChartCard
              title="Tổng giao dịch"
              menus={[{ key: "1", label: "Refresh" }]}
            >
              <Image src={ChartSample1} alt="" width="100%" />
            </ChartCard>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <ChartCard
              title="Xu hướng mua"
              menus={[{ key: "1", label: "Refresh" }]}
            >
              <Image src={ChartSample2} alt="" width="100%" />
            </ChartCard>
          </Col>
        </Row>

        <Row gutter={rowGutter}>
          <Col span={24} xxl={{ span: 16 }} md={{ span: 12 }}>
            <ChartCard
              title="Tổng giá trị giao dịch "
              menus={[{ key: "1", label: "Refresh" }]}
            >
              <Image src={ChartSample3} alt="" width="100%" />
            </ChartCard>
          </Col>
          <Col span={24} xxl={{ span: 8 }} md={{ span: 12 }}>
            <ChartCard
              title="Phân bố khách hàng"
              menus={[{ key: "1", label: "Refresh" }]}
            >
              <Image src={ChartSample4} alt="" width="100%" />
            </ChartCard>
          </Col>
        </Row>

        <Row gutter={rowGutter}>
          <Col span={24} md={{ span: 12 }}>
            <ChartCard title="Hiệu suất doanh thu theo tháng">
              <Image src={ChartSample5} alt="" width="100%" />
            </ChartCard>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <ChartCard title="Doanh thu theo tuần">
              <Image src={ChartSample6} alt="" width="100%" />
            </ChartCard>
          </Col>
        </Row>
      </Flex>
    </PageTemplate>
  );
};
