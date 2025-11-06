import { Outlet } from "react-router-dom";
import { CurrencyFormPage } from "./currency/CurrencyFormPage";
import { CurrencyPage } from "./currency/CurrencyPage";
import { DenominationFormPage } from "./denomination/DenominationFormPage";
import { DenominationPage } from "./denomination/DenominationPage";
import { HolidayFormPage } from "./holiday/HolidayFormPage";
import { HolidayPage } from "./holiday/HolidayPage";
import { MasterDataPage } from "./master-data/MasterDataPage";
import { OrganizationFormPage } from "./organization/OrganizationFormPage";
import { OrganizationPage } from "./organization/OrganizationPage";
import { PermissionFormPage } from "./permission/PermissionFormPage";
import { PermissionPage } from "./permission/PermissionPage";
import { TenorFormPage } from "./tenor/TenorFormPage";
import { TenorPage } from "./tenor/TenorPage";
import { UserFormPage } from "./user/UserFormPage";
import { UserPage } from "./user/UserPage";

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
  {
    path: "currency",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <CurrencyPage />,
      },
      {
        path: "create",
        element: <CurrencyFormPage />,
      },
      {
        path: "update/:id",
        element: <CurrencyFormPage />,
      },
    ],
  },
  {
    path: "denomination",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <DenominationPage />,
      },
      {
        path: "create",
        element: <DenominationFormPage />,
      },
      {
        path: "update/:id",
        element: <DenominationFormPage />,
      },
    ],
  },
  {
    path: "holiday",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <HolidayPage />,
      },
      {
        path: "create",
        element: <HolidayFormPage />,
      },
      {
        path: "update/:id",
        element: <HolidayFormPage />,
      },
    ],
  },
  {
    path: "organization",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <OrganizationPage />,
      },
      {
        path: "create",
        element: <OrganizationFormPage />,
      },
      {
        path: "update/:id",
        element: <OrganizationFormPage />,
      },
    ],
  },
];
