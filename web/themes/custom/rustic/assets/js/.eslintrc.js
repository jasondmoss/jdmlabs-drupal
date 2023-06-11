module.exports = {
    "parserOptions": {
        "ecmaVersion": 2022
    },
    "env": {
        "amd": true,
        "browser": true,
        "node": true,
        "shared-node-browser": true,
        "es2022": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "jQuery": true,
        "$": true,
        "Drupal": true
    },
    "extends": [ "eslint:recommended" ],
    "rules": {
        "accessor-pairs": 2,
        "array-bracket-newline": 0,
        "array-bracket-spacing": 0,
        "array-callback-return": 0,
        "array-element-newline": 0,
        "arrow-body-style": 0,
        "arrow-parens": [
            2,
            "always"
        ],
        "arrow-spacing": [
            2,
            {
                "after": true,
                "before": true
            }
        ],
        "block-scoped-var": 0,
        "block-spacing": [
            2,
            "always"
        ],
        "brace-style": 0,
        "callback-return": 0,
        "camelcase": 2,
        "capitalized-comments": 0,
        "class-methods-use-this": 2,
        "comma-dangle": 0,
        "comma-spacing": 0,
        "comma-style": [
            2,
            "last"
        ],
        "complexity": 0,
        "computed-property-spacing": [
            2,
            "never"
        ],
        "consistent-return": 0,
        "consistent-this": 0,
        "curly": 2,
        "default-case": 0,
        "dot-location": 2,
        "dot-notation": 2,
        "eol-last": 2,
        "eqeqeq": 2,
        "func-call-spacing": 2,
        "func-name-matching": 2,
        "func-names": 0,
        "func-style": [
            2,
            "declaration", {
                "allowArrowFunctions": true
            }
        ],
        "function-paren-newline": 0,
        "generator-star-spacing": 2,
        "global-require": 0,
        "guard-for-in": 0,
        "handle-callback-err": 2,
        "id-blacklist": 2,
        "id-length": 0,
        "id-match": 2,
        "implicit-arrow-linebreak": [
            2,
            "beside"
        ],
        "indent": 0,
        "indent-legacy": 0,
        "init-declarations": 0,
        "jsx-quotes": 2,
        "key-spacing": 2,
        "keyword-spacing": [
            2,
            {
                "after": true,
                "before": true
            }
        ],
        "line-comment-position": 0,
        "linebreak-style": [
            0,
            "unix"
        ],
        "lines-around-comment": 0,
        "lines-around-directive": 0,
        "lines-between-class-members": 2,
        "max-classes-per-file": 2,
        "max-depth": 2,
        "max-len": 0,
        "max-lines": 0,
        "max-lines-per-function": 0,
        "max-nested-callbacks": 2,
        "max-params": 0,
        "max-statements": 0,
        "max-statements-per-line": 0,
        "multiline-comment-style": 0,
        "multiline-ternary": 0,
        "new-parens": 2,
        "newline-after-var": 0,
        "newline-before-return": 0,
        "newline-per-chained-call": 2,
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-async-promise-executor": 2,
        "no-await-in-loop": 2,
        "no-bitwise": 2,
        "no-buffer-constructor": 2,
        "no-caller": 2,
        "no-catch-shadow": 2,
        "no-confusing-arrow": 2,
        "no-continue": 2,
        "no-div-regex": 2,
        "no-duplicate-imports": 2,
        "no-else-return": 0,
        "no-empty": [
            2,
            {
                "allowEmptyCatch": true
            }
        ],
        "no-empty-function": 0,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 0,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-extra-parens": 0,
        "no-floating-decimal": 2,
        "no-implicit-coercion": 2,
        "no-implicit-globals": 0,
        "no-implied-eval": 2,
        "no-inline-comments": 0,
        "no-inner-declarations": [
            0,
            "functions"
        ],
        "no-invalid-this": 0,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-lonely-if": 0,
        "no-loop-func": 2,
        "no-magic-numbers": 0,
        "no-misleading-character-class": 2,
        "no-mixed-operators": 0,
        "no-mixed-requires": 2,
        "no-multi-assign": 0,
        "no-multi-spaces": [
            0,
            {
                "ignoreEOLComments": true
            }
        ],
        "no-multi-str": 0,
        // "no-multiple-empty-lines": 0,
        "no-multiple-empty-lines": [
            2,
            {
                "max": 2,
                "maxEOF": 1
            }
        ],
        "no-native-reassign": 2,
        "no-negated-condition": 0,
        "no-negated-in-lhs": 2,
        "no-nested-ternary": 0,
        "no-new": 0,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-wrappers": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 0,
        "no-path-concat": 2,
        "no-plusplus": 0,
        "no-process-env": 2,
        "no-process-exit": 2,
        "no-proto": 2,
        "no-prototype-builtins": 0,
        "no-restricted-globals": 2,
        "no-restricted-imports": 2,
        "no-restricted-modules": 2,
        "no-restricted-properties": 2,
        "no-restricted-syntax": 2,
        "no-return-assign": 2,
        "no-return-await": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow": 0,
        "no-shadow-restricted-names": 2,
        "no-spaced-func": 0,
        "no-sync": 2,
        "no-tabs": 2,
        "no-template-curly-in-string": 2,
        "no-ternary": 0,
        "no-throw-literal": 2,
        "no-trailing-spaces": 2,
        "no-undef-init": 2,
        "no-undefined": 0,
        "no-underscore-dangle": 0,
        "no-unmodified-loop-condition": 2,
        "no-unneeded-ternary": 2,
        "no-unused-expressions": 2,
        "no-use-before-define": 0,
        "no-useless-call": 2,
        "no-useless-catch": 2,
        "no-useless-computed-key": 2,
        "no-useless-concat": 0,
        "no-useless-constructor": 2,
        "no-useless-rename": 2,
        "no-useless-return": 2,
        "no-var": 0,
        "no-void": 0,
        "no-warning-comments": 0,
        "no-whitespace-before-property": 0,
        "no-with": 2,
        "nonblock-statement-body-position": 2,
        "object-curly-newline": 2,
        "object-curly-spacing": [
            2,
            "always"
        ],
        "object-property-newline": 0,
        "object-shorthand": 0,
        "one-var": 0,
        "one-var-declaration-per-line": [
            2,
            "initializations"
        ],
        "operator-assignment": 0,
        "operator-linebreak": [
            2,
            "after"
        ],
        "padded-blocks": 0,
        "padding-line-between-statements": 2,
        "prefer-arrow-callback": 0,
        "prefer-const": 0,
        "prefer-destructuring": 0,
        "prefer-numeric-literals": 2,
        "prefer-object-spread": 2,
        "prefer-promise-reject-errors": 2,
        "prefer-reflect": 0,
        "prefer-rest-params": 0,
        "prefer-spread": 2,
        "prefer-template": 0,
        "quote-props": 0,
        "quotes": [
            0,
            "double"
        ],
        "radix": [
            2,
            "always"
        ],
        "require-atomic-updates": 2,
        "require-await": 2,
        "require-jsdoc": 0,
        "require-unicode-regexp": 0,
        "rest-spread-spacing": 2,
        "semi": 2,
        "semi-spacing": 0,
        "semi-style": [
            2,
            "last"
        ],
        "sort-imports": 2,
        "sort-keys": 0,
        "sort-vars": 0,
        "space-before-blocks": 0,
        "space-before-function-paren": 0,
        "space-in-parens": [
            2,
            "never"
        ],
        "space-infix-ops": 0,
        "space-unary-ops": 0,
        "spaced-comment": 0,
        "strict": 0,
        "switch-colon-spacing": 2,
        "symbol-description": 2,
        "template-curly-spacing": 2,
        "template-tag-spacing": 2,
        "unicode-bom": [
            2,
            "never"
        ],
        "valid-jsdoc": 0,
        "vars-on-top": 0,
        "wrap-iife": 0,
        "wrap-regex": 2,
        "yield-star-spacing": 2,
        "yoda": [
            2,
            "never"
        ]
    }
};
