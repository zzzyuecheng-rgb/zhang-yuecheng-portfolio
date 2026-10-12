// Stage 2: the design diagram follows scroll position continuously and reversibly.
(() => {
  const section = document.querySelector('#approach');
  const diagram = section?.querySelector('.linked-diagram');
  if (!diagram) return;

  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const pinnedLayout = matchMedia('(min-width:1101px)');
  const parts = Array.from(diagram.querySelectorAll('[data-linked-range]'), element => {
    const [start, end] = element.dataset.linkedRange.split(',').map(Number);
    return {element, start, end};
  });
  const clamp = number => Math.max(0, Math.min(1, number));
  let scheduled = false;
  let lastProgress = -1;

  function update() {
    scheduled = false;
    let progress = 1;
    if (!reducedMotion.matches) {
      const rect = section.getBoundingClientRect();
      if (pinnedLayout.matches) {
        progress = clamp(-rect.top / Math.max(1, section.offsetHeight - innerHeight + 106));
      } else {
        const diagramRect = diagram.getBoundingClientRect();
        progress = clamp((innerHeight * .9 - diagramRect.top) / (innerHeight * .65));
      }
    }
    if (progress === lastProgress) return;
    lastProgress = progress;
    parts.forEach(({element, start, end}) => {
      element.style.setProperty('--linked-draw', clamp((progress - start) / (end - start)).toFixed(4));
    });
    diagram.dataset.linkedProgress = progress.toFixed(4);
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  }
  root.classList.toggle('scroll-linked', !reducedMotion.matches);
  addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', schedule, {passive:true});
  reducedMotion.addEventListener('change', () => {
    root.classList.toggle('scroll-linked', !reducedMotion.matches);
    lastProgress = -1;
    schedule();
  });
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(section);
  update();
})();
