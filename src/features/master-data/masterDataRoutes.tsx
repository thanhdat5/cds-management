import { Outlet } from "react-router-dom";
import { MasterDataPage } from "./master-data/MasterDataPage";
import { UserPage } from "./user/UserPage";
import { UserFormPage } from "./user/UserFormPage";
import { PermissionPage } from "./permission/PermissionPage";
import { PermissionFormPage } from "./permission/PermissionFormPage";
import { TenorPage } from "./tenor/TenorPage";
import { TenorFormPage } from "./tenor/TenorFormPage";

export default [
  {
    index: true,
    element: <MasterDataPage />,
  },
  {
    path: "user",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <UserPage />,
      },
      {
        path: "create",
        element: <UserFormPage />,
      },
      {
        path: "update/:id",
        element: <UserFormPage />,
      },
    ],
  },
  {
    path: "permission",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <PermissionPage />,
      },
      {
        path: "create",
        element: <PermissionFormPage />,
      },
      {
        path: "update/:id",
        element: <PermissionFormPage />,
      },
    ],
  },
  {
    path: "tenor",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <TenorPage />,
      },
      {
        path: "create",
        element: <TenorFormPage />,
      },
      {
        path: "update/:id",
        element: <TenorFormPage />,
      },
    ],
  },
];
