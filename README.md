# 张跃诚的视觉设计作品集

个人作品集网站，展示品牌建立、IP 形象与文化包装项目。网站为静态 HTML、CSS、JavaScript，可直接由 GitHub Pages 发布。

## 在线访问

- Vercel：https://zhang-yuecheng-portfolio.vercel.app/
- GitHub Pages：https://zzzyuecheng-rgb.github.io/zhang-yuecheng-portfolio/

## 文件结构

- `index.html`：页面内容与项目入口
- `styles.css`：排版、响应式布局和悬停动效
- `app.js`：项目详情弹窗与滚动交互
- `scroll-story.css`、`scroll-story.js`：整页滚动叙事、作品叠进与设计方法分步展示
- `assets/`：作品图、肖像、三款透明背景动漫头像、互动表情与微信二维码
- `zhang-yuecheng-portfolio.pdf`、`zhang-yuecheng-resume.pdf`：页面提供的下载资料

## 持续更新

在 GitHub 上直接编辑文件，或在本地修改后推送到 `main` 分支。GitHub Pages 和已连接的 Vercel 项目会从 `main` 分支自动重新发布。

本地预览可在仓库根目录运行：

```sh
python -m http.server 8765
```

随后打开 `http://127.0.0.1:8765/`。新增作品时，在 `index.html` 添加卡片，并在 `app.js` 的 `projects` 对象中补充项目详情；图片放入 `assets/`。

首屏默认使用真人照片 `assets/portrait.webp`，悬停或点击时切换为 3D 卡通头像 `assets/avatar-3d-v3.png`。人物背景与网页底色一致。`assets/avatar-anime-02.png` 和 `assets/avatar-anime-03.png` 是备用头像方案。

艺茶韵致的封面与详情采用 `assets/art-of-tea-01-hd.jpg` 至 `assets/art-of-tea-03-hd.jpg`，原稿尺寸为 3507 × 4960。下载作品集同步使用 2026 年 10 月 9 日更新的 43 页 PDF，项目起始页保持一致。桌面端随滚动逐段展示，手机端保留自然阅读布局；系统减少动画设置会关闭滚动动效。

## 授权

页面代码（`index.html`、`styles.css`、`app.js`）采用 [MIT 许可证](LICENSE.md)。作品图片、肖像、二维码及 PDF 资料不在该许可范围内，版权归张跃诚及相关权利人所有。

