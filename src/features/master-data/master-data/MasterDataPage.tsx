import { MASTER_DATA_CONFIG } from "@constants/app-setting";
import styles from "./MasterDataPage.module.scss";
import { Link } from "react-router-dom";
export const MasterDataPage = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.pageTitle}>Danh mục hệ thống</div>
      <div className={styles.items}>
        {MASTER_DATA_CONFIG.map((item) => (
          <Link
            key={item.key}
            to={`/app/master-data/${item.key}`}
            className={styles.item}
          >
            <div className={styles.icon}>
              <img
                src={`/icons/icon-${item.key}.svg`}
                alt={item.key}
              />
            </div>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
