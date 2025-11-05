import React, { type MouseEvent } from "react";
import styles from "./Steps.module.scss";

/**
 * Props for the StepItem component, which renders a single custom arrow-shaped step with outlined or filled (active) style.
 */
interface StepItemProps {
  /** Text displayed at the center of the step */
  label: string;
  /** If true, shows the step as filled (active); if false, outlined (default) */
  active?: boolean;
  /** If true, disables the step and dims its appearance */
  disabled?: boolean;
  /** Click event handler for the step */
  onClick?: (event: MouseEvent) => void;
}

/**
 * ArrowSVG
 * Renders left or right SVG arrow for StepItem.
 * @param direction "left" | "right"
 * @param fillColor Background color for arrow
 * @param strokeColor Border color for arrow
 */
const ArrowSVG: React.FC<{
  direction: "left" | "right";
  fillColor: string;
  strokeColor: string;
}> = ({ direction, fillColor, strokeColor }) => {
  if (direction === "left") {
    // Left arrow
    return (
      <svg
        width="20"
        height="40"
        viewBox="0 0 20 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.86426 0.5H274.743C276.895 0.500105 278.943 1.42465 280.366 3.03809L290.955 15.0381C293.456 17.8732 293.456 22.1268 290.955 24.9619L280.366 36.9619C278.943 38.5753 276.895 39.4999 274.743 39.5H4.86426C1.85045 39.5 0.245516 35.9445 2.23926 33.6846L11.6865 22.9775C13.1875 21.2764 13.1875 18.7236 11.6865 17.0225L2.23926 6.31543C0.245519 4.05547 1.85046 0.5 4.86426 0.5Z"
          fill={fillColor}
          stroke={strokeColor}
        />
      </svg>
    );
  }
  // Right arrow
  return (
    <svg
      width="20"
      height="40"
      viewBox="0 0 20 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-269.136 0.5H0.743164C2.89487 0.500105 4.94257 1.42465 6.36621 3.03809L16.9551 15.0381C19.4564 17.8732 19.4564 22.1268 16.9551 24.9619L6.36621 36.9619C4.94258 38.5753 2.89487 39.4999 0.743164 39.5H-269.136C-272.15 39.5 -273.754 35.9445 -271.761 33.6846L-262.313 22.9775C-260.813 21.2764 -260.813 18.7236 -262.313 17.0225L-271.761 6.31543C-273.754 4.05547 -272.15 0.5 -269.136 0.5Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

/**
 * StepItem
 * Renders a single step with arrow-shaped ends and a label.
 * - Outlined state (default): white background, blue border, blue text.
 * - Active state: blue background, white text.
 * - ArrowSVG used for left and right ends for reusability and clarity.
 * - Layout and colors handled via CSS module for maintainability.
 */
export const StepItem: React.FC<StepItemProps> = ({
  label,
  active,
  disabled,
  onClick,
}) => {
  // Colors for states
  const strokeColor = disabled
    ? "var(--cds-color-text-secondary)"
    : "var(--cds-color-primary)";
  const fillColor = active ? "var(--cds-color-primary)" : "white";
  const textColor = active ? "white" : strokeColor;

  return (
    <button
      type="button"
      className={`${styles.stepItem} ${active ? styles.stepItemActive : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {/* Left arrow */}
      <ArrowSVG
        direction="left"
        fillColor={fillColor}
        strokeColor={strokeColor}
      />
      {/* Body */}
      <div className={styles.stepItemBody} style={{ color: textColor }}>
        {label}
      </div>
      {/* Right arrow */}
      <ArrowSVG
        direction="right"
        fillColor={fillColor}
        strokeColor={strokeColor}
      />
    </button>
  );
};

StepItem.displayName = "StepItem";
