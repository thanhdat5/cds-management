import type { CSSProperties, ReactNode } from "react";
import styles from "./PageTemplate.module.scss";
interface PageTemplateProps {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  stickyHeader?: boolean;
  stickyFooter?: boolean;
  footerShadow?: boolean;
  headerBg?: CSSProperties["background"];
  footerBg?: CSSProperties["background"];
}
export const PageTemplate: React.FC<PageTemplateProps> = ({
  header,
  footer,
  stickyHeader,
  stickyFooter,
  footerShadow,
  headerBg,
  footerBg,
  children,
}) => {
  return (
    <>
      {header ? (
        <div
          className={`${styles.pageHeader} ${stickyHeader && styles.sticky}`}
          style={{ background: headerBg }}
        >
          {header}
        </div>
      ) : (
        <></>
      )}
      <div className={styles.pageBody}>{children}</div>
      {footer ? (
        <div
          className={`${styles.pageFooter} ${stickyFooter && styles.sticky} ${
            footerShadow && styles.shadow
          }`}
          style={{ background: footerBg }}
        >
          {footer}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
