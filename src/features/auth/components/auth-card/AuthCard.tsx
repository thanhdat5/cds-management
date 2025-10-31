import type { ReactNode } from "react";
import styles from "./AuthCard.module.scss";
import { Link } from "react-router-dom";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
}
export const AuthCard = ({ title, description, children }: AuthCardProps) => {
  return (
    <div className={styles.inner}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {children}
      <div className={styles.back}>
        <Link to="/">Go to Login</Link>
      </div>
    </div>
  );
};
