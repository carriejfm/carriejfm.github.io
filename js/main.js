/* ─────────────────────────────────────────
   CARRIE FRANCIS-MILLER — Portfolio 2026
   main.js
───────────────────────────────────────── */

/* ─── CASE STUDY MANIFEST ───────────────────────────────────────
   Order matches the home page. Set published: false to remove a
   study from the next-link rotation without deleting anything.
─────────────────────────────────────────────────────────────── */
const CASE_STUDIES = [
  { slug: 'money-stories',        title: 'Money Stories',        published: true  },
  { slug: 'afterpay-design',      title: 'Afterpay',             published: true  },
  { slug: 'orange-chef-prep-pad', title: 'Prep Pad',             published: true  },
  { slug: 'cochlear-copilot',     title: 'Cochlear Copilot',     published: false },
];

/* ─── CASE STUDY NEXT LINK ─── */
(function () {
  const link = document.querySelector('.cs-next__title');
  if (!link) return;

  const current = window.location.pathname.split('/').pop().replace('.html', '');
  const published = CASE_STUDIES.filter(s => s.published);
  const idx = published.findIndex(s => s.slug === current);
  if (idx === -1) return;

  const next = published[(idx + 1) % published.length];
  link.href = next.slug + '.html';
  link.textContent = next.title + ' →';
})();


/* ─── CAREER DURATION TICKER (decimal years, updates every second) ─── */
(function () {
  const START = new Date('2009-01-01T00:00:00');
  const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

  function updateTicker() {
    const elapsed = Date.now() - START.getTime();
    const years = (elapsed / MS_PER_YEAR).toFixed(8);
    const el = document.getElementById('ticker-decimal');
    if (el) el.textContent = years;
  }

  updateTicker();
  setInterval(updateTicker, 1000);
})();


/* ─── SCROLL REVEAL ─── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => observer.observe(el));
})();


/* ─── NAV SCROLL STATE ─── */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();


/* ─── MOBILE NAV TOGGLE ─── */
(function () {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if (!nav || !toggle) return;

  function closeMenu() {
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav__links a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();


/* ─── THOUGHTWORK CAROUSEL ─── */
(function () {
  const track    = document.getElementById('carouselTrack');
  const prevBtn  = document.getElementById('carouselPrev');
  const nextBtn  = document.getElementById('carouselNext');
  if (!track || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function getCards() {
    return Array.from(track.querySelectorAll('.thoughtwork-card'));
  }

  function getGap() {
    return parseFloat(getComputedStyle(track).gap) || 32;
  }

  function getCardWidth() {
    const cards = getCards();
    if (!cards.length) return 0;
    return cards[0].getBoundingClientRect().width + getGap();
  }

  function getVisible() {
    const wrap = track.parentElement;
    if (!wrap) return 1;
    const cardWidth = getCardWidth();
    return cardWidth > 0 ? Math.max(1, Math.floor(wrap.offsetWidth / cardWidth)) : 1;
  }

  function render() {
    const cards   = getCards();
    const visible = getVisible();
    const max     = Math.max(0, cards.length - visible);

    currentIndex = Math.min(currentIndex, max);

    track.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= max;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) { currentIndex--; render(); }
  });

  nextBtn.addEventListener('click', () => {
    const max = Math.max(0, getCards().length - getVisible());
    if (currentIndex < max) { currentIndex++; render(); }
  });

  // Touch / swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 48) {
      delta > 0 ? nextBtn.click() : prevBtn.click();
    }
  }, { passive: true });

  // Re-render on resize (debounced)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      currentIndex = 0;
      render();
    }, 150);
  }, { passive: true });

  render();
})();


/* ═══════════════════════════════════════════════════════════════
   VISUAL ASSETS
═══════════════════════════════════════════════════════════════ */

