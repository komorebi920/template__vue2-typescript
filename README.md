# vue2-typescript-template

## 运行环境

1. `yarn^1.22.19`
2. `node^14.21.3`

## 浏览器兼容性

1. `ie` >= 9
2. `firefox` >= 52
3. `chrome` >= 76

## 模板功能

1. Vue 2  + Vue Router + Vue Router 全家桶
2. 支持 TypeScript
    - 使用 `vue-class-component` + `vue-property-decorator` 支持 Vue 2 + TypeScript
    - 使用 `vuex-module-decorators` 支持 Vuex + TypeScript
3. 使用 Jest 单元测试
4. 使用 `vue-i18n` 支持多语言
5. 使用 `element-ui` UI 组件库
   - 支持按需加载
   - 支持多语言
   - 支持自定义主题
5. 支持 Commit Message 校验
6. 使用 ESLint + Prettier 规范代码格式
7. 同时支持网页应用打包与库模式打包
   - 库模式自动生成 demo 页面
   - 导出 Class 类文件
   - 获取当前 Git 分支、提交时间以及 Commit ID
8. 使用 `lerna` 支持 Monorepo 架构
