import {
  AlignLeftOutlined,
  CalendarOutlined,
  FileOutlined,
  HomeOutlined,
  PieChartOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { MASTER_DATA_CONFIG } from "@constants/app-setting";
import { APP_LAYOUT_CONFIG } from "@layouts/main-layout/constants";
import { Grid, Layout, Menu, type MenuProps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../logo/Logo";
import styles from "./Sidebar.module.scss";
const { Sider } = Layout;
const { useBreakpoint } = Grid;
export const Sidebar = () => {
  const items: MenuProps["items"] = [
    {
      key: "dashboard",
      icon: <HomeOutlined />,
      label: <Link to="/app/dashboard">Dashboard</Link>,
    },
    {
      key: "primary",
      icon: <AlignLeftOutlined />,
      label: "Quản lý sơ cấp",
      children: [
        {
          key: "2-1",
          label: (
            <Link to="/app/primary/issuance-batch-management">
              Quản lý lô phát hành
            </Link>
          ),
        },
        {
          key: "2-2",
          label: (
            <Link to="/app/primary/issuance-approval">Phê duyệt phát hành</Link>
          ),
        },
        {
          key: "2-3",
          label: (
            <Link to="/app/primary/matured-batch-settlement">
              Tất toán lô đến hạn
            </Link>
          ),
        },
        {
          key: "2-4",
          label: (
            <Link to="/app/primary/interest-payment-schedule">
              Lịch trả lãi
            </Link>
          ),
        },
        {
          key: "2-5",
          label: (
            <Link to="/app/primary/working-day-management">
              Quản lý ngày làm việc
            </Link>
          ),
        },
        {
          key: "2-6",
          label: (
            <Link to="/app/primary/primary-purchase-management">
              Quản lý mua sơ cấp
            </Link>
          ),
        },
        {
          key: "2-7",
          label: (
            <Link to="/app/primary/primary-sale-management">
              Quản lý bán sơ cấp
            </Link>
          ),
        },
        {
          key: "2-8",
          label: <Link to="/app/primary/automated-job">Job tự động</Link>,
        },
      ],
    },
    {
      key: "secondary",
      icon: <FileOutlined />,
      label: "Quản lý thứ cấp",
    },
    {
      key: "master-data",
      icon: <UsergroupAddOutlined />,
      label: "Danh mục",
      children: [
        {
          key: "all",
          label: <Link to="/app/master-data">Tất cả danh mục</Link>,
        },
        ...MASTER_DATA_CONFIG.map((item) => ({
          key: item.key,
          label: <Link to={`/app/master-data/${item.key}`}>{item.label}</Link>,
        })),
      ],
    },
    {
      key: "config",
      icon: <SettingOutlined />,
      label: "Cấu hình",
    },
    {
      key: "cron-job",
      icon: <CalendarOutlined />,
      label: "Job định kỳ",
    },
    {
      key: "report",
      icon: <PieChartOutlined />,
      label: "Báo cáo, phân tích",
    },
  ];

  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();
  const handleMenuClick = () => {
    if (!screens.lg) {
      setCollapsed(true);
    }
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      width={APP_LAYOUT_CONFIG.SIDEBAR_WIDTH}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className={styles.appSidebar}
    >
      <Logo />
      <Menu
        defaultSelectedKeys={["dashboard"]}
        theme="light"
        mode="inline"
        items={items}
        className={styles.appMenu}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};
