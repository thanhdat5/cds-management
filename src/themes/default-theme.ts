import type { ThemeConfig } from "antd";

export const defaultTheme: ThemeConfig = {
  token: {
    colorPrimary: "#005FD0",
  },
  components: {
    Button: {
      // Button height
      controlHeight: 46, // px
      // Padding for left and right
      paddingInline: 24, // px
      // Padding for top and bottom
      paddingBlock: 6, // px
      // Border radius
      borderRadius: 6, // px
      // iconGap: 4,
      iconGap: 8,
      fontSizeIcon: 24,
      // fontFamily: "Inter",
      fontFamily: "Barlow",
      // fontWeight: 600,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 24,
    },
  },
};
