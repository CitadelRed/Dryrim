import globals from "globals";
import pluginJs from "@eslint/js";


export default [
<<<<<<< HEAD
  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
=======
>>>>>>> 6ad4b34fd95184bfdb685a7c1a39bd9671bec9b2
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];