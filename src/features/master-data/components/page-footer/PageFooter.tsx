import { Flex } from "antd";
import type { ReactNode } from "react";

interface PageFooterProps {
  children: ReactNode;
}
export const PageFooter = ({ children }: PageFooterProps) => {
  return (
    <Flex
      align="center"
      justify="flex-end"
      gap={10}
      style={{
        padding: "16px 20px 0",
        boxShadow: "0px -5px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      {children}
    </Flex>
  );
};
