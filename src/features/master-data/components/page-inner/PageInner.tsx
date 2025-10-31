import { Breadcrumb } from "antd";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./PageInner.module.scss";
import type { BreadcrumbProps } from "antd/lib";
interface MasterDataPageInnerProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  breadcrumbItems: BreadcrumbProps["items"];
}
export const MasterDataPageInner = ({
  header,
  children,
  footer,
  breadcrumbItems,
}: MasterDataPageInnerProps) => {
  return (
    <div className={styles.inner}>
      <div className={styles.breadcrumb}>
        <Breadcrumb
          items={[
            {
              title: <Link to="/app/master-data">Danh mục</Link>,
            },
            ...(breadcrumbItems || []),
          ]}
        />
      </div>
      {header ? <div className={styles.header}>{header}</div> : <></>}
      <div className={styles.body}>{children}</div>
      {footer ? <div className={styles.footer}>{footer}</div> : <></>}
    </div>
  );
};
