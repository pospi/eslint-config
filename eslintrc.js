module.exports = {
  "parser": "babel-eslint",

  "env": {
    "browser": 1,
    "node": 1,
    "mocha": 1,
    "es6": 1
  },

  "plugins": [
    "react",
    "flowtype"
  ],

  "parserOptions": {
    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": true,
        "regexUFlag": true,
        "regexYFlag": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodeCodePointEscapes": true,
        "globalReturn": true,
        "jsx": true
    }
  },

  "rules": {

/** AIRBNB RULES BASE */

    /**
     * Possible Errors
     */
    "no-cond-assign": [1, "except-parens"],
    "no-constant-condition": 1,
    "no-control-regex": 1,
    "no-debugger": 0,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 1,
    "no-empty-character-class": 1,
    "no-empty": 1,
    "no-ex-assign": 1,
    "no-extra-boolean-cast": 1,
    "no-extra-parens": 0,
    "no-extra-semi": 1,
    "no-func-assign": 1,
    "no-inner-declarations": 0,
    "no-invalid-regexp": 1,
    "no-irregular-whitespace": 1,
    "no-negated-in-lhs": 1,
    "no-obj-calls": 1,
    "no-regex-spaces": 1,
    "no-sparse-arrays": 0,
    "no-unreachable": 0,
    "use-isnan": 1,
    "valid-jsdoc": 0,
    "valid-typeof": 0,
    "no-unexpected-multiline": 1,

    /**
     * Best Practices
     */
    "accessor-pairs": 1,
    "block-scoped-var": 1,
    "complexity": 0,
    "default-case": 0,
    "dot-location": 0,
    "guard-for-in": 0,
    "no-alert": 1,
    "no-caller": 1,
    "no-div-regex": 1,
    "no-else-return": 0,
    "no-eq-null": 0,
    "no-eval": 1,
    "no-extend-native":     1,
    "no-extra-bind": 1,
    "no-fallthrough": 0,
    "no-floating-decimal": 1,
    "no-implicit-coercion": 0,
    "no-implied-eval": 1,
    "no-invalid-this": 0,
    "no-iterator": 1,
    "no-labels": 1,
    "no-lone-blocks": 1,
    "no-loop-func": 1,
    "no-multi-str": 1,
    "no-native-reassign": 1,
    "no-new-func": 1,
    "no-new-wrappers": 1,
    "no-new": 1,
    "no-octal-escape": 1,
    "no-octal": 1,
    "no-param-reassign": 0,
    "no-process-env": 0,
    "no-proto": 1,
    "no-redeclare": 2,
    "no-return-assign": 1,
    "no-script-url": 1,
    "no-self-compare": 1,
    "no-sequences": 1,
    "no-throw-literal": 1,
    "no-unused-expressions": 1,
    "no-useless-call": 1,
    "no-void": 1,
    "no-warning-comments": 0,
    "no-with": 1,
    "radix": 1,
    "vars-on-top": 0,
    "wrap-iife": [1, "any"],
    "yoda": [1, "never"],

    /**
     * Variables
     */
    "init-declarations": 0,
    "no-catch-shadow": 1,
    "no-delete-var": 1,
    "no-label-var": 1,
    "no-shadow-restricted-names": 1,
    "no-shadow": 1,
    "no-undef-init": 1,
    "no-undef": 0,
    "no-undefined": 0,

    /**
     * Node.js
     */
    "callback-return": 0,
    "handle-callback-err": 0,
    "no-mixed-requires": 1,
    "no-new-require": 1,
    "no-path-concat": 1,
    "no-process-exit": 0,
    "no-restricted-modules": 0,
    "no-sync": 0,

    /**
     * Stylistic Issues
     */
    "brace-style": [1, "1tbs", { "allowSingleLine": true }],
    "camelcase": [1, {"properties": "never"}],
    "comma-spacing": 1,
    "comma-style": 1,
    "computed-property-spacing": [1, "never"],
    "consistent-this": [1, "self"],
    "func-names": 0,
    "func-style": 0,
    "id-length": 0,
    "id-match": 0,
    "jsx-quotes": [1, "prefer-double"],
    "lines-around-comment": 0,
    "linebreak-style": 0,
    "max-nested-callbacks": [1, 3],
    "new-cap": 0,
    "new-parens": 1,
    "no-array-constructor": 1,
    "no-continue": 0,
    "no-inline-comments": 0,
    "no-lonely-if": 1,
    "no-mixed-spaces-and-tabs": [1, "smart-tabs"],
    "no-nested-ternary": 1,
    "no-new-object": 1,
    "no-spaced-func": 1,
    "no-ternary": 0,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 1,
    "operator-assignment": 0,
    "operator-linebreak": 0,
    "semi-spacing": 1,
    "semi": 1,
    "sort-vars": 0,
    "keyword-spacing": [1, { "after": true }],
    "space-before-blocks": 1,
    "space-in-parens": 1,
    "space-infix-ops": 1,
    "space-unary-ops": 1,
    "spaced-comment": 0,
    "wrap-regex": 0,

    /**
     * ECMAScript 6
     */
    "arrow-parens": 0,
    "arrow-spacing": 1,
    "constructor-super": 1,
    "generator-star-spacing": [1, {"before": false, "after": true}],
    "no-class-assign": 0,
    "no-const-assign": 2,
    "no-this-before-super": 2,
    "no-var": 1,
    "prefer-const": 1,
    "prefer-spread": 1,
    "prefer-reflect": 0,
    "require-yield": 1,

    /**
     * Legacy
     */
    "max-depth": [1, 3],
    "max-params": 0,
    "max-len": [1, 160, 4, {"ignoreComments": true, "ignoreUrls": true}],
    "max-statements": 0,
    "no-bitwise": 0,
    "no-plusplus": 0,

    /**
     * React plugin
     */
    "react/display-name": 0,
    "react/forbid-prop-types": [1, {"forbid": ["any"]}],
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": [1, "never"],
    "react/jsx-indent-props": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-quotes": 0,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 0,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 0,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 0,
    "react/no-set-state": 0,
    "react/no-unknown-property": 2,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": 0,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 1,


/** PERSONAL PREFERENCES */

    "no-console": 0,

    // code quality
    "no-global-strict": 0,
    "strict": 0,
    "no-unused-vars": [2, {"vars": "all", "args": "none"}],
    "no-use-before-define": [2, "nofunc"],
    "one-var": [1, {
        "uninitialized": "always",
        "initialized": "never",
    }],

    // stylistic
    "no-trailing-spaces": 0, "eol-last": 0,   // :NOTE: handled/trimmed by editor automatically
    "indent": 0,    // :NOTE: indentation controlled by .editorconfig
    "newline-after-var": 0,
    "padded-blocks": 0,
    "no-multi-spaces": [1, { "exceptions": { "VariableDeclarator": true, "ImportDeclaration": true, "Property": true } }],

    "dot-notation": 0,  // don't force dot notation, convention for dynamic property access using `[]` syntax vs. static access using `.`
    "eqeqeq": [1, "smart"],

    "space-before-function-paren": [1, "never"],
    "consistent-return": 0,
    "prefer-arrow-callback": 0,

    "quotes": 0,
    "quote-props": [1, "consistent"],

    "comma-dangle": [1, "always-multiline"],
    "object-shorthand": 0,
    "key-spacing": [1, {"beforeColon": false, "afterColon": true, "mode": "minimum"}],

    "object-curly-spacing": [1, "always"],

    "no-multiple-empty-lines": 0,

    // flow
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1,
    "flowtype/space-after-type-colon": [1, "always"],
    "flowtype/space-before-type-colon": [1, "never"],
    // enabling this means you have to exhaustively declare types instead of being able to define cascading defs
    "flowtype/require-parameter-type": 0,
    "flowtype/require-return-type": 0,

    // react conventions
    "react/jsx-boolean-value": [1, "always"],
    "react/sort-comp": [1, {
      "order": [
        "/^props$/",
        "/^state$/",
        "lifecycle",
        "render",
        "/^render.+$/",
        "/^_?on.+$/",
        "everything-else"
      ]
    }],
    "react/jsx-no-bind": 0,

    // react backwards compat
    // "react/no-deprecated": [1, {"react": "0.13.0"}],
    "react/prefer-es6-class": 1
  }
}
