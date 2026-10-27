const projects = {
  rivota: {number:'01',title:'溯野 RIVOTA',category:'品牌建立',focus:'品牌定位 / 标识系统 / 应用延展',page:5,summary:'为便携式户外净水与补给系统建立视觉语言，让专业性能、轻量体验与自然气质形成一致的品牌印象。',approach:'以“净在途中，自在远行”为核心，将等高线、水波纹与过滤点阵融入图形系统，并延展到产品、服装、海报和零售场景。',captions:['品牌策略与定位','标识与辅助图形','色彩与产品视觉','产品包装应用','户外服装应用','传播画面','空间与场景延展']},
  feli: {number:'02',title:'FELI 斐里',category:'品牌视觉',focus:'标识 / 系列包装 / 零售体验',page:13,summary:'以“只做猫食，才足够专注”为品牌承诺，建立专业、清晰又温和的猫食视觉形象。',approach:'字母 F 的负形嵌入猫眼；幼猫、成猫与敏感需求分别建立系列秩序，并将识别延续到开箱、物件和货架陈列。',captions:['品牌定位','标识识别系统','系列包装','生活物件','开箱体验','零售陈列','完整品牌体验']},
  meijiajing: {number:'03',title:'美加净 1921',category:'文化包装概念',focus:'品牌叙事 / 包装 / 礼赠体验',page:21,summary:'以上海城市记忆为线索，探索美加净 1921 牙膏伴手礼的文化包装表达。',approach:'将老字号的时代气质与地标插画、温暖的复古色彩结合，让日常牙膏转化为可携带的上海记忆。',captions:['项目背景与定位','视觉语言与产品家族','礼盒与零售应用']},
  'new-spring': {number:'04',title:'New Spring',category:'品牌建立',focus:'字标 / 插画 / 包装与空间',page:25,summary:'从轻乳红茶的日常感受出发，为茶饮建立温暖、清洁且带有茶文化线索的品牌视觉。',approach:'以柔和字标、低饱和暖色和可复用的茶叶与花枝插画贯穿杯身、包装、内容传播与门店空间。',captions:['品牌概念','视觉语言','包装家族','口味系列','从茶园到杯身','生活化传播','门店体验']},
  'mang-tantan': {number:'05',title:'芒探探',category:'IP 形象',focus:'角色设定 / 动作表情 / 衍生应用',page:33,summary:'以芒果轮廓、问号与放大镜组成好奇而自信的小侦探，让角色一眼可识别。',approach:'从三视图和造型规则出发，设计动作、情绪和故事场景，再延展到贴纸、文具与生活物件。',captions:['角色定位','造型与结构','表情与动作','角色场景','贴纸与小物件','应用延展']},
  'art-of-tea': {number:'06',title:'艺茶韵致',category:'文化包装',focus:'文化符号 / 系列包装 / 场景应用',page:40,summary:'将梅山傩面文化与茶礼相遇，以角色与色彩建立有故事感的系列包装。',approach:'从傩面造型中提炼视觉符号，形成三款茶礼表达，并让角色从茶盒延伸至日常物件与饮茶场景。',captions:['设计逻辑与角色符号','系列包装','日常场景应用']},
  'peking-opera': {"number":"07","title":"非遗文化 · 京剧","category":"信息可视化设计","focus":"信息架构 / 分类图例 / 图表编排","page":1,"pdf":"assets/peking-opera-infographics.pdf","pdfLabel":"查看信息图原稿 PDF · 2 页 ","summary":"围绕京剧文化，把地域、行当、脸谱、唱腔与发展脉络整理为两张信息可视化作品，以分类和图表建立清楚的阅读层级。","approach":"以绛红和留白统一画面，结合人物图例、分类图谱、时间线与图表，让密集的文化信息按主题展开。两张作品先呈现文化概览，再进入表演与脸谱细节。","captions":["文化概览、人物与发展脉络","脸谱、唱腔与表演信息"],"images":[{"src":"assets/peking-opera-01.webp","width":3600,"height":5091},{"src":"assets/peking-opera-02.webp","width":3508,"height":4961}]},
  'bleeding-love': {"number":"08","title":"Bleeding Love","category":"书籍设计","focus":"字体图形 / 跨页编排 / 视觉叙事","page":1,"pdf":"assets/bleeding-love-book.pdf","pdfLabel":"查看书籍原稿 PDF · 6 跨页 ","summary":"以 Bleeding Love 为主题，通过字形变形、材质肌理与空间构成，把文字转化为连续的跨页阅读，探索一本主题书的视觉叙事。","approach":"从红色肌理封面出发，依次呈现拉伸字形、文字融化、环形编排、图像拼贴与投影效果，在六个印刷跨页中组织不同的视觉节奏。","captions":["封面与封底","开篇与文字空间","MELT 字体图形","环形文字编排","拼贴与视觉层次","投影与收束"],"images":[{"src":"assets/bleeding-love-01.webp","width":2600,"height":1347},{"src":"assets/bleeding-love-02.webp","width":2600,"height":1347},{"src":"assets/bleeding-love-03.webp","width":2600,"height":1347},{"src":"assets/bleeding-love-04.webp","width":2600,"height":1347},{"src":"assets/bleeding-love-05.webp","width":2600,"height":1347},{"src":"assets/bleeding-love-06.webp","width":2600,"height":1347}]}
};

