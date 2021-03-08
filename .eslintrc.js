module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "_": true,
    "$": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "tsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": 1, // 检查 effect 的依赖
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'no-useless-escape': 2,
    "no-extra-semi": 2,
    "no-console": 1,
    "semi": 1, //强制使用分号
    "semi-spacing": [2, { "before": false, "after": true }], // 强制分号前后不允许空格
    "no-irregular-whitespace": 0, //不规则的空白不允许
    "no-trailing-spaces": 'error', //一行结束后面有空格就发出警告
    "no-empty": 2, //块语句中的内容不能为空
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "camelcase": 0, //强制驼峰法命名
    // @fixable 函数名和执行它的括号之间禁止有空格
    'func-call-spacing': [
      'error',
      'never'
    ],
    // @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
    'space-before-blocks': [
      'error',
      'always'
    ],
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_|^[A-Z]',
        argsIgnorePattern: '^_|^err|^ev'
      }
    ],
  },
  "parser": "babel-eslint"
};
