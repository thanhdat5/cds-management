import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Flex } from "antd";
import { Link } from "react-router-dom";
import type { ButtonSize } from "./types";
type AntDropdownButtonProps = React.ComponentProps<typeof Dropdown.Button>;

/**
 * Props for DropdownButton component.
 * Restricts allowed props to maintain a clean and safe API.
 */
export interface DropdownButtonProps
  extends Pick<
    AntDropdownButtonProps,
    | "trigger"
    | "placement"
    | "icon"
    | "children"
    | "arrow"
    | "menu"
    | "onClick"
    | "onOpenChange"
  > {
  /**
   * Button size, only allows 'middle' or 'large' for consistency across UI.
   */
  size?: ButtonSize;
  /**
   * URL for navigation. If provided, main button will render as a React Router Link.
   */
  url?: string;
}

/**
 * DropdownButton component
 * Renders a split button with a main action and a dropdown menu.
 * If url is provided, main button acts as a React Router Link.
 */
export const DropdownButton: React.FC<DropdownButtonProps> = ({
  trigger = ["click"],
  placement = "bottomRight",
  icon,
  size,
  children,
  url,
  ...rest
}) => {
  // Custom render for main button (left), wrap with Link if url provided
  const renderMainButton = (button: React.ReactNode) => (
    <Flex gap={8} align="center">
      {icon || <></>}
      {url ? (
        <Link style={{ color: "inherit" }} to={url}>
          {button}
        </Link>
      ) : (
        button
      )}
    </Flex>
  );

  return (
    <Dropdown.Button
      type="primary"
      size={size}
      icon={<DownOutlined />}
      trigger={trigger}
      placement={placement}
      {...rest}
    >
      {renderMainButton(children)}
    </Dropdown.Button>
  );
};

DropdownButton.displayName = "DropdownButton";
