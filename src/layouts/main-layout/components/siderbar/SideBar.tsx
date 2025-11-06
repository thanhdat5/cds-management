import { APP_MENU } from "@app/configs";
import { APP_LAYOUT_CONFIG } from "@layouts/main-layout/constants";
import { Grid, Layout, Menu, type MenuProps } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../logo/Logo";
import styles from "./Sidebar.module.scss";
const { Sider } = Layout;
const { useBreakpoint } = Grid;
export const Sidebar = () => {
  const screens = useBreakpoint();
  const items: MenuProps["items"] = useMemo(
    () =>
      Object.keys(APP_MENU).map((key) => {
        const children = APP_MENU[key]?.children
          ?.filter((child) => child.hidden !== true)
          ?.map((child) => {
            return {
              key: `${APP_MENU[key].url}/${child.url}`,
              label: (
                <Link to={`${APP_MENU[key].url}/${child.url}`}>
                  {child.label}
                </Link>
              ),
            };
          });
        return {
          key: APP_MENU[key].url,
          icon: APP_MENU[key].icon,
          label: children?.length ? (
            APP_MENU[key].label
          ) : (
            <Link to={APP_MENU[key].url}>{APP_MENU[key].label}</Link>
          ),
          children,
        };
      }),
    []
  );
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const menuKeys = useMemo<{ open: string[]; selected: string }>(() => {
    const pathName = location.pathname;
    const open =
      items
        .filter((item) => pathName.includes(`${item?.key}`))
        ?.map((item) => item?.key?.toString() || "") || [];
    let selected = pathName;
    Object.keys(APP_MENU).forEach((key) => {
      APP_MENU[key]?.children?.forEach((child) => {
        if (child.url && pathName.includes(child.url)) {
          selected = `${APP_MENU[key].url}/${child.url}`;
        }
      });
    });
    return { open, selected };
  }, [items, location.pathname]);
  const [openKeys, setOpenKeys] = useState(menuKeys.open || []);
  const [selectedKeys, setSelectedKeys] = useState([menuKeys.selected]);

  useEffect(() => {
    setSelectedKeys([menuKeys.selected]);
    setOpenKeys(menuKeys.open || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

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
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};
