import {
  Avatar,
  Flex,
  Typography,
  type AvatarProps,
  type BadgeProps,
} from "antd";

/**
 * NameTagProps
 * - Inherits all AvatarProps except 'size' and 'shape' (these are controlled internally).
 * - 'avatarColor': Sets the background color of the Avatar (default: #d81b60).
 * - 'name': Display name next to the avatar.
 */
interface NameTagProps extends Omit<AvatarProps, "size" | "shape"> {
  avatarColor?: BadgeProps["color"];
  name: string;
}

/**
 * NameTag
 * Renders a small, circular Avatar with a custom background color and a name label.
 * - Avatar is always small and circular for consistency.
 * - Uses Ant Design Flex for horizontal alignment and spacing.
 * - Designed for user or member tag displays in lists, cards, etc.
 */
export const NameTag: React.FC<NameTagProps> = ({
  avatarColor = "#d81b60",
  name,
  ...rest
}) => {
  return (
    <Flex align="center" gap={4}>
      <Avatar
        shape="circle" // Avatar always circular
        size="small" // Avatar always small
        style={{ backgroundColor: avatarColor }} // Custom background color
        {...rest} // Allow other AvatarProps (except size/shape)
      />
      <Typography.Text>{name}</Typography.Text>
    </Flex>
  );
};
