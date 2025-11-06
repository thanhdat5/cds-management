import { Flex } from "antd";
import type { CSSProperties, ReactNode } from "react";
import styles from "./PageTemplate.module.scss";
interface PageTemplateProps {
  header?: ReactNode;
  subHeader?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  stickyHeader?: boolean;
  stickyFooter?: boolean;
  footerShadow?: boolean;
  headerStyle?: CSSProperties;
  mainHeaderStyle?: CSSProperties;
  subHeaderStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  footerStyle?: CSSProperties;
}
export const PageTemplate: React.FC<PageTemplateProps> = ({
  header,
  subHeader,
  footer,
  stickyHeader,
  stickyFooter,
  footerShadow,
  headerStyle,
  mainHeaderStyle,
  subHeaderStyle,
  bodyStyle,
  footerStyle,
  children,
}) => {
  return (
    <>
      {header ? (
        <div
          className={`${styles.pageHeader} ${stickyHeader && styles.sticky}`}
          style={headerStyle}
        >
          <Flex
            align="center"
            className={styles.mainHeader}
            style={mainHeaderStyle}
          >
            {header}
          </Flex>
          {subHeader ? (
            <Flex
              align="center"
              className={styles.subHeader}
              style={subHeaderStyle}
            >
              {subHeader}
            </Flex>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      <div className={styles.pageBody} style={bodyStyle}>
        {children}
      </div>
      {footer ? (
        <div
          className={`${styles.pageFooter} ${stickyFooter && styles.sticky} ${
            footerShadow && styles.shadow
          }`}
          style={footerStyle}
        >
          {footer}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
