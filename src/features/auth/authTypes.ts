export interface LoginRequest {
  username: string;
  password: string;
}

export interface EmailVerificationRequest {
  otp: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface AuthInfo {
  username: string;
  permission?: number[];
}
