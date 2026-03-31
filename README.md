# Personal Site (Static)

当前版本聚焦科研风个人站，核心能力：

- 首页仅保留两大主块：个人介绍、项目经历
- 白色主调 + 黑色辅助的严谨视觉风格
- 项目列表自动渲染（标题 + 简介）
- 点击项目卡片进入详情页 `project.html?id=...`
- 项目详情页包含侧边大纲目录（滚动高亮）
- 项目详情页支持添加介绍视频链接（本地浏览器保存）

## Local Preview

```bash
cd personal-site
python -m http.server 8080
```

访问 `http://localhost:8080`

## Content Customize

1. 个人介绍内容在 `index.html` 内直接修改（姓名、学校、专业、研究方向、邮箱）。
2. 个人形象图默认文件是 `assets/profile-placeholder.svg`，可直接替换为你的照片文件。
3. 项目数据集中在 `scripts/main.js` 的 `PROJECTS` 数组中：
   - `id`：项目标识（用于详情页链接）
   - `title` / `summary`：首页展示
   - `sections`：详情页正文与目录
   - `videoUrl`：项目默认视频链接（可留空）
4. 详情页的“保存视频”会把链接写入 `localStorage`，仅在当前浏览器生效。

## Suggested Deployment

上传整个目录到任意静态托管即可：

- Vercel
- Netlify
- GitHub Pages
