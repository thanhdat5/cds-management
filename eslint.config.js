import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      import: importPlugin,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Rule to block import Button from antd
      "@/no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "antd",
              importNames: ["Button"],
              message:
                "Please use Button from @common/components instead of antd.",
            },
            {
              name: "antd",
              importNames: ["Steps"],
              message:
                "Please use Steps from @common/components instead of antd.",
            },
          ],
        },
      ],
    },
  },
  // Exclude rule in atom file
  {
    files: ["src/common/components/button/Button.tsx"],
    rules: {
      "@/no-restricted-imports": "off",
    },
  },
]);
