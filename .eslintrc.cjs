module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:@trivago/prettier-plugin-sort-imports",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "react-refresh", "@typescript-eslint", "prettier", "@tanstack/query"],
  rules: {
    quotes: ["error", "double"],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/prefer-query-object-syntax": "error",
    "prettier/prettier": 2,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@src", "./src"]],
        extensions: [".ts", ".js", ".json", ".tsx", "ts"],
      },
    },
  },
};
