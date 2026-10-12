// Stage 1: entering the viewport starts a timed sequence, independent of scroll speed.
(() => {
  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const narrow = matchMedia('(max-width: 650px)').matches;
  const groups = [];
  const register = (host, specifications) => {
    if (!host) return;
    const parts = [];
    specifications.forEach(([selector, effect = 'text', delay = 0]) => {
      host.querySelectorAll(selector).forEach((part, index) => {
        part.dataset.triggerPart = effect;
        part.style.setProperty('--trigger-delay', `${narrow ? Math.min(delay, 100) : delay + index * 65}ms`);
        parts.push(part);
      });
    });
    if (!parts.length) return;
    host.dataset.triggerGroup = '';
    groups.push({host, parts});
  };

  register(document.querySelector('.intro-main'), [
    ['h2', 'heading', 0], ['.intro-bottom p', 'text', 150], ['.intro-bottom a', 'text', 240]
  ]);
  register(document.querySelector('.works-heading'), [
    ['.eyebrow', 'text', 0], ['h2', 'heading', 90], [':scope > p', 'text', 230]
  ]);
  register(document.querySelector('.featured-project'), [
    ['.project-topline', 'text', 0], ['.feature-en', 'heading', 80],
    ['h3', 'heading', 140], ['.featured-image', 'image', 150],
    ['.project-slogan', 'text', 230], ['.project-summary', 'text', 310],
    ['.project-tags', 'text', 380]
  ]);
  document.querySelectorAll('.project-card').forEach(card => register(card, [
    ['.card-meta', 'text', 0], ['.card-heading', 'heading', 90],
    ['.project-image', 'image', 150],
    ['.project-trigger > p, .wide-copy > p', 'text', 250],
    ['.project-tags', 'text', 340]
  ]));
  register(document.querySelector('.method-heading'), [
    ['.eyebrow', 'text', 0], ['h2', 'heading', 90], [':scope > p:last-child', 'text', 230]
  ]);
  register(document.querySelector('.practice-lead'), [
    ['.eyebrow', 'text', 0], ['h2', 'heading', 90], [':scope > p:last-child', 'text', 230]
  ]);
  document.querySelectorAll('.practice-list > div').forEach(row => register(row, [
    ['span', 'text', 0], ['p', 'text', 120]
  ]));
  register(document.querySelector('.contact-heading'), [
    ['.eyebrow', 'text', 0], ['h2', 'heading', 90], [':scope > p:last-child', 'text', 230]
  ]);
  register(document.querySelector('.contact-grid'), [
    ['.contact-links > a', 'text', 0], ['.contact-downloads', 'text', 230],
    ['.contact-qr', 'image', 150]
  ]);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-triggered');
      observer.unobserve(entry.target);
    });
  }, {rootMargin: '0px 0px -12% 0px', threshold: 0.08});

  root.classList.add('scroll-triggered');
  groups.forEach(({host, parts}) => {
    // On phones the image and its copy enter at different times.
    if (narrow) parts.forEach(part => observer.observe(part));
    else observer.observe(host);
  });

  document.addEventListener('focusin', event => {
    const host = event.target.closest('[data-trigger-group]');
    if (!host) return;
    host.classList.add('trigger-immediate', 'is-triggered');
    host.querySelectorAll('[data-trigger-part]').forEach(part => part.classList.add('is-triggered'));
  });

  reducedMotion.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    root.classList.remove('scroll-triggered');
  });
})();
