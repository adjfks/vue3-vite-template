module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    // 继承eslint推荐的规则集，vue基本的规则集，typescript的规则集
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "./.eslintrc-auto-import.json"
    ],
    // 新增，解析vue文件中的template
    "parser": "vue-eslint-parser",
    // 支持ts的最新语法
    "parserOptions": {
        "ecmaVersion": "latest",
        // 解析vue文件中的script
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    // 添加vue和@typescript-eslint插件，增强eslint的能力
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "vue/multi-word-component-names": 0,
        "@typescript-eslint/no-var-requires": 0
    }
}
