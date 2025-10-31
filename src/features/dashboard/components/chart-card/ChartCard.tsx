import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Flex, type MenuProps } from "antd";
import type { ReactNode } from "react";
import styles from "./ChartCard.module.scss";
interface ChartCardProps {
  title: string;
  children: ReactNode;
  menus?: MenuProps["items"];
}
export const ChartCard = ({ title, children, menus }: ChartCardProps) => {
  return (
    <Flex vertical className={styles.card}>
      <Flex
        align="start"
        justify="space-between"
        gap={20}
        className={styles.cardHeader}
      >
        <div className={styles.cardTitle}>{title}</div>
        {menus ? (
          <Dropdown
            className={styles.cardMenu}
            menu={{ items: menus }}
            trigger={["click"]}
          >
            <Button type="text" icon={<MoreOutlined size={24} />} />
          </Dropdown>
        ) : (
          <></>
        )}
      </Flex>
      <div className={styles.cardBody}>{children}</div>
    </Flex>
  );
};
