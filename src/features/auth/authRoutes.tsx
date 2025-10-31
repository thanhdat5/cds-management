import { EmailVerificationPage } from "./email-verification/EmailVerificationPage";
import { ForgotPasswordPage } from "./forgot-password/ForgotPasswordPage";
import { LoginPage } from "./login/LoginPage";

export default [
  {
    index: true,
    element: <LoginPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "email-verification",
    element: <EmailVerificationPage />,
  },
];
