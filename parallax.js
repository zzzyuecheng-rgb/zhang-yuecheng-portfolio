// Stage 3: images travel more slowly than their normal-flow project frames.
(() => {
  if (!CSS.supports('translate', '0 1px')) return;
  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches) return;
  const smallScreen = matchMedia('(max-width:650px)');
  const layers = Array.from(document.querySelectorAll('.featured-image, .project-card .project-image'), frame => {
    const image = frame.querySelector(':scope > img');
    if (!image) return null;
    const plane = document.createElement('span');
    plane.className = 'parallax-plane';
    image.before(plane);
    plane.append(image);
    // Print-like artwork gets a shorter movement to keep its composition easy to read.
    const strength = image.classList.contains('tea-cover-hd') ? .4 : frame.closest('#mang-tantan') ? .7 : 1;
    return {frame, plane, strength, travel:0, speed:0, lastY:null};
  }).filter(Boolean);
  if (!layers.length) return;

  let scheduled = false;
  let geometryChanged = true;
  root.classList.add('scroll-parallax');

  function update() {
    scheduled = false;
    const mobile = smallScreen.matches;
    const enabled = !reducedMotion.matches;
    // Read all bounds before writing styles, keeping the existing layouts independent.
    const measurements = layers.map(layer => ({layer, rect:layer.frame.getBoundingClientRect()}));
    measurements.forEach(({layer, rect}) => {
      if (geometryChanged) {
        layer.travel = enabled ? Math.min(mobile ? 20 : 60, rect.height * (mobile ? .055 : .105)) * layer.strength : 0;
        layer.speed = (mobile ? .095 : .2) * layer.strength;
        layer.plane.style.setProperty('--parallax-gutter', `${enabled ? layer.travel + 2 : 0}px`);
      }
      const y = enabled
        ? Math.max(-layer.travel, Math.min(layer.travel, (innerHeight * .5 - rect.top - rect.height * .5) * layer.speed))
        : 0;
      const rounded = y.toFixed(2);
      if (rounded !== layer.lastY) {
        layer.plane.style.setProperty('--parallax-y', `${rounded}px`);
        layer.lastY = rounded;
      }
    });
    geometryChanged = false;
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  }
  function resize() {
    geometryChanged = true;
    schedule();
  }
  addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', resize, {passive:true});
  reducedMotion.addEventListener('change', () => {
    root.classList.toggle('scroll-parallax', !reducedMotion.matches);
    resize();
  });
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(resize);
    layers.forEach(({frame}) => observer.observe(frame));
  }
  update();
})();
