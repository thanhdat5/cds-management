import { Link } from "react-router-dom";
import styles from "./CardItem.module.scss";

interface CardItemProps {
  /**
   * Destination URL or route to navigate to when the card is clicked.
   */
  url: string;
  /**
   * Image source for the icon shown inside the card.
   * Prefer accessible images or inline SVGs when possible.
   */
  icon: string;
  /**
   * Visible label for the card. Also used as the `alt` text for the icon image.
   */
  label: string;
}

/**
 * CardItem
 *
 * Renders a clickable card (React Router `Link`) that contains an icon and a label.
 *
 * Props:
 * - data: `Item` — object containing `url`, `icon`, and `label`.
 *
 * Example:
 * <CardItem data={{ url: "/profile", icon: "/icons/user.svg", label: "Profile" }} />
 *
 * Accessibility:
 * - The `img` uses `data.label` as `alt` text to describe the icon.
 * - The component is a semantic link which supports keyboard navigation.
 */
export const CardItem = ({ url, icon, label }: CardItemProps) => {
  return (
    <Link to={url} className={styles.cardItem}>
      <div className={styles.cardIcon}>
        <img src={icon} alt={label} />
      </div>
      <div className={styles.cardLabel}>{label}</div>
    </Link>
  );
};
