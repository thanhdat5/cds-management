import type { AuthInfo } from "./authTypes";

export async function loginApi(
  email: string,
  password: string
): Promise<AuthInfo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@example.com" && password === "123456") {
        resolve({
          username: "Admin",
          permission: [1, 2, 3],
        });
      } else {
        reject(new Error("Tài khoản hoặc mật khẩu không đúng"));
      }
    }, 1000);
  });
}
