const { prefixKeys } = require("../utils")

// https://github.com/sindresorhus/eslint-plugin-unicorn#rules

module.exports = prefixKeys("unicorn/", {
  "better-regex": "warn",
  "catch-error-name": "warn",
  "consistent-function-scoping": "warn",
  "custom-error-definition": "warn",
  "error-message": "warn",
  "escape-case": "warn",
  "expiring-todo-comments": "warn",
  "explicit-length-check": "warn",
  "filename-case": [
    "error",
    {
      case: "kebabCase"
    }
  ],
  "import-index": "warn",
  // TODO: Uncomment when released
  // "import-style": "warn",
  "new-for-builtins": "warn",
  "no-abusive-eslint-disable": "warn",
  "no-array-instanceof": "error",
  "no-console-spaces": "warn",
  "no-fn-reference-in-iterator": "off",
  "no-for-loop": "warn",
  "no-hex-escape": "warn",
  "no-keyword-prefix": "warn",
  "no-nested-ternary": "warn",
  "no-new-buffer": "error",
  "no-object-as-default-parameter": "warn",
  "no-process-exit": "off",
  "no-unreadable-array-destructuring": "off",
  "no-unsafe-regex": "error",
  "no-unused-properties": "off",
  "no-useless-undefined": "warn",
  "no-zero-fractions": "warn",
  "number-literal-case": "warn",
  "prefer-add-event-listener": "error",
  "prefer-array-find": "warn",
  "prefer-dataset": "warn",
  "prefer-event-key": "error",
  "prefer-flat-map": "error",
  "prefer-includes": "warn",
  "prefer-modern-dom-apis": "warn",
  "prefer-negative-index": "warn",
  "prefer-node-append": "warn",
  "prefer-node-remove": "warn",
  "prefer-number-properties": "error",
  "prefer-optional-catch-binding": "warn",
  "prefer-query-selector": "warn",
  "prefer-reflect-apply": "warn",
  "prefer-replace-all": "warn",
  "prefer-set-has": "warn",
  "prefer-spread": "warn",
  "prefer-starts-ends-with": "warn",
  "prefer-string-slice": "error",
  "prefer-text-content": "error",
  "prefer-trim-start-end": "error",
  "prefer-type-error": "warn",
  "unicorn/prevent-abbreviations": ["warn", {
    replacements: {
      args: false,
      ctx: false,
      req: false,
      res: false
    }
  }],
  "string-content": "off",
  "throw-new-error": "warn"
})
