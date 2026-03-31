# Personal Site (Static)

当前版本为精简单页站点，仅保留两块内容：

- 个人介绍
- 项目经历
- 响应式布局与基础动效
- 基础 SEO 文件：`robots.txt`、`sitemap.xml`、Open Graph
- 无构建依赖，可直接以静态文件部署

## Local Preview

Use Python (if installed):

```bash
cd personal-site
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Customize Before Deploy

1. 如需修改站点地址，更新 `index.html`、`robots.txt`、`sitemap.xml` 中的域名。
2. 根据需要调整 `index.html` 中“个人介绍”和“项目经历”的文案。
3. 旧页面（about/projects/blog/contact/posts）当前会自动跳转到首页。

## Suggested Deployment

Upload the folder to any static host:

- Vercel
- Netlify
- GitHub Pages
