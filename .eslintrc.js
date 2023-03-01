module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: ["airbnb", "airbnb/hooks", "plugin:@typescript-eslint/recommended", "plugin:@next/next/recommended", "next", "next/core-web-vitals", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["prettier", "@typescript-eslint", "import"],
    rules: {
        "import/extensions": "off",
        "react/function-component-definition": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "styles/**",
                        group: "object",
                        position: "before",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
                "newlines-between": "always",
                warnOnUnassignedImports: true,
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
    settings: {
        "import/resolver": {
            typescript: {},
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};