/* ─── VA: tile templates + carousel population ─── */
(function () {
  const VA_TILES = [
    // 1. Macros — light bg, animated bars
    `<svg viewBox="0 0 100 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
       <rect width="100" height="220" fill="#F3F3F1"/>
       <text x="8" y="22" font-family="IBM Plex Mono" font-size="6" fill="#7A7A72">9:41</text>
       <text x="8" y="48" font-family="Fraunces" font-size="14" fill="#1A1A17">Macros</text>
       <g class="va-tile-bars">
         <rect x="10" y="80"  width="14" height="60" fill="#2E2E2A"/>
         <rect x="34" y="100" width="14" height="40" fill="#9CB39B"/>
         <rect x="58" y="70"  width="14" height="70" fill="#DA8C52"/>
         <rect x="82" y="90"  width="10" height="50" fill="#2E2E2A"/>
       </g>
       <rect x="8" y="160" width="84" height="6" fill="#DDD9D0"/>
       <rect x="8" y="172" width="60" height="6" fill="#EAE7E0"/>
     </svg>`,

    // 2. Today — dark bg, pulsing rings
    `<svg viewBox="0 0 100 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
       <rect width="100" height="220" fill="#2A3A36"/>
       <text x="8" y="22" font-family="IBM Plex Mono" font-size="6" fill="#9CB39B">9:41</text>
       <text x="8" y="48" font-family="Fraunces" font-size="14" fill="#F3F3F1">Today</text>
       <g class="va-tile-pulse">
         <circle cx="50" cy="120" r="32" fill="none" stroke="#9CB39B" stroke-width="3"/>
         <circle cx="50" cy="120" r="22" fill="none" stroke="#DA8C52" stroke-width="3"/>
       </g>
       <text x="50" y="124" text-anchor="middle" font-family="Fraunces" font-size="12" fill="#F3F3F1">87</text>
       <rect x="8" y="180" width="40" height="4" fill="#9CB39B"/>
     </svg>`,

    // 3. Search — light bg, shimmering list
    `<svg viewBox="0 0 100 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
       <rect width="100" height="220" fill="#F3F3F1"/>
       <text x="8" y="22" font-family="IBM Plex Mono" font-size="6" fill="#7A7A72">9:41</text>
       <text x="8" y="48" font-family="Fraunces" font-size="14" fill="#1A1A17">Search</text>
       <rect x="8" y="60" width="84" height="14" rx="7" fill="#EAE7E0"/>
       <g class="va-tile-shimmer">
         <rect x="8"  y="86"  width="84" height="10" fill="#EAE7E0"/>
         <rect x="8"  y="102" width="68" height="10" fill="#EAE7E0"/>
         <rect x="8"  y="118" width="80" height="10" fill="#EAE7E0"/>
         <rect x="8"  y="134" width="55" height="10" fill="#EAE7E0"/>
         <rect x="8"  y="150" width="74" height="10" fill="#EAE7E0"/>
         <rect x="8"  y="166" width="60" height="10" fill="#EAE7E0"/>
         <rect x="8"  y="182" width="80" height="10" fill="#EAE7E0"/>
       </g>
     </svg>`,

    // 4. Recipes — terracotta bg, layered cards
    `<svg viewBox="0 0 100 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
       <rect width="100" height="220" fill="#DA8C52"/>
       <text x="8" y="22" font-family="IBM Plex Mono" font-size="6" fill="#F3F3F1">9:41</text>
       <text x="8" y="48" font-family="Fraunces" font-size="14" fill="#F3F3F1">Recipes</text>
       <rect x="8"  y="68"  width="84" height="40" fill="#F3F3F1" opacity="0.9"/>
       <rect x="8"  y="116" width="84" height="40" fill="#F3F3F1" opacity="0.7"/>
       <rect x="8"  y="164" width="84" height="40" fill="#F3F3F1" opacity="0.5"/>
     </svg>`,

    // 5. Cook — dark, video-style with pulse
    `<svg viewBox="0 0 100 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
       <rect width="100" height="220" fill="#1A1A17"/>
       <text x="8" y="22" font-family="IBM Plex Mono" font-size="6" fill="#7A7A72">9:41</text>
       <text x="8" y="48" font-family="Fraunces" font-size="14" fill="#F3F3F1">Cook</text>
       <g class="va-tile-pulse">
         <rect x="20" y="80" width="60" height="80" rx="6" fill="#2A3A36"/>
         <circle cx="50" cy="120" r="14" fill="#DA8C52"/>
       </g>
       <rect x="8" y="180" width="84" height="4" fill="#2E2E2A"/>
     </svg>`,

    // 6. Day view — sage, animated activity bars
    `<svg viewBox="0 0 100 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
       <rect width="100" height="220" fill="#9CB39B"/>
       <text x="8" y="22" font-family="IBM Plex Mono" font-size="6" fill="#1A1A17">9:41</text>
       <text x="8" y="48" font-family="Fraunces" font-size="14" fill="#1A1A17">Day view</text>
       <g class="va-tile-bars">
         <rect x="14" y="120" width="10" height="40" fill="#1A1A17"/>
         <rect x="30" y="100" width="10" height="60" fill="#1A1A17"/>
         <rect x="46" y="80"  width="10" height="80" fill="#1A1A17"/>
         <rect x="62" y="110" width="10" height="50" fill="#1A1A17"/>
         <rect x="78" y="130" width="10" height="30" fill="#1A1A17"/>
       </g>
     </svg>`
  ];

  const tracks = document.querySelectorAll('.va-carousel__track:not(.va-carousel__track--manual)');
  if (!tracks.length) return;
  const sequence = VA_TILES.concat(VA_TILES);
  const html = sequence
    .map(tile => `<div class="va-carousel__item">${tile}</div>`)
    .join('');
  tracks.forEach(t => { t.innerHTML = html; });
})();


