# 张跃诚的视觉设计作品集

个人作品集网站，展示品牌、包装、IP、信息可视化与书籍设计项目。网站为静态 HTML、CSS、JavaScript，可直接由 GitHub Pages 发布。

## 在线访问

- Vercel：https://zhang-yuecheng-portfolio.vercel.app/
- GitHub Pages：https://zzzyuecheng-rgb.github.io/zhang-yuecheng-portfolio/

## 文件结构

- `index.html`：页面内容与项目入口
- `styles.css`：排版、响应式布局和悬停动效
- `app.js`：项目详情弹窗与滚动交互
- `case-studies.js`：RIVOTA 案例说明、设计判断与高清展板阅读
- `portfolio-refinements.css`：文字可读性、首屏作品入口、移动导航及案例排版
- `additional-works.css`：作品分类、信息可视化与书籍设计独立展区的静态排版
- `portrait-update.css`：黑白肖像的尺寸适配、显示位置与圆角
- `scroll-story.css`、`scroll-story.js`：整页滚动叙事与设计方法分步展示；作品保持正常排列，不叠加遮挡
- 五个独立动效模块：`scroll-triggered`、`scroll-linked`、`parallax`、`sticky`、`scroll-snap`，见下方说明
- `assets/`：作品图、肖像、三款透明背景动漫头像、互动表情与微信二维码
- `zhang-yuecheng-portfolio.pdf`、`zhang-yuecheng-resume.pdf`：页面提供的下载资料

## 持续更新

在 GitHub 上直接编辑文件，或在本地修改后推送到 `main` 分支。GitHub Pages 和已连接的 Vercel 项目会从 `main` 分支自动重新发布。

本地预览可在仓库根目录运行：

```sh
python -m http.server 8765
```

随后打开 `http://127.0.0.1:8765/`。新增作品时，在 `index.html` 添加卡片，并在 `app.js` 的 `projects` 对象中补充项目详情；图片放入 `assets/`。

首屏默认使用黑白侧面肖像 `assets/portrait-bw.png`，保留原图黑色背景，悬停或点击时切换为 3D 卡通头像 `assets/avatar-3d-v3.png`。肖像的尺寸与圆角由 `portrait-update.css` 维护。`assets/avatar-anime-02.png` 和 `assets/avatar-anime-03.png` 是备用头像方案。

作品区分为“品牌、包装与 IP”“信息可视化”“书籍设计”三个独立展区，分类入口使用原生锚点跳转。新增作品时，在对应展区添加卡片，并同步更新项目总数与分类数量。

艺茶韵致的封面与详情采用 `assets/art-of-tea-01-hd.jpg` 至 `assets/art-of-tea-03-hd.jpg`，原稿尺寸为 3507 × 4960。下载作品集同步使用 2026 年 10 月 9 日更新的 43 页 PDF，项目起始页保持一致。桌面端随滚动逐段展示，手机端保留自然阅读布局；系统减少动画设置会关闭滚动动效。

溯野的 7 张详情图使用 `assets/rivota-01-hd.webp` 至 `assets/rivota-07-hd.webp`，从品牌建立原始 PDF 按 2400 像素宽导出，保留长图完整尺寸。封面 `assets/rivota-cover-hd.jpg` 直接使用 PDF 中的 1122 × 1402 原始照片。更新长图时应按宽度导出，避免按高度限制使文字和细节被过度压缩。

## 项目分享与案例阅读

项目地址使用 `#project/<项目标识>`，例如 `#project/rivota`。可复制链接、刷新后直接阅读，或用浏览器前进和后退打开、关闭详情。RIVOTA 的案例说明由 `case-studies.js` 维护；展板先显示核心画面，可展开完整高清长图。

联系区提供邮箱和电话复制反馈、微信二维码保存，以及带中文文件名的简历和作品集下载。介绍区数字采用静态值，正文在滚动和动画触发前后保持可读。

## 新增作品资料

京剧信息可视化设计包含两张完整信息图，详情使用 3508/3600 像素宽 WebP，另提供由两张原始 JPEG 组成的 `assets/peking-opera-infographics.pdf`。

Bleeding Love 为书籍设计，详情展示原 PDF 的六个印刷跨页。`assets/bleeding-love-book.pdf` 与用户提供的印刷原稿字节一致。新项目通过 `app.js` 中的 `images`、`pdf`、`pdfLabel` 字段绑定独立原稿，复用现有项目交互。

## 五种滚动动效

每个动效使用独立样式或脚本，避免覆盖其他模块的属性。无需安装第三方动画库。

| 动效 | 网站中的作用 | 文件 |
| --- | --- | --- |
| Scroll-triggered | 进入视口后播放轻微位移与图片展开，文字始终可读，完成后不重复播放 | `scroll-triggered.css` / `.js` |
| Scroll-linked | 设计方法中的图示随滚动展开，也可随反向滚动收回 | `scroll-linked.css` / `.js` |
| Parallax | 作品内部图片缓慢移动，原有悬停放大保留 | `parallax.css` / `.js` |
| Sticky | 作品详情中的标题、章节目录与关闭栏保持可见 | `sticky.css` / `.js` |
| Scroll Snap | 精选作品轻柔吸附到导航下方；较矮窗口保留自由阅读 | `scroll-snap.css` |

## 授权

页面 HTML、CSS 与 JavaScript 代码采用 [MIT 许可证](LICENSE.md)。作品图片、肖像、二维码及 PDF 资料不在该许可范围内，版权归张跃诚及相关权利人所有。

