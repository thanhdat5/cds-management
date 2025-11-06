import { MASTER_DATA_CONFIG } from "@constants/app-setting";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import styles from "./MasterDataPage.module.scss";
const { Title } = Typography;
export const MasterDataPage = () => {
  return (
    <>
      <div className={styles.header}>
        <Title>Danh mục hệ thống</Title>
      </div>
      <div className={styles.inner}>
        <div className={styles.items}>
          {MASTER_DATA_CONFIG.map((item) => (
            <Link
              key={item.key}
              to={`/app/master-data/${item.key}`}
              className={styles.item}
            >
              <div className={styles.icon}>
                <img src={`/icons/icon-${item.key}.svg`} alt={item.key} />
              </div>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
