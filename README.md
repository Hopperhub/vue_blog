# vue_blog

> My blog base on vue

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## [iview](https://www.iviewui.com/)

### 安装

- `npm i iview --save`

### 导入

- 在 webpack 的入口文件 main.js 中导入

- 组件库：`import iView from 'iview'`

- 样式库：`import 'iview/dist/styles/iview.css'`

### 使用

#### 方法一：

- `Vue.use(iView)`

#### 方法二：按需引用

- 安装加载组件：`npm i babel-plugin-import --save-dev`

- `.babelrc` 配置

  ```
  // .babelrc
  {
  "plugins": [["import", {
    "libraryName": "iview",
    "libraryDirectory": "src/components"
  }]]
  }
  ```

- 按需引入组件

  ```
  import { Button, Table } from 'iview';
  Vue.component('Button', Button);
  Vue.component('Table', Table);
  ```

### 操作

- [使用 favicon.ico](https://www.jianshu.com/p/6682e8c2a973)
