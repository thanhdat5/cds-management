import {
  BellOutlined,
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { IconCard } from "@common/components";
import { Flex, Form, Input, Layout } from "antd";
import { UserCard } from "../user-card/UserCard";
import styles from "./Header.module.scss";
const { Search } = Input;
export const Header = () => {
  return (
    <Layout.Header className={styles.appHeader}>
      <Flex className={styles.headerInner} align="center">
        <Form.Item style={{ flex: 1, margin: 0 }}>
          <Search size="large" placeholder="Tìm kiếm" />
        </Form.Item>
        <Flex className={styles.headerIcons} align="center">
          <IconCard icon={<BellOutlined />} badgeCount={21} />
          <IconCard icon={<MessageOutlined />} badgeCount={53} />
          <IconCard
            icon={<GiftOutlined />}
            badgeCount={15}
            color="#5E6C93"
            backgroundColor="rgba(94, 108, 147, 0.15)"
          />
          <IconCard
            icon={<SettingOutlined />}
            badgeCount={19}
            color="#FF5B5B"
            backgroundColor="rgba(255, 91, 91, 0.15)"
          />
        </Flex>
        <UserCard />
      </Flex>
    </Layout.Header>
  );
};
