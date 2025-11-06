import { APP_MENU } from "@app/configs";
import { PageTemplate } from "@common/components/templates";
import { Typography } from "antd";
import styles from "./MasterDataPage.module.scss";
import { CardItem } from "./components/CardItem";
const { Title } = Typography;
export const MasterDataPage = () => {
  return (
    <PageTemplate stickyHeader header={<Title>Danh mục hệ thống</Title>}>
      <div className={styles.items}>
        {APP_MENU.MASTER_DATA.children
          ?.filter((child) => child.url)
          ?.map((item) => (
            <CardItem
              key={item.url}
              label={item.label}
              icon={item.icon || `/icons/icon-default.svg`}
              url={item.url}
            />
          ))}
      </div>
    </PageTemplate>
  );
};
