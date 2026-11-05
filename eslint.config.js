const globals = require("globals");
const js = require("@eslint/js");

module.exports = [
  {
    ignores: ["node_modules/**", "out/**", "coverage/**"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  }
];
