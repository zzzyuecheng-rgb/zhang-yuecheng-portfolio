// Case copy is grounded in the supplied portfolio, pages 5–11.
// Project provenance, personal task ownership and unprovided revisions are not invented.
(() => {
  const chapters = [
    ['从户外饮水问题开始', '徒步、露营与旅行场景需要同时考虑饮水安全和携带体验。因此，品牌定位围绕专业净化、轻量便携与自然科技美学展开。'],
    ['把探索感放进标识规则', '横向拉长的字形呼应探索路径与前行感；柔和转角让专业感保留亲近性。等高线、水波纹与过滤点阵，让“户外”与“净水”有共同的图形来源。'],
    ['从自然环境建立色彩秩序', '苔绿、岩黑、沙岩与雾白来自山地、岩石与自然光。统一的色彩规则，让标识、产品和传播画面保持连贯，而不靠每张图重新定义风格。'],
    ['让包装承担识别与信息', '从吊牌、随附卡片到产品包装，延续同一套字标、色彩与图形。包装既传达品牌，也组织产品信息，让视觉系统进入可使用的触点。'],
    ['把系统延续到户外装备', '服装与装备沿用标识位置、自然色彩和图形语言。系列感来自规则的重复，让不同物件能够被识别为同一个品牌。'],
    ['让传播先建立场景感', '海报把人物、环境与装备放在一起，让“净在途中，自在远行”有具体的情境。不同媒介沿用同一套识别，保持传播中的品牌连续性。'],
    ['从单个物件走向整体体验', '空间效果图检验字标、色彩与材质在较大尺度中的关系。案例最终覆盖品牌策略、标识规范、包装、服装、海报与空间应用展示。']
  ];

  window.renderPortfolioCase = (slug, dialog) => {
    const content = dialog.querySelector('.dialog-case-content');
    content.replaceChildren();
    dialog.classList.toggle('has-case-story', slug === 'rivota');
    if (slug !== 'rivota') return;

    content.innerHTML = `
      <figure class="case-lead-visual"><img src="assets/rivota-cover-hd.jpg" width="1122" height="1402" alt="RIVOTA 户外饮水场景的品牌视觉" decoding="async"><figcaption><span>RIVOTA / FIELD SYSTEM</span><strong>净在途中，<br>自在远行。</strong><small>品牌定位 → 视觉系统 → 应用展示</small></figcaption></figure>
      <section class="case-brief" aria-labelledby="case-brief-title">
        <div class="case-section-heading"><p class="eyebrow">01 / THE BRIEF</p><h3 id="case-brief-title">让专业净水，<br>拥有自然的表达。</h3></div>
        <div class="case-brief-copy"><p>RIVOTA 溯野以便携式户外净水与补给系统为设计对象。案例要回答的是：如何把可靠、轻便与自然探索的感受，整理成一套能够持续使用的品牌语言？</p>
          <dl><div><dt>目标人群</dt><dd>徒步者、露营爱好者、旅行者与户外探索者。</dd></div><div><dt>设计目标</dt><dd>让专业性能、便携体验与自然气质形成一致的品牌识别。</dd></div><div><dt>设计内容</dt><dd>品牌定位、标识与辅助图形、色彩、包装及传播应用。</dd></div></dl>
        </div>
      </section>
      <section class="case-decisions" aria-labelledby="case-decisions-title">
        <div class="case-section-heading"><p class="eyebrow">02 / DESIGN DECISIONS</p><h3 id="case-decisions-title">把定位，变成设计规则。</h3><p>从原作品的标识推导、图形与色彩规范中，提炼三个关键判断。</p></div>
        <div class="case-decision-grid">
          <article><span class="case-decision-number">01</span><h4>横向字形，回应探索路径。</h4><p>以拉长的字形和柔和转角组织标识，让前行感与适应性进入品牌的基本结构。</p><button type="button" data-case-jump="1">查看标识推导 <span aria-hidden="true">↘</span></button></article>
          <article><span class="case-decision-number">02</span><h4>图形来自同一个环境。</h4><p>把等高线、水波纹和过滤点阵整理为辅助图形，让自然环境与产品功能互相呼应。</p><div class="case-motifs" aria-label="等高线、水波纹、过滤点阵"><span>等高线</span><span>水波纹</span><span>过滤点阵</span></div></article>
          <article><span class="case-decision-number">03</span><h4>自然色，贯穿每个触点。</h4><p>苔绿与岩黑建立识别，沙岩与雾白留出呼吸空间；一套色彩延续到包装、装备与传播。</p><div class="case-palette" aria-label="苔绿 #4A533A，岩黑 #2B2C28，沙岩 #D8C9B0，雾白 #F5F4EF"><i style="--swatch:#4a533a"></i><i style="--swatch:#2b2c28"></i><i style="--swatch:#d8c9b0"></i><i style="--swatch:#f5f4ef"></i></div></article>
        </div>
      </section>
      <section class="case-result" aria-labelledby="case-result-title"><div><p class="eyebrow">03 / THE SYSTEM</p><h3 id="case-result-title">从一个标识，到一套完整应用。</h3><p>方案完成了从品牌概念、识别规范到包装、服装、传播海报与空间效果图的系统展示。下方按设计逻辑整理原始展板，先看核心画面，再按需展开高清细节。</p><a class="case-pdf-supplement" href="zhang-yuecheng-portfolio.pdf#page=5" target="_blank" rel="noopener">深入阅读：完整作品集 PDF <span aria-hidden="true">↗</span></a></div><button type="button" class="case-outline-button" data-case-jump="3">看包装如何延展 <span aria-hidden="true">↘</span></button></section>
    `;
    content.querySelectorAll('[data-case-jump]').forEach(button => button.addEventListener('click', () => {
      const figure = dialog.querySelectorAll('.dialog-gallery figure')[Number(button.dataset.caseJump)];
      if (!figure) return;
      const top = dialog.scrollTop + figure.getBoundingClientRect().top - dialog.getBoundingClientRect().top - dialog.querySelector('.dialog-top').offsetHeight - 24;
      dialog.scrollTo({top, behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth'});
      figure.focus({preventScroll:true});
    }));

    dialog.querySelectorAll('.dialog-gallery figure').forEach((figure, index) => {
      figure.tabIndex = -1;
      const image = figure.querySelector('img');
      const caption = figure.querySelector('figcaption');
      const heading = document.createElement('h3');
      heading.className = 'case-chapter-title';
      heading.textContent = chapters[index][0];
      const explanation = document.createElement('p');
      explanation.className = 'case-chapter-reason';
      explanation.textContent = chapters[index][1];
      const details = document.createElement('details');
      details.className = 'case-full-board';
      details.id = `rivota-full-board-${index + 1}`;
      const summary = document.createElement('summary');
      summary.textContent = '展开完整高清展板 · 2400 px 宽';
      image.before(details);
      details.append(summary, image);
      const previewButton = document.createElement('button');
      previewButton.type = 'button';
      previewButton.className = 'case-preview-button';
      previewButton.setAttribute('aria-label', `展开${chapters[index][0]}完整展板`);
      previewButton.setAttribute('aria-controls', details.id);
      previewButton.setAttribute('aria-expanded', 'false');
      const preview = image.cloneNode();
      preview.removeAttribute('width');
      preview.removeAttribute('height');
      preview.alt = `${caption.textContent.replace(/^\d+\s*\/\s*\d+\s*/, '')}核心画面预览`;
      const cue = document.createElement('span');
      cue.textContent = '查看完整展板 ↗';
      previewButton.append(preview, cue);
      details.before(previewButton);
      previewButton.addEventListener('click', () => { details.open = !details.open; });
      details.addEventListener('toggle', () => {
        previewButton.setAttribute('aria-expanded', String(details.open));
        summary.textContent = details.open ? '收起完整展板' : '展开完整高清展板 · 2400 px 宽';
        dialog.dispatchEvent(new Event('scroll'));
      });
      figure.prepend(caption, heading, explanation);
    });
  };
})();
