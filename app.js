const projects = {
  rivota: {number:'01',title:'溯野 RIVOTA',category:'品牌建立',focus:'品牌定位 / 标识系统 / 应用延展',page:5,summary:'为便携式户外净水与补给系统建立视觉语言，让专业性能、轻量体验与自然气质形成一致的品牌印象。',approach:'以“净在途中，自在远行”为核心，将等高线、水波纹与过滤点阵融入图形系统，并延展到产品、服装、海报和零售场景。',captions:['品牌策略与定位','标识与辅助图形','色彩与产品视觉','产品包装应用','户外服装应用','传播画面','空间与场景延展']},
  feli: {number:'02',title:'FELI 斐里',category:'品牌视觉',focus:'标识 / 系列包装 / 零售体验',page:13,summary:'以“只做猫食，才足够专注”为品牌承诺，建立专业、清晰又温和的猫食视觉形象。',approach:'字母 F 的负形嵌入猫眼；幼猫、成猫与敏感需求分别建立系列秩序，并将识别延续到开箱、物件和货架陈列。',captions:['品牌定位','标识识别系统','系列包装','生活物件','开箱体验','零售陈列','完整品牌体验']},
  meijiajing: {number:'03',title:'美加净 1921',category:'文化包装概念',focus:'品牌叙事 / 包装 / 礼赠体验',page:21,summary:'以上海城市记忆为线索，探索美加净 1921 牙膏伴手礼的文化包装表达。',approach:'将老字号的时代气质与地标插画、温暖的复古色彩结合，让日常牙膏转化为可携带的上海记忆。',captions:['项目背景与定位','视觉语言与产品家族','礼盒与零售应用']},
  'new-spring': {number:'04',title:'New Spring',category:'品牌建立',focus:'字标 / 插画 / 包装与空间',page:25,summary:'从轻乳红茶的日常感受出发，为茶饮建立温暖、清洁且带有茶文化线索的品牌视觉。',approach:'以柔和字标、低饱和暖色和可复用的茶叶与花枝插画贯穿杯身、包装、内容传播与门店空间。',captions:['品牌概念','视觉语言','包装家族','口味系列','从茶园到杯身','生活化传播','门店体验']},
  'mang-tantan': {number:'05',title:'芒探探',category:'IP 形象',focus:'角色设定 / 动作表情 / 衍生应用',page:33,summary:'以芒果轮廓、问号与放大镜组成好奇而自信的小侦探，让角色一眼可识别。',approach:'从三视图和造型规则出发，设计动作、情绪和故事场景，再延展到贴纸、文具与生活物件。',captions:['角色定位','造型与结构','表情与动作','角色场景','贴纸与小物件','应用延展']},
  'art-of-tea': {number:'06',title:'艺茶韵致',category:'文化包装',focus:'文化符号 / 系列包装 / 场景应用',page:40,summary:'将梅山傩面文化与茶礼相遇，以角色与色彩建立有故事感的系列包装。',approach:'从傩面造型中提炼视觉符号，形成三款茶礼表达，并让角色从茶盒延伸至日常物件与饮茶场景。',captions:['设计逻辑与角色符号','系列包装','日常场景应用']}
};

const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const avatarSwitch = document.querySelector('.avatar-switch');
avatarSwitch?.addEventListener('click', () => {
  const active = avatarSwitch.classList.toggle('is-active');
  avatarSwitch.setAttribute('aria-pressed', String(active));
});
const dialog = document.querySelector('.project-dialog');
let lastTrigger = null;

function openProject(slug, trigger) {
  const project = projects[slug];
  if (!project || typeof dialog.showModal !== 'function') {
    if (project) window.open(`zhang-yuecheng-portfolio.pdf#page=${project.page}`, '_blank', 'noopener');
    return;
  }
  lastTrigger = trigger;
  dialog.querySelector('.dialog-index').textContent = `${project.number} / SELECTED PROJECT`;
  dialog.querySelector('#dialog-title').textContent = project.title;
  dialog.querySelector('.dialog-summary').textContent = project.summary;
  dialog.querySelector('.dialog-category').textContent = project.category;
  dialog.querySelector('.dialog-focus').textContent = project.focus;
  dialog.querySelector('.dialog-approach').textContent = project.approach;
  dialog.querySelector('.dialog-count').textContent = `${project.captions.length} 个作品画面`;
  dialog.querySelector('.dialog-pdf').href = `zhang-yuecheng-portfolio.pdf#page=${project.page}`;
  const gallery = dialog.querySelector('.dialog-gallery');
  gallery.replaceChildren();
  project.captions.forEach((caption, i) => {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = `assets/${slug}-${String(i+1).padStart(2,'0')}.webp`;
    image.alt = `${project.title}：${caption}`;
    image.loading = i === 0 ? 'eager' : 'lazy';
    const label = document.createElement('figcaption');
    label.textContent = `${String(i+1).padStart(2,'0')} / ${String(project.captions.length).padStart(2,'0')}  ${caption}`;
    figure.append(image,label);
    gallery.append(figure);
  });
  dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus();
}

document.querySelectorAll('[data-project]').forEach(link => link.addEventListener('click', event => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  openProject(link.dataset.project, link);
}));
dialog.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  dialog.querySelector('.dialog-gallery').replaceChildren();
  lastTrigger?.focus();
});

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

if (motionAllowed && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-motion');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); revealObserver.unobserve(entry.target); }
    });
  }, {threshold:.08, rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
}
