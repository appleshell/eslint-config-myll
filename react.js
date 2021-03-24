module.exports = {
  extends: ["alloy", "alloy/react", "./base.js"],
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "no-invalid-this": off,
  },
};
