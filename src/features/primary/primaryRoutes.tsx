import { Outlet } from "react-router-dom";
import { IssuanceBatchFormPage } from "./issuance-batch-management/IssuanceBatchFormPage";
import { IssuanceBatchPage } from "./issuance-batch-management/IssuanceBatchPage";

export default [
  {
    path: "issuance-batch-management",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <IssuanceBatchPage />,
      },
      {
        path: "create",
        element: <IssuanceBatchFormPage />,
      },
      {
        path: "update/:id",
        element: <IssuanceBatchFormPage />,
      },
    ],
  },
];
