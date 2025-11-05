import { AccessDeniedPage } from "@common/pages/AccessDeniedPage";
import { NotFoundPage } from "@common/pages/NotFoundPage";
import { TestPage } from "@common/pages/TestPage";
import authRoutes from "@features/auth/authRoutes";
import dashboardRoutes from "@features/dashboard/dashboardRoutes";
import masterDataRoutes from "@features/master-data/masterDataRoutes";
import primaryRoutes from "@features/primary/primaryRoutes";
import { AuthLayout } from "@layouts/auth-layout/AuthLayout";
import { MainLayout } from "@layouts/main-layout/MainLayout";
import { createBrowserRouter, Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [...authRoutes, { path: "*", element: <NotFoundPage /> }],
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      ...dashboardRoutes,
      {
        path: "master-data",
        element: <Outlet />,
        children: [...masterDataRoutes],
      },
      {
        path: "primary",
        element: <Outlet />,
        children: [...primaryRoutes],
      },
      { path: "test", element: <TestPage /> },
      { path: "403", element: <AccessDeniedPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
