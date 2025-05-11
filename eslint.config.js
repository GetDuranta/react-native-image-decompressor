
module.exports = [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-native": require("eslint-plugin-react-native"),
    },
    rules: {
      // TypeScript Rules
      "no-dupe-class-members": "off",
      "no-undef": "off",

      // React
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/no-unstable-nested-components": [
        "error",
        {
          allowAsProps: true,
        },
      ],

      // React Native
      "react-native/no-color-literals": "off",

      // Other Rules
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-labels": ["error", { allowLoop: true }],
      "no-void": "off",
    },
    settings: {
      react: {
        pragma: "React",
        version: "detect",
      },
    },
    ignores: ["node_modules/", "lib/", "ios/", "android/", ".vscode",
      "babel.config.js", "metro.config.js", "jest.config.js"],
  },
];
