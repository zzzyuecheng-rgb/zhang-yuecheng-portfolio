// Stage 4: a native sticky reading companion for each project's existing HD gallery.
(() => {
  const dialog = document.querySelector('.project-dialog');
  const gallery = dialog?.querySelector('.dialog-gallery');
  if (!gallery || !('MutationObserver' in window)) return;
  const desktop = matchMedia('(min-width:1200px) and (min-height:700px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion:reduce)');
  let state = null;
  let scheduled = false;

  function update() {
    scheduled = false;
    if (!state || !dialog.open) return;
    const readingLine = dialog.getBoundingClientRect().top + dialog.querySelector('.dialog-top').offsetHeight + 36;
    const tops = state.figures.map(figure => figure.getBoundingClientRect().top);
    let active = 0;
    tops.forEach((top,index) => {if (top <= readingLine) active = index;});
    if (state.active === active) return;
    state.active = active;
    state.buttons.forEach((button,index) => {
      if (index === active) button.setAttribute('aria-current','true');
      else button.removeAttribute('aria-current');
    });
    state.count.textContent = `${String(active + 1).padStart(2,'0')} / ${String(state.figures.length).padStart(2,'0')}`;
  }
  function schedule() {
    if (scheduled || !state) return;
    scheduled = true;
    requestAnimationFrame(update);
  }
  function remove() {
    if (!state) return;
    state.layout.before(gallery);
    state.layout.remove();
    state = null;
    dialog.classList.remove('sticky-reader');
  }
  function build() {
    if (state || !dialog.open) return;
    const figures = Array.from(gallery.querySelectorAll('figure'));
    if (!figures.length) return;
    const layout = document.createElement('div');
    layout.className = 'sticky-case-layout';
    const sidebar = document.createElement('aside');
    sidebar.className = 'sticky-case-sidebar';
    sidebar.setAttribute('aria-label','项目阅读目录');
    sidebar.innerHTML = '<div class="sticky-case-heading"><p>PROJECT / VISUAL STORY</p><h3></h3><span class="sticky-case-category"></span></div><details class="sticky-case-directory"><summary>浏览作品章节</summary><nav class="sticky-case-nav" aria-label="作品画面章节"></nav></details><p class="sticky-case-position"><span>当前画面</span><strong></strong></p><a class="sticky-case-pdf" target="_blank" rel="noopener">完整项目 PDF <span aria-hidden="true">↗</span></a>';
    sidebar.querySelector('h3').textContent = dialog.querySelector('#dialog-title').textContent;
    sidebar.querySelector('.sticky-case-category').textContent = dialog.querySelector('.dialog-category').textContent;
    sidebar.querySelector('.sticky-case-pdf').href = dialog.querySelector('.dialog-pdf').href;
    const details = sidebar.querySelector('details');
    details.open = desktop.matches;
    const nav = sidebar.querySelector('nav');
    const buttons = figures.map((figure,index) => {
      const button = document.createElement('button');
      button.type = 'button';
      const number = document.createElement('span');
      number.textContent = String(index + 1).padStart(2,'0');
      const label = document.createElement('span');
      label.textContent = figure.querySelector('figcaption').textContent.replace(/^\d+\s*\/\s*\d+\s+/,'');
      button.append(number,label);
      button.addEventListener('click',() => {
        if (!desktop.matches) details.open = false;
        const header = dialog.querySelector('.dialog-top');
        const top = dialog.scrollTop + figure.getBoundingClientRect().top - dialog.getBoundingClientRect().top - header.offsetHeight - 24;
        dialog.scrollTo({top,behavior:reducedMotion.matches ? 'instant' : 'smooth'});
      });
      nav.append(button);
      return button;
    });
    gallery.before(layout);
    layout.append(sidebar,gallery);
    state = {layout,figures,buttons,details,count:sidebar.querySelector('.sticky-case-position strong'),active:-1};
    dialog.classList.add('sticky-reader');
    update();
  }
  new MutationObserver(() => {if (dialog.open) build(); else remove();}).observe(dialog,{attributes:true,attributeFilter:['open']});
  dialog.addEventListener('close',remove);
  dialog.addEventListener('portfolio:project-ready',() => {remove(); build();});
  dialog.addEventListener('scroll',schedule,{passive:true});
  gallery.addEventListener('load',schedule,true);
  addEventListener('resize',schedule,{passive:true});
  desktop.addEventListener('change',() => {if (state) state.details.open = desktop.matches; schedule();});
  build();
})();
