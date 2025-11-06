import { Avatar, Dropdown, Flex, Typography } from "antd";
import styles from "./UserCard.module.scss";
export const UserCard = () => {
  return (
    <Flex align="center" gap={10} className={styles.userCard}>
      <Typography className={styles.welcome}>Xin chào, Oanh</Typography>
      <Dropdown
        placement="bottomRight"
        menu={{
          items: [
            { key: "my-profile", label: "My Profile" },
            { key: "logout", label: "Logout" },
          ],
        }}
      >
        <Avatar src="/avatar.png" className={styles.avatar} />
      </Dropdown>
    </Flex>
  );
};
