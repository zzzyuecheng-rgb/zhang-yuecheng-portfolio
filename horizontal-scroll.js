// Stage 6: normal page scrolling unfolds application scenes across a separate track.
(() => {
  const section = document.querySelector('.horizontal-showcase');
  const stage = section?.querySelector('.horizontal-stage');
  const viewport = section?.querySelector('.horizontal-viewport');
  const track = section?.querySelector('.horizontal-track');
  if (!track || !('matchMedia' in window)) return;
  const scenes = [...track.querySelectorAll('.touchpoint-scene')];
  const links = scenes.map(scene => scene.querySelector('.touchpoint-link'));
  const controls = section.querySelector('.horizontal-controls');
  const counter = controls.querySelector('.horizontal-counter strong');
  const previous = controls.querySelector('.horizontal-prev');
  const next = controls.querySelector('.horizontal-next');
  const desktop = matchMedia('(min-width:1101px) and (min-height:780px)');
  const reduced = matchMedia('(prefers-reduced-motion:reduce)');
  const clamp = value => Math.max(0, Math.min(1, value));
  let pinned = false;
  let travel = 0;
  let stops = [];
  let active = -1;
  let scheduled = false;
  let geometryChanged = true;
  controls.hidden = false;

  function update() {
    scheduled = false;
    if (geometryChanged) {
      const enabled = desktop.matches && !reduced.matches;
      if (enabled !== pinned) {
        pinned = enabled;
        section.classList.toggle('is-horizontal-pinned', pinned);
        viewport.scrollLeft = 0;
      }
      travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
      // Clamp panel starts so the last scene ends cleanly at the viewport's right gutter.
      const firstLeft = scenes[0].offsetLeft;
      stops = scenes.map(scene => Math.min(travel, scene.offsetLeft - firstLeft));
      if (pinned) section.style.setProperty('--horizontal-section-height', `${stage.offsetHeight + travel}px`);
      else section.style.removeProperty('--horizontal-section-height');
      geometryChanged = false;
    }
    const top = parseFloat(getComputedStyle(stage).top) || 112;
    const position = pinned ? Math.max(0, Math.min(travel, top - section.getBoundingClientRect().top)) : viewport.scrollLeft;
    const progress = travel ? clamp(position / travel) : 0;
    section.style.setProperty('--horizontal-progress', progress.toFixed(4));
    if (pinned) track.style.setProperty('--horizontal-x', `${(-position).toFixed(2)}px`);
    else track.style.removeProperty('--horizontal-x');
    const index = progress >= .999 ? scenes.length-1 : stops.reduce((nearest,stop,i) => Math.abs(stop-position) < Math.abs(stops[nearest]-position) ? i : nearest, 0);
    if (index !== active) {
      active = index;
      counter.textContent = String(index+1).padStart(2,'0');
    }
    // Disabled state follows actual boundaries, including intermediate scroll positions.
    previous.disabled = position <= 1;
    next.disabled = position >= travel - 1;
    section.dataset.horizontalProgress = progress.toFixed(4);
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  }
  function resize() { geometryChanged = true; schedule(); }
  function goTo(index, smooth = true) {
    index = Math.max(0, Math.min(scenes.length - 1, index));
    const behavior = smooth && !reduced.matches ? 'smooth' : 'instant';
    if (pinned) {
      const top = parseFloat(getComputedStyle(stage).top) || 112;
      window.scrollTo({top:section.getBoundingClientRect().top + scrollY - top + stops[index],behavior});
    } else viewport.scrollTo({left:stops[index],behavior});
  }
  previous.addEventListener('click', () => goTo(active-1));
  next.addEventListener('click', () => goTo(active+1));
  viewport.addEventListener('keydown', event => {
    const destinations = {ArrowLeft:active-1,ArrowRight:active+1,Home:0,End:scenes.length-1};
    if (!(event.key in destinations) || event.altKey || event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    goTo(destinations[event.key]);
  });
  links.forEach((link,index) => {
    link.addEventListener('focus', () => { if (pinned) goTo(index,false); });
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0 || typeof openProject !== 'function') return;
      event.preventDefault();
      openProject(link.dataset.touchpointProject, link);
    });
  });
  addEventListener('scroll', schedule, {passive:true});
  viewport.addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', resize, {passive:true});
  desktop.addEventListener('change', resize);
  reduced.addEventListener('change', resize);
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    observer.observe(track);
  }
  update();
})();
