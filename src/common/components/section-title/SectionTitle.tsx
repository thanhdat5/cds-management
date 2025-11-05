import { PlusCircleOutlined } from "@ant-design/icons";
import { Avatar, Flex, Typography } from "antd";
import type { TitleProps } from "antd/es/typography/Title";
import React from "react";
import styles from "./SectionTitle.module.scss";

/**
 * SectionTitleProps
 * Props for SectionTitle component.
 * - Inherits all Typography.Title props except 'type' and 'level' to control heading level via this component.
 * - 'size': If "large", Avatar uses large size and heading is h3; otherwise Avatar is default and heading is h4.
 */
export interface SectionTitleProps extends Omit<TitleProps, "type" | "level"> {
  size?: "large";
}

/**
 * SectionTitle
 * Renders a section title with an icon avatar and heading.
 * - Displays a PlusCircle icon in Avatar.
 * - Heading level is determined by 'size': "large" => h3, default => h4.
 * - For consistent section headings and easy reuse across the application.
 * - Uses Ant Design Flex for alignment and scoped module styles for maintainability.
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  size,
  ...rest
}) => {
  // Select heading level based on size prop
  const headingLevel = size === "large" ? 3 : 4;

  return (
    <Flex align="center" className={styles.wrap}>
      <Avatar icon={<PlusCircleOutlined />} size={size} />
      <Typography.Title level={headingLevel} {...rest}>
        {children}
      </Typography.Title>
    </Flex>
  );
};

// Set displayName for easier debugging in React DevTools
SectionTitle.displayName = "SectionTitle";
