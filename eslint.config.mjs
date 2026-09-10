import coreWebVitals from "eslint-config-next/core-web-vitals";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const eslintConfig = [...coreWebVitals, eslintConfigPrettier];

export default eslintConfig;
