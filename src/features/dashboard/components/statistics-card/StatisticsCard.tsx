import { Avatar, Flex } from "antd";
import styles from "./StatisticsCard.module.scss";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
interface StatisticsCardProps {
  icon: string;
  value: number;
  label: string;
  percent: number;
  percentLabel?: string;
}
export const StatisticsCard = ({
  icon,
  value,
  label,
  percent,
  percentLabel,
}: StatisticsCardProps) => {
  return (
    <Flex className={styles.card}>
      <Avatar src={icon} alt={label} size={70} />
      <Flex vertical gap={4} align="start">
        <Flex className={styles.value}>{value}</Flex>
        <Flex className={styles.label}>{label}</Flex>
        <Flex align="center" gap={6} className={styles.percent}>
          <Avatar
            shape="circle"
            icon={percent > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            style={{
              backgroundColor:
                percent > 0
                  ? "rgba(46, 214, 163, 0.15)"
                  : "rgba(255, 91, 91, 0.15)",
              color: percent > 0 ? "#00A389" : "#FF5B5B",
            }}
          />
          <span className={styles.percentLabel}>{`${Math.abs(percent)}%${
            percentLabel ? ` (${percentLabel})` : ""
          }`}</span>
        </Flex>
      </Flex>
    </Flex>
  );
};
