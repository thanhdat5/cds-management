import type { ButtonProps as AntButtonProps } from "antd";
import { Button as AntButton } from "antd";
import React from "react";
import type { ButtonSize, ButtonType } from "./types";

// Only pick necessary props from Ant Design Button to ensure clean API
interface ButtonProps
  extends Pick<
    AntButtonProps,
    | "icon"
    | "iconPosition"
    | "htmlType"
    | "children"
    | "disabled"
    | "loading"
    | "onClick"
    | "style"
  > {
  /**
   * Button type, restricted to design system: 'default' | 'primary' | 'secondary'
   */
  type?: ButtonType;
  /**
   * Button size, only allows 'middle' or 'large' for consistency across UI
   */
  size?: ButtonSize;
}

// Map our custom button types to Ant Design's allowed values
const typeMap: Record<ButtonType, AntButtonProps["type"]> = {
  default: "primary",
  primary: "primary",
  secondary: undefined,
  text: "text",
};

// Maps custom button types to Ant Design's color prop
const colorMap: Record<ButtonType, AntButtonProps["color"]> = {
  default: undefined,
  primary: undefined,
  secondary: "primary",
  text: undefined,
};

// Maps custom button types to Ant Design's variant prop
const variantMap: Record<ButtonType, AntButtonProps["variant"]> = {
  default: undefined,
  primary: undefined,
  secondary: "filled",
  text: undefined,
};

// Set ghost style for specific button types
const ghostMap: Record<ButtonType, AntButtonProps["ghost"]> = {
  default: true,
  primary: undefined,
  secondary: undefined,
  text: undefined,
};

/**
 * CDs Button component for the design system.
 * Only allows specific types and sizes.
 * Supports custom color and variant using Ant Design v5 props.
 */
export const Button: React.FC<ButtonProps> = ({
  type = "default",
  size = "middle",
  children,
  ...rest
}) => {
  return (
    <AntButton
      type={typeMap[type]}
      ghost={ghostMap[type]}
      color={colorMap[type]}
      variant={variantMap[type]}
      size={size}
      {...rest}
    >
      {children}
    </AntButton>
  );
};

// Set displayName for easier debugging in React DevTools
Button.displayName = "Button";