const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const avatarSwitch = document.querySelector('.avatar-switch');
avatarSwitch?.addEventListener('click', () => {
  const active = avatarSwitch.classList.toggle('is-active');
  avatarSwitch.setAttribute('aria-pressed', String(active));
});
const dialog = document.querySelector('.project-dialog');
let lastTrigger = null;
let activeProject = null;
let pageScrollBeforeDialog = 0;
const pageTitle = document.title;
const projectHash = slug => `#project/${slug}`;
const projectFromLocation = () => {
  const match = /^#project\/([a-z0-9-]+)$/.exec(location.hash);
  return match && projects[match[1]] ? match[1] : null;
};

async function copyText(value, button, status, label) {
  try {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(value);
    } catch {
      const input = document.createElement('textarea');
      input.value = value;
      input.readOnly = true;
      input.style.cssText = 'position:fixed;left:-9999px;top:0';
      (dialog.open ? dialog : document.body).append(input);
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      button.focus({preventScroll:true});
      if (!copied) throw new Error('Copy unavailable');
    }
    const original = button.dataset.defaultLabel || button.textContent;
    button.dataset.defaultLabel = original;
    button.textContent = '已复制';
    status.textContent = `${label}已复制。`;
    clearTimeout(button._copyTimer);
    button._copyTimer = setTimeout(() => {button.textContent = original;}, 2400);
  } catch {
    status.textContent = `复制未成功，请手动复制${label}：${value}`;
  }
}

function openProject(slug, trigger, {writeHistory = true} = {}) {
  const project = projects[slug];
  if (!project || typeof dialog.showModal !== 'function') {
    if (project) window.open(project.pdf || `zhang-yuecheng-portfolio.pdf#page=${project.page}`, '_blank', 'noopener');
    return;
  }
  if (dialog.open && activeProject === slug) return;
  if (writeHistory) history.pushState({...history.state, portfolioProject:slug, portfolioProjectEntry:true}, '', projectHash(slug));
  if (!dialog.open) {
    lastTrigger = trigger || document.querySelector(`.works [data-project="${slug}"]`);
    pageScrollBeforeDialog = scrollY;
  }
  activeProject = slug;
  document.title = `${project.title}｜张跃诚的视觉设计作品集`;
  dialog.querySelector('.dialog-index').textContent = `${project.number} / SELECTED PROJECT`;
  dialog.querySelector('#dialog-title').textContent = project.title;
  dialog.querySelector('.dialog-summary').textContent = project.summary;
  dialog.querySelector('.dialog-category').textContent = project.category;
  dialog.querySelector('.dialog-focus').textContent = project.focus;
  dialog.querySelector('.dialog-approach').textContent = project.approach;
  dialog.querySelector('.dialog-count').textContent = `${project.captions.length} 组${slug === 'rivota' ? '设计说明与高清展板' : '作品画面'}`;
  dialog.querySelector('.dialog-copy-feedback').textContent = '';
  const share = dialog.querySelector('.dialog-share');
  clearTimeout(share._copyTimer);
  share.textContent = share.dataset.defaultLabel || '复制项目链接';
  dialog.querySelector('.dialog-pdf').href = project.pdf || `zhang-yuecheng-portfolio.pdf#page=${project.page}`;
  dialog.querySelector('.dialog-pdf').firstChild.textContent = project.pdfLabel || '在 PDF 中查看完整项目 ';
  const gallery = dialog.querySelector('.dialog-gallery');
  gallery.replaceChildren();
  project.captions.forEach((caption, index) => {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    const number = String(index + 1).padStart(2, '0');
    const asset = project.images?.[index];
    image.src = asset?.src || (slug === 'art-of-tea' ? `assets/${slug}-${number}-hd.jpg` : slug === 'rivota' ? `assets/${slug}-${number}-hd.webp` : `assets/${slug}-${number}.webp`);
    if (asset) {image.width = asset.width; image.height = asset.height;}
    if (slug === 'art-of-tea') {image.width = 3507; image.height = 4960;}
    if (slug === 'rivota') {image.width = 2400; image.height = [8773,10121,7159,10373,8079,9124,6061][index];}
    image.decoding = 'async';
    image.alt = `${project.title}：${caption}`;
    image.loading = index === 0 ? 'eager' : 'lazy';
    const label = document.createElement('figcaption');
    label.textContent = `${number} / ${String(project.captions.length).padStart(2, '0')}  ${caption}`;
    figure.append(image, label);
    gallery.append(figure);
  });
  window.renderPortfolioCase?.(slug, dialog);
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.dispatchEvent(new Event('portfolio:project-ready'));
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus();
}

