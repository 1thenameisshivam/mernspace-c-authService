// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

// Resolve the directory name

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        ignores: ["dist", "node_modules", "eslint.config.mjs"],
    },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                // @ts-ignore
                tsconfigRootDir: import.meta.__dirname,
            },
        },
        rules: {
            // "no-console": "error",
            // "dot-notation": "error",
        },
    },
);