/* ─── Case study focus — one active at a time ─── */
(function () {
  const articles = document.querySelectorAll('.case-study');
  if (!articles.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ratios = new Map();
  articles.forEach(a => ratios.set(a, 0));

  function activate(a) {
    a.querySelectorAll('[data-carousel]').forEach(c => c.classList.add('is-active'));
    a.querySelectorAll('video').forEach(v => v.play().catch(() => {}));
  }

  function deactivate(a) {
    a.querySelectorAll('[data-carousel]').forEach(c => c.classList.remove('is-active'));
    a.querySelectorAll('video').forEach(v => v.pause());
  }

  function updateFocus() {
    let best = null;
    let bestRatio = 0;
    ratios.forEach((ratio, article) => {
      if (ratio > bestRatio) { bestRatio = ratio; best = article; }
    });
    articles.forEach(a => (a === best && bestRatio > 0) ? activate(a) : deactivate(a));
  }

  /* Fine-grained thresholds so the winner updates smoothly as you scroll */
  const steps = Array.from({ length: 21 }, (_, i) => i / 20);
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => ratios.set(e.target, e.intersectionRatio));
    updateFocus();
  }, { threshold: steps });

  articles.forEach(a => io.observe(a));
})();


/* ─── VA CAROUSEL — smooth pointer drag with momentum ─── */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.va-carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.va-carousel__track');
    if (!track) return;

    var active   = false;
    var locked   = false;
    var startX   = 0;
    var startY   = 0;
    var startTx  = 0;
    var currentTx = 0;
    var lastX    = 0;
    var lastTime = 0;
    var velocity = 0;
    var rafId    = null;

    function halfWidth() {
      return track.scrollWidth / 2;
    }

    function wrapTx(tx) {
      var half = halfWidth();
      if (half === 0) return tx;
      tx = tx % -half;
      if (tx > 0) tx -= half;
      return tx;
    }

    function getTx() {
      return new DOMMatrix(getComputedStyle(track).transform).m41;
    }

    function resumeFrom(tx) {
      var half     = halfWidth();
      if (half === 0) return;
      var duration = parseFloat(track.style.animationDuration ||
                     getComputedStyle(track).animationDuration) || 80;
      var progress = Math.abs(tx) / half;
      track.style.animationDelay     = (-progress * duration) + 's';
      track.style.transform          = '';
      track.style.animationPlayState = '';
    }

    function cancelRaf() {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    carousel.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      cancelRaf();
      active    = true;
      locked    = false;
      startX    = e.clientX;
      startY    = e.clientY;
      startTx   = getTx();
      currentTx = startTx;
      lastX     = e.clientX;
      lastTime  = Date.now();
      velocity  = 0;
      track.style.animationPlayState = 'paused';
      track.style.transform = 'translateX(' + startTx + 'px)';
    });

    carousel.addEventListener('pointermove', function (e) {
      if (!active) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;

      if (!locked) {
        /* Wait for enough movement to determine intent */
        if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
        /* Vertical intent — abandon drag so page can scroll */
        if (Math.abs(dy) > Math.abs(dx)) {
          active = false;
          resumeFrom(startTx);
          return;
        }
        locked = true;
        try { carousel.setPointerCapture(e.pointerId); } catch (_) {}
      }

      var now = Date.now();
      var dt  = now - lastTime;
      if (dt > 0) velocity = (e.clientX - lastX) / dt;
      lastX    = e.clientX;
      lastTime = now;

      currentTx = wrapTx(startTx + dx);
      track.style.transform = 'translateX(' + currentTx + 'px)';
    });

    function endDrag() {
      if (!active) return;
      active = false;
      locked = false;

      var vel = velocity * 16;
      var tx  = currentTx;

      function decelerate() {
        vel *= 0.90;
        tx   = wrapTx(tx + vel);
        track.style.transform = 'translateX(' + tx + 'px)';
        if (Math.abs(vel) > 0.3) {
          rafId = requestAnimationFrame(decelerate);
        } else {
          resumeFrom(tx);
        }
      }

      if (Math.abs(vel) > 0.5) {
        rafId = requestAnimationFrame(decelerate);
      } else {
        resumeFrom(tx);
      }
    }

    carousel.addEventListener('pointerup',     endDrag);
    carousel.addEventListener('pointercancel', endDrag);
  });
})();
