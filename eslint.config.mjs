import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  {
    ignores: [".next/*", "node_modules/*", "!src/**/*"],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  stylisticJs.configs.customize({
    arrowParens: true,
    indent: 2,
    semi: true,
  }),
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    plugins: {
      "@stylistic": stylisticJs,
    },
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "@stylistic/quotes": [
        "error",
        "double",
        {
          allowTemplateLiterals: true,
        },
      ],
      "@stylistic/jsx-quotes": ["error"],
      "@stylistic/semi": ["error"],
      "@stylistic/comma-dangle": ["none"],
      "@stylistic/keyword-spacing": ["error"],
      "@stylistic/space-before-blocks": ["error"],
      "@stylistic/space-infix-ops": ["error"],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "comma",
            requireLast: true,
          },
          singleline: {
            delimiter: "comma",
            requireLast: false,
          },
          overrides: {
            interface: {
              multiline: {
                delimiter: "semi",
                requireLast: true,
              },
            },
            typeLiteral: {
              multiline: {
                delimiter: "semi",
                requireLast: true,
              },
            },
          },
        },
      ],
    },
  },
  ...compat.config({
    extends: ["next", "next/core-web-vitals"],
  }),
  {
    files: ["**/*.js", "**/*.mjs"],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