document.querySelectorAll('[data-project]').forEach(link => link.addEventListener('click', event => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  openProject(link.dataset.project, link);
}));

function requestProjectClose() {
  if (!dialog.open) return;
  if (projectFromLocation() && history.state?.portfolioProjectEntry) history.back();
  else {
    history.replaceState(null, '', '#works');
    dialog.close();
  }
}
dialog.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', requestProjectClose));
dialog.addEventListener('cancel', event => {event.preventDefault(); requestProjectClose();});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) requestProjectClose();
});
dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const focusable = Array.from(dialog.querySelectorAll('a[href], button:not([disabled]), summary, [tabindex="0"]')).filter(element => element.getClientRects().length);
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {event.preventDefault(); last?.focus();}
  else if (!event.shiftKey && document.activeElement === last) {event.preventDefault(); first?.focus();}
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  dialog.querySelector('.dialog-gallery').replaceChildren();
  dialog.querySelector('.dialog-case-content').replaceChildren();
  activeProject = null;
  document.title = pageTitle;
  scrollTo({top:pageScrollBeforeDialog, behavior:'instant'});
  lastTrigger?.focus({preventScroll:true});
});
dialog.querySelector('.dialog-share').addEventListener('click', event => {
  const url = new URL(location.href);
  url.search = '';
  copyText(url.href, event.currentTarget, dialog.querySelector('.dialog-copy-feedback'), '项目链接');
});
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', () => {
  copyText(button.dataset.copy, button, document.querySelector('.copy-feedback'), button.dataset.copyLabel);
}));

function syncProjectLocation() {
  const slug = projectFromLocation();
  if (slug) {
    if (dialog.open && activeProject === slug) return;
    const trigger = document.querySelector(`.works [data-project="${slug}"]`);
    if (!dialog.open && !history.state?.portfolioProjectEntry) trigger?.closest('article')?.scrollIntoView({block:'start', behavior:'instant'});
    openProject(slug, trigger, {writeHistory:false});
  } else if (dialog.open) dialog.close();
}
addEventListener('popstate', syncProjectLocation);
addEventListener('hashchange', syncProjectLocation);
addEventListener('DOMContentLoaded', () => requestAnimationFrame(syncProjectLocation), {once:true});


const header = document.querySelector('.site-header');
const progress = document.querySelector('.page-progress span');
let scrollTicking = false;
function updateScroll() {
  const y = window.scrollY;
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  progress.style.transform = `scaleX(${Math.min(1, y/max)})`;
  header.classList.toggle('is-scrolled', y > 28);
  scrollTicking = false;
}
window.addEventListener('scroll', () => { if (!scrollTicking) { scrollTicking = true; requestAnimationFrame(updateScroll); } }, {passive:true});
window.addEventListener('resize', updateScroll, {passive:true});
updateScroll();

// Reading content remains complete and high-contrast at every scroll position.
const readingLetters = [];
const storyCards = Array.from(document.querySelectorAll('.project-card'));
const storySections = Array.from(document.querySelectorAll('section[id]'));
const storyLinks = Array.from(document.querySelectorAll('.site-nav a'));
let storyFrame = false;
function updateStory() {
  if (motionAllowed) storyCards.forEach(card => {
    const progress = Math.min(1, Math.max(0, (window.innerHeight - card.getBoundingClientRect().top) / window.innerHeight));
    card.style.setProperty('--scene-scale', String(1.07 - .07 * progress));
  });
  let active = '';
  storySections.forEach(section => { if (section.getBoundingClientRect().top <= window.innerHeight * .4) active = section.id; });
  storyLinks.forEach(link => {
    if (link.hash === '#' + active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  storyFrame = false;
}
window.addEventListener('scroll', () => {
  if (!storyFrame) { storyFrame = true; requestAnimationFrame(updateStory); }
}, {passive:true});
window.addEventListener('resize', updateStory, {passive:true});
updateStory();

