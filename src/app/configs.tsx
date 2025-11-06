import {
    AlignLeftOutlined,
    CalendarOutlined,
    FileOutlined,
    HomeOutlined,
    PieChartOutlined,
    SettingOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";

export interface AppMenuItem {
  icon: ReactNode;
  url: string;
  label: string;
  children?: { url: string; label: string; hidden?: boolean; icon?: string }[];
}
export interface AppMenu {
  [key: string]: AppMenuItem;
}
export const APP_MENU: AppMenu = {
  DASHBOARD: {
    icon: <HomeOutlined />,
    url: "/app/dashboard",
    label: "Dashboard",
  },
  PRIMARY: {
    icon: <AlignLeftOutlined />,
    url: "/app/primary",
    label: "Quản lý sơ cấp",
    children: [
      { url: "issuance-batch-management", label: "Quản lý lô phát hành" },
      { url: "issuance-approval", label: "Phê duyệt phát hành" },
      { url: "matured-batch-settlement", label: "Tất toán lô đến hạn" },
      { url: "interest-payment-schedule", label: "Lịch trả lãi" },
      { url: "working-day-management", label: "Quản lý ngày làm việc" },
      { url: "primary-purchase-management", label: "Quản lý mua sơ cấp" },
      { url: "primary-sale-management", label: "Quản lý bán sơ cấp" },
      { url: "automated-job", label: "Job tự động" },
    ],
  },
  SECONDARY: {
    icon: <FileOutlined />,
    url: "/app/secondary",
    label: "Quản lý thứ cấp",
    children: [{ url: "todo", label: "Todo" }],
  },
  MASTER_DATA: {
    icon: <UsergroupAddOutlined />,
    url: "/app/master-data",
    label: "Danh mục",
    children: [
      { url: "user", label: "Người sử dung", icon: `/icons/icon-user.svg` },
      {
        url: "permission",
        label: "Phân quyền",
        icon: `/icons/icon-permission.svg`,
      },
      { url: "tenor", label: "Kỳ hạn", icon: `/icons/icon-tenor.svg` },
      { url: "currency", label: "Tiền tệ", icon: `/icons/icon-currency.svg` },
      {
        url: "denomination",
        label: "Mệnh giá",
        icon: `/icons/icon-denomination.svg`,
      },
      {
        url: "allocation",
        label: "Dự chi/Phân bổ",
        icon: `/icons/icon-allocation.svg`,
      },
      {
        url: "unit",
        label: "Đơn vị",
        hidden: true,
        icon: `/icons/icon-unit.svg`,
      },
      { url: "holiday", label: "Ngày nghỉ", icon: `/icons/icon-holiday.svg` },
      {
        url: "customer",
        label: "Khách hàng",
        icon: `/icons/icon-customer.svg`,
      },
      {
        url: "interest-type",
        label: "Loại lãi suất",
        hidden: true,
        icon: `/icons/icon-interest-type.svg`,
      },
      {
        url: "partner",
        label: "Kênh đối tác",
        hidden: true,
        icon: `/icons/icon-partner.svg`,
      },
      {
        url: "secondary-intermediary",
        label: "Trung gian thứ cấp",
        hidden: true,
        icon: `/icons/icon-secondary-intermediary.svg`,
      },
      {
        url: "pricing-method",
        label: "Phương thức tính giá",
        hidden: true,
        icon: `/icons/icon-pricing-method.svg`,
      },
      {
        url: "matching-method",
        label: "Phương pháp khớp lệnh",
        hidden: true,
        icon: `/icons/icon-matching-method.svg`,
      },
      {
        url: "product-configuration",
        label: "Cấu hình sản phẩm",
        hidden: true,
        icon: `/icons/icon-product-configuration.svg`,
      },
      {
        url: "transaction-limit",
        label: "Hạn mức giao dịch",
        hidden: true,
        icon: `/icons/icon-transaction-limit.svg`,
      },
      {
        url: "product-room",
        label: "Room hàng",
        hidden: true,
        icon: `/icons/icon-product-room.svg`,
      },
      { url: "", label: "Danh mục khác", icon: `/icons/icon-default.svg` },
    ],
  },
  CONFIGS: {
    icon: <SettingOutlined />,
    url: "/app/configs",
    label: "Cấu hình",
    children: [{ url: "todo", label: "Todo" }],
  },
  JOBS: {
    icon: <CalendarOutlined />,
    url: "/app/jobs",
    label: "Job định kỳ",
    children: [{ url: "todo", label: "Todo" }],
  },
  REPORTS: {
    icon: <PieChartOutlined />,
    url: "/app/reports",
    label: "Báo cáo, phân tích",
    children: [{ url: "todo", label: "Todo" }],
  },
};
