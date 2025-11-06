import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import { APP_LAYOUT_CONFIG } from "@layouts/main-layout/constants";
import appLogo from "../../../assets/logo.svg";

export const Logo = () => {
  return (
    <Link to="/app" className={styles.appLogo}>
      <img src={appLogo} alt="CD" />
      <span>{APP_LAYOUT_CONFIG.LOGO_TEXT}</span>
    </Link>
  );
};
