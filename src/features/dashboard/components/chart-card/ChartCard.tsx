import { MoreOutlined } from "@ant-design/icons";
import { Dropdown, Flex, type MenuProps } from "antd";
import type { ReactNode } from "react";
import styles from "./ChartCard.module.scss";
import { Button } from "@common/components";
interface ChartCardProps {
  title: string;
  children: ReactNode;
  menus?: MenuProps["items"];
}
export const ChartCard = ({ title, children, menus }: ChartCardProps) => {
  return (
    <Flex vertical className={styles.card}>
      <Flex align="start" justify="space-between" className={styles.cardHeader}>
        <div className={styles.cardTitle}>{title}</div>
        {menus?.length ? (
          <Dropdown
            className={styles.cardMenu}
            menu={{ items: menus }}
            trigger={["click"]}
            placement="bottomRight"
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
