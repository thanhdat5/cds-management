import type { ThemeConfig } from "antd";

const color = {
  // Color Palettes
  colorPrimary: "#196AF6",
  colorSuccess: "#00B074",
  colorWarning: "#F7C604",
  colorError: "#FF5B5B",
  colorInfo: "#2D9CDB",
  colorBgBase: "#F3F2F7",
  colorBgContainer: "#ffffff",

  // Text colors
  colorText: "#464255",
  colorTextSecondary: "#A3A3A3",

  // Border
  colorBorder: "#D9D9D9",

  colorWhite: "#ffffff",
};
export const cdsTheme: ThemeConfig = {
  cssVar: {
    prefix: "cds",
    key: "cds-theme",
  },
  token: {
    ...color,
    // Text colors
    colorPrimaryText: color.colorPrimary,
    colorSuccessText: color.colorSuccess,
    colorWarningText: color.colorWarning,
    colorErrorText: color.colorError,
    colorInfoText: color.colorInfo,

    // Typography
    fontFamily:
      "Barlow, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSize: 14,
    lineHeight: 22 / 14,

    // Size tokens
    borderRadius: 6,
    borderRadiusLG: 8,
    controlHeight: 32,
    controlHeightLG: 40,
  },
  components: {
    Button: {
      fontWeight: 500,
      fontSize: 14,
      fontSizeLG: 16,
      lineHeight: 22 / 14,
      lineHeightLG: 24 / 16,
      iconGap: 8,
    },
    Dropdown: {
      paddingXXS: 4,
      borderRadius: 4,
      colorBgTextHover: "#f5f5f5",
      colorPrimary: color.colorPrimary,
      controlHeight: 32,
      colorBgElevated: color.colorWhite,
      lineWidth: 1,
      lineType: "solid",
    },
    Breadcrumb: {
      colorText: color.colorText,
      fontSize: 14,
      lineHeight: 22 / 14,
      colorLink: color.colorText,
      colorLinkHover: color.colorPrimary,
      colorTextDescription: color.colorTextSecondary,
      marginXS: 8,
    },
    Tabs: {
      padding: 12,
      paddingLG: 16,
      colorPrimary: color.colorPrimary,
      colorBorderSecondary: color.colorBorder,
      lineHeight: 22 / 14,
    },
    Tree: {
      colorBgContainer: color.colorWhite,
      controlHeightSM: 24,
      colorPrimary: color.colorPrimary,
      colorBgTextHover: "#f5f5f5",
      paddingXS: 8,
      controlHeight: 32,
      colorBorder: color.colorBorder,
    },
    Form: {
      margin: 24,
      marginLG: 24,
      labelRequiredMarkColor: color.colorError,
      verticalLabelPadding: "0 0 4px 0",
      lineHeight: 22 / 14,
    },
    Input: {
      fontSizeIcon: 16,
      colorIcon: color.colorTextSecondary,
    },
    Typography: {
      fontSizeHeading1: 30,
      lineHeightHeading1: 36 / 30,

      fontSizeHeading2: 24,
      lineHeightHeading2: 30 / 24,

      fontSizeHeading3: 20,
      lineHeightHeading3: 26 / 20,

      fontSizeHeading4: 16,
      lineHeightHeading4: 24 / 16,

      fontSizeHeading5: 14,
      lineHeightHeading5: 22 / 14,

      titleMarginTop: 0,
      titleMarginBottom: 0,
    },
    Avatar: {
      borderRadiusLG: 10,
      containerSizeSM: 20,
    },
  },
};
