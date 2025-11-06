import { Avatar, Badge, type AvatarProps, type BadgeProps } from "antd";
import styles from "./IconCard.module.scss";
/**
 * IconCardProps
 * - Inherits all AvatarProps except 'size' and 'shape' (fixed internally for consistency).
 * - 'badgeCount': Number or string to display in the Badge (optional).
 * - 'color': Badge color (default: #2D9CDB).
 * - 'backgroundColor': Avatar background color (default: #2D9CDB26).
 */
interface IconCardProps extends Omit<AvatarProps, "size" | "shape"> {
  badgeCount?: string | number;
  color?: BadgeProps["color"];
  backgroundColor?: BadgeProps["color"];
}

/**
 * IconCard
 * Renders a square, large Avatar with an optional badge count.
 * - Avatar uses customizable background and foreground color.
 * - Badge wraps the Avatar and displays count if provided.
 * - Designed for dashboard stats, user icons with status, etc.
 * - Maintains consistent sizing and shape for predictable UI.
 */
export const IconCard: React.FC<IconCardProps> = ({
  badgeCount,
  color = "#2D9CDB", // Default badge color
  backgroundColor = "#2D9CDB26", // Default avatar background color
  ...rest
}) => {
  return (
    <Badge count={badgeCount} color={color} className={styles.iconCard}>
      <Avatar
        shape="square" // Fixed shape for UI consistency
        size="large" // Fixed size for card context
        {...rest} // Spread other AvatarProps
        style={{ backgroundColor, color }} // Custom background and foreground color
      />
    </Badge>
  );
};
