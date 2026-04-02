# 个人网站（静态，文档风格）

这个版本是一个左侧栏文档风格个人主页的高相似度重制：

- 固定深色侧边栏（`300px`）和目录链接
- 浅色正文区域与长文分区
- 滚动时目录高亮跟随
- 移动端顶部按钮控制侧栏滑出

## 本地预览

```bash
cd personal-site
python -m http.server 8080
```

打开 `http://localhost:8080`。

## 主要文件

- `index.html`：页面结构与分区内容
- `styles/main.css`：样式体系与响应式布局
- `scripts/main.js`：目录高亮、滚动监听、移动端菜单切换
