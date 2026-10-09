// Portfolio chapters follow native scroll position.
(() => {
  if (!motionAllowed) return;
  const hero = document.querySelector('.hero');
  const intro = document.querySelector('.intro');
  const method = document.querySelector('.method');
  const contact = document.querySelector('.contact');
  const wrap = (section, className) => {
    const stage = document.createElement('div');
    stage.className = className;
    while (section.firstChild) stage.append(section.firstChild);
    section.append(stage);
    return stage;
  };
  wrap(hero, 'hero-stage');
  wrap(intro, 'intro-stage');
  document.documentElement.classList.add('scroll-story');
  const track = document.createElement('div');
  track.className = 'method-track';
  track.setAttribute('aria-hidden', 'true');
  track.append(document.createElement('span'));
  method.querySelector('.page-wrap').append(track);
  const chapter = document.createElement('div');
  chapter.className = 'scroll-chapter';
  chapter.setAttribute('aria-hidden', 'true');
  chapter.innerHTML = '<span class="chapter-number"></span><span class="chapter-name"></span><span class="chapter-ring"></span>';
  document.body.append(chapter);
  const chapters = [
    {section:hero, name:'认识我'},
    {section:intro, name:'关于我的设计'},
    {section:document.querySelector('.works'), name:'精选项目'},
    {section:method, name:'从定位到体验'},
    {section:document.querySelector('.practice'), name:'真实的设计实践'},
    {section:contact, name:'一起聊聊'}
  ];
  const steps = Array.from(method.querySelectorAll('.method-steps>div'));
  const rows = Array.from(document.querySelectorAll('.practice-list>div'));
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const facts = Array.from(intro.querySelectorAll('.intro-facts strong'));
  const factValues = facts.map(el => ({number:parseInt(el.textContent,10),suffix:el.textContent.includes('+')?'+':'',padded:el.textContent.startsWith('0')}));
  const clamp = n => Math.max(0, Math.min(1, n));
  const pinnedProgress = section => {
    const rect = section.getBoundingClientRect();
    return clamp(-rect.top / Math.max(1, section.offsetHeight - innerHeight + 106));
  };
  let scheduled = false;
  const update = () => {
    const desktop = matchMedia('(min-width:1101px)').matches;
    const wide = matchMedia('(min-width:901px)').matches;
    const heroProgress = wide ? pinnedProgress(hero) : 0;
    hero.style.setProperty('--hero-progress', heroProgress.toFixed(3));
    const introProgress = desktop ? pinnedProgress(intro) : clamp((innerHeight - intro.getBoundingClientRect().top) / (innerHeight * .8));
    intro.style.setProperty('--intro-progress', introProgress.toFixed(3));
    if (desktop && readingLetters.length) {
      const readingProgress = clamp((introProgress + .08) / .58);
      readingLetters.forEach((letter,index) => letter.style.setProperty('--letter-opacity', String(.22 + .78 * clamp(readingProgress * readingLetters.length - index))));
    }
    const factsProgress = desktop ? clamp((introProgress - .25) / .55) : 1;
    intro.style.setProperty('--facts-opacity', String(.2 + .8 * factsProgress));
    facts.forEach((el,index) => {
      const spec = factValues[index];
      const value = Math.round(spec.number * factsProgress);
      el.textContent = (spec.padded ? String(value).padStart(2,'0') : String(value)) + spec.suffix;
    });
    const methodProgress = desktop ? pinnedProgress(method) : clamp((innerHeight * .55 - method.getBoundingClientRect().top) / method.offsetHeight);
    method.style.setProperty('--method-progress', methodProgress.toFixed(3));
    const activeStep = Math.min(steps.length - 1, Math.floor(methodProgress * steps.length));
    steps.forEach((el,index) => el.classList.toggle('is-method-active', index === activeStep));
    rows.forEach(row => {
      const progress = clamp((innerHeight * .95 - row.getBoundingClientRect().top) / (innerHeight * .45));
      row.style.setProperty('--row-opacity', String(.25 + .75 * progress));
      row.style.setProperty('--row-y', ((1 - progress) * 28).toFixed(1) + 'px');
    });
    cards.forEach((card,index) => {
      const next = cards[index + 1];
      const overlap = next && wide ? clamp((innerHeight * .6 - next.getBoundingClientRect().top) / (innerHeight * .45)) : 0;
      card.style.setProperty('--card-scale', String(1 - overlap * .035));
    });
    const contactProgress = clamp((innerHeight * .9 - contact.getBoundingClientRect().top) / (innerHeight * .55));
    contact.style.setProperty('--contact-y', ((1 - contactProgress) * 45).toFixed(1) + 'px');
    contact.style.setProperty('--contact-opacity', String(.15 + contactProgress * .85));
    const linksProgress = clamp((contactProgress - .2) / .8);
    contact.style.setProperty('--contact-links-y', ((1 - linksProgress) * 36).toFixed(1) + 'px');
    contact.style.setProperty('--contact-links-opacity', String(.15 + linksProgress * .85));
    let index = 0;
    chapters.forEach((item,i) => { if (item.section.getBoundingClientRect().top <= innerHeight * .4) index = i; });
    const current = chapters[index];
    const progress = clamp((innerHeight * .4 - current.section.getBoundingClientRect().top) / Math.max(1,current.section.offsetHeight));
    chapter.querySelector('.chapter-number').textContent = String(index + 1).padStart(2,'0') + ' / 06';
    chapter.querySelector('.chapter-name').textContent = current.name;
    chapter.style.setProperty('--chapter-progress', progress.toFixed(3));
    chapter.classList.toggle('is-visible', scrollY > 80);
    scheduled = false;
  };
  const schedule = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } };
  addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', schedule, {passive:true});
  update();
})();
