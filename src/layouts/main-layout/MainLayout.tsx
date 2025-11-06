import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/siderbar/SideBar";
const { Content } = Layout;
export const MainLayout = () => {
  return (
    <Layout className={styles.appLayout}>
      <Sidebar />
      <Layout>
        <Header />
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
