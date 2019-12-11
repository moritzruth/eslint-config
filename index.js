/* eslint-disable quote-props */

module.exports = {
  extends: ["eslint:recommended"],
  plugins: [
    "markdown",
    "unicorn",
    "import"
  ],
  rules: {
    "unicorn/catch-error-name": "warn",
    "unicorn/consistent-function-scoping": "warn",
    "unicorn/custom-error-definition": "warn",
    "unicorn/error-message": "warn",
    "unicorn/escape-case": "warn",
    "unicorn/expiring-todo-comments": "warn",
    "unicorn/explicit-length-check": "warn",
    "unicorn/filename-case": ["warn", { cases: { camelCase: true, kebabCase: true } }],
    "unicorn/import-index": "warn",
    "unicorn/new-for-builtins": "warn",
    "unicorn/no-abusive-eslint-disable": "warn",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-console-spaces": "warn",
    "unicorn/no-fn-reference-in-iterator": "error",
    "unicorn/no-for-loop": "warn",
    "unicorn/no-hex-escape": "warn",
    "unicorn/no-keyword-prefix": "warn",
    "unicorn/no-nested-ternary": "warn",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-process-exit": "warn",
    "unicorn/no-unreadable-array-destructuring": "off",
    "unicorn/no-unsafe-regex": "error",
    "unicorn/no-unused-properties": "off",
    "unicorn/no-zero-fractions": "warn",
    "unicorn/number-literal-case": "warn",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-dataset": "warn",
    "unicorn/prefer-event-key": "error",
    "unicorn/prefer-exponentiation-operator": "warn",
    "unicorn/prefer-flat-map": "error",
    "unicorn/prefer-includes": "warn",
    "unicorn/prefer-negative-index": "warn",
    "unicorn/prefer-node-append": "warn",
    "unicorn/prefer-node-remove": "warn",
    "unicorn/prefer-query-selector": "warn",
    "unicorn/prefer-reflect-apply": "warn",
    "unicorn/prefer-spread": "warn",
    "unicorn/prefer-starts-ends-with": "warn",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-trim-start-end": "warn",
    "unicorn/prefer-type-error": "warn",
    "unicorn/prevent-abbreviations": "warn",
    "unicorn/regex-shorthand": "warn",
    "unicorn/throw-new-error": "warn",
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-restricted-paths": "off",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "off",
    "import/no-internal-modules": "off",
    "import/no-webpack-loader-syntax": "warn",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "warn",
    "import/no-relative-parent-imports": "off",
    "import/no-unused-modules": "off",
    "import/export": "error",
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/first": "warn",
    "import/exports-last": "off",
    "import/no-duplicates": "off",
    "import/no-namespace": "off",
    "import/extensions": ["warn", "ignorePackages", { "js": "never" }],
    "import/order": "warn",
    "import/newline-after-import": "warn",
    "import/prefer-default-export": "off",
    "import/max-dependencies": "off",
    "import/no-unassigned-import": "off",
    "import/no-named-default": "warn",
    "import/no-default-export": "warn",
    "import/no-named-export": "off",
    // Not needed because of import/no-default-export
    "import/no-anonymous-default-export": "off",
    "import/group-exports": "off",
    "import/dynamic-import-chunkname": "off",
    "no-await-in-loop": "warn",
    "no-dupe-else-if": "error",
    "no-extra-parens": ["warn", "all", { nestedBinaryExpressions: true }],
    "no-import-assign": "off",
    "no-setter-return": "error",
    "no-template-curly-in-string": "warn",
    "accessor-pairs": "warn",
    "array-callback-return": "warn",
    "class-methods-use-this": "warn",
    "consistent-return": "warn",
    "default-param-last": "warn",
    "dot-location": ["warn", "property"],
    "dot-notation": "warn",
    "eqeqeq": "error",
    "grouped-accessor-pairs": "warn",
    "guard-for-in": "warn",
    "no-constructor-return": "error",
    "no-else-return": "warn",
    // See import/no-duplicates
    "no-eval": "warn",
    "no-extend-native": "error",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-floating-decimal": "warn",
    "no-implicit-coercion": "warn",
    "no-implied-eval": "warn",
    "no-invalid-this": "warn",
    "no-iterator": "error",
    "no-loop-func": "warn",
    "no-multi-spaces": "warn",
    "no-multi-str": "warn",
    "no-new": "error",
    "no-new-func": "warn",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "warn",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "warn",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-concat": "warn",
    "no-useless-return": "warn",
    "no-void": "error",
    "prefer-promise-reject-errors": "error",
    "require-await": "warn",
    "yoda": "warn",
    "init-declarations": "warn",
    "no-shadow": "warn",
    "no-undef-init": "warn",
    "callback-return": "error",
    "no-buffer-constructor": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-mixed-requires": "warn",
    "no-sync": "warn",
    "array-bracket-newline": "warn",
    "array-bracket-spacing": "warn",
    "array-element-newline": ["warn", "consistent"],
    "block-spacing": "warn",
    "brace-style": "warn",
    "camelcase": ["warn", { ignoreDestructuring: true }],
    "capitalized-comments": "warn",
    "comma-dangle": "warn",
    "comma-spacing": "warn",
    "comma-style": "warn",
    "computed-property-spacing": ["warn", "never", { enforceForClassMembers: true }],
    "consistent-this": ["warn", "self"],
    "eol-last": "warn",
    "func-call-spacing": "warn",
    "func-name-matching": "warn",
    "func-names": ["warn", "as-needed"],
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "function-call-argument-newline": ["warn", "consistent"],
    "function-paren-newline": ["warn", "multiline"],
    "implicit-arrow-linebreak": "warn",
    "indent": [
      "warn", 2, {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "linebreak-style": "error",
    "lines-between-class-members": "warn",
    "max-len": ["warn", { code: 120 }],
    "new-parens": "warn",
    "newline-per-chained-call": "warn",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "warn",
    "no-lonely-if": "warn",
    "no-mixed-operators": "warn",
    "no-multi-assign": "warn",
    "no-negated-condition": "warn",
    "no-new-object": "warn",
    "no-plusplus": "warn",
    "no-trailing-spaces": "warn",
    "no-unneeded-ternary": "warn",
    "nonblock-statement-body-position": "warn",
    "object-curly-newline": ["warn", { multiline: true }],
    "object-curly-spacing": ["warn", "always"],
    "one-var": ["warn", "never"],
    "operator-assignment": "warn",
    "operator-linebreak": "warn",
    "padded-blocks": ["warn", "never"],
    "prefer-exponentiation-operator": "warn",
    "prefer-object-spread": "warn",
    "quote-props": ["warn", "consistent-as-needed"],
    "quotes": "warn",
    "semi": ["warn", "always", { omitLastInOneLineBlock: false }],
    "semi-spacing": "warn",
    "semi-style": "warn",
    "space-before-blocks": "warn",
    "space-before-function-paren": "warn",
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": ["warn", { words: true, nonwords: false }],
    "spaced-comment": "warn",
    "switch-colon-spacing": "warn",
    "template-tag-spacing": "warn",
    "unicode-bom": "warn",
    "arrow-body-style": "warn",
    "arrow-parens": ["warn", "as-needed", { requireForBlockBody: false }],
    "arrow-spacing": "warn",
    "generator-star-spacing": ["warn", { before: false, after: true }],
    "no-whitespace-before-property": "warn",
    "no-useless-computed-key": ["warn", { enforceForClassMembers: true }],
    "no-useless-constructor": "warn",
    "no-useless-rename": "warn",
    "no-var": "error",
    "object-shorthand": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "require-yield": "error",
    "rest-spread-spacing": "warn",
    "template-curly-spacing": "warn",
    "yield-star-spacing": "warn",
    // See import/no-duplicates
    "no-duplicate-imports": "off",
    // See unicorn/no-process-exit
    "no-process-exit": "off",
    // See unicorn/no-nested-ternary
    "no-nested-ternary": "off",
    "no-multiple-empty-lines": [
      "warn", {
        "max": 1,
        "maxEOF": 0,
        "maxBOF": 0
      }
    ]
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "unicorn/filename-case": ["warn", { cases: { pascalCase: true, kebabCase: true } }],
        "import/no-default-export": "off"
      }
    }
  ]
};
