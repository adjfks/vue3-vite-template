# vue3-vite-template
🏕 Opinionated Vue3 & Vite Starter Template

- 🌲快速初始化Vue3 + Vite + TS项目，省去繁琐配置
- 🌴所有配置都是经过不断踩坑，不断查阅官方文档，才最终得到的
- 🏜️如果有错误的话欢迎提出
- 🌻如果觉得还不错的话给个star吧！

## Feature
- 📦[only-pkg](https://www.npmjs.com/package/only-pkg): 自己写的npm包，强制项目安装依赖时使用的包管理器
- ⚡[Vite2.9.9](https://github.com/vitejs/vite): 更快的构建速度，更良好的开发体验
- 💪[TypeScript](https://github.com/microsoft/TypeScript): 更良好的类型支持
- 🌪️[Vue3.2.25](https://github.com/vuejs/): SFC + composition api
- 🌿[VueRouter4](https://github.com/vuejs/router): 提供路由支持
- 🍍[Pinia2.0.14](https://github.com/vuejs/pinia): 全局状态存储
- 🍄[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 一个用于自动导入包API的插件,含自动导入vue vue-router等预设
- 🏝️[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components): 自动导入Vue组件,结合unplugin-icons自动导入图标,自定义图标组件前缀
- 🎯[unplugin-icons](https://github.com/antfu/unplugin-icons): iconify图标集随心使用，打包时按需打包，组件方式使用图标
- 💖[eslint](https://github.com/eslint/eslint): 使用eslint规范代码
- 🐣[prettier](https://github.com/prettier/prettier): 使用prettier作为代码格式化工具，结合[eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)插件一键格式化代码
- 🎃[husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged): 提交前自动运行格式化任务

## usage
默认配置只允许使用pnpm,可以修改package.json

使用yarn
```
scripts: {
  "preinstall": "npx only-pkg yarn",
}
```
使用npm
```
scripts: {
  "preinstall": "npx only-pkg yarn",
}
```
安装依赖
```
pnpm install
```
启动开发服务器
```
pnpm run dev
```
构建
```
pnpm run build
```

## TODO
- 添加commit规范
- 添加单元测试
- 开发CLI脚手架

## LICENSE
MIT
