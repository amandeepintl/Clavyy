// ── BLOB CURSOR ─────────────────────────────────────────────
    (function () {
      const main = document.querySelector('.blob-main');
      if (!main) return;

      const trailCount = 3;
      const sizes = [36, 56, 44];
      const innerSizes = [0, 0, 0]; // Removed inner dot as requested previously
      const fillColor = '#00A8C2';
      const innerColor = 'rgba(255,255,255,0)';
      const opacities = [0.8, 0.5, 0.5];
      const shadowColor = 'rgba(0,0,0,0.5)';
      const shadowOffsetX = 5, shadowOffsetY = 5, shadowBlur = 6;
      const fastDuration = 0.05, slowDuration = 0.25; // Sped up the trail to prevent tearing apart
      const fastEase = 'power3.out', slowEase = 'power1.out';

      const blobs = [];
      for (let i = 0; i < trailCount; i++) {
        const blob = document.createElement('div');
        blob.className = 'blob';
        blob.style.width = sizes[i] + 'px';
        blob.style.height = sizes[i] + 'px';
        blob.style.borderRadius = '50%';
        blob.style.backgroundColor = fillColor;
        blob.style.opacity = opacities[i];
        blob.style.boxShadow = `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`;
        blob.style.visibility = 'hidden'; // Hide until mouse moved

        main.insertBefore(blob, main.firstChild);
        blobs.push(blob);
      }

      let initialized = false;

      function initGsap() {
        if (!window.gsap) { setTimeout(initGsap, 50); return; }
        blobs.forEach(b => gsap.set(b, { xPercent: -50, yPercent: -50 }));

        function handleMove(e) {
          if (!initialized) {
            blobs.forEach(b => b.style.visibility = 'visible');
            gsap.to(main, { opacity: 1, duration: 0.2 });
            initialized = true;
          }
          const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
          const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;
          blobs.forEach((el, i) => {
            gsap.to(el, {
              x: x, y: y,
              duration: i === 0 ? fastDuration : slowDuration,
              ease: i === 0 ? fastEase : slowEase
            });
          });
        }

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove);

        // Auto-hide when leaving window
        document.documentElement.addEventListener('mouseleave', () => {
          if (initialized) gsap.to(main, { opacity: 0, duration: 0.3 });
        });
        document.documentElement.addEventListener('mouseenter', () => {
          if (initialized) gsap.to(main, { opacity: 1, duration: 0.3 });
        });
      }
      initGsap();
    })();

    // ── BORDER GLOW INTEGRATION ─────────────────────────────────
    (function () {
      function parseHSL(hslStr) {
        const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
        if (!match) return { h: 40, s: 80, l: 80 };
        return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
      }
      function applyGlowVars(el, glowColor, intensity) {
        const { h, s, l } = parseHSL(glowColor);
        const base = `${h}deg ${s}% ${l}%`;
        const opacities = [100, 60, 50, 40, 30, 20, 10];
        const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10'];
        for (let i = 0; i < opacities.length; i++) {
          el.style.setProperty(`--glow-color${keys[i]}`, `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`);
        }
      }
      const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
      const GRADIENT_KEYS = ['--gradient-one', '--gradient-two', '--gradient-three', '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven'];
      const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];
      function applyGradientVars(el, colors) {
        for (let i = 0; i < 7; i++) {
          const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
          el.style.setProperty(GRADIENT_KEYS[i], `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`);
        }
        el.style.setProperty('--gradient-base', `linear-gradient(${colors[0]} 0 100%)`);
      }

      const getCenter = el => {
        const rect = el.getBoundingClientRect();
        return [rect.width / 2, rect.height / 2];
      };

      document.querySelectorAll('.bc').forEach(card => {
        card.classList.add('border-glow-card');

        const edgeLight = document.createElement('span');
        edgeLight.className = 'edge-light';
        card.appendChild(edgeLight);

        // Match properties to Clavyy theme
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        card.style.setProperty('--card-bg', isDark ? 'var(--surface-lowest)' : '#ffffff');
        applyGlowVars(card, "188 100 38", 1.0); // Brand Teal tone
        applyGradientVars(card, ['#00A8C2', '#D59C5F', '#577174']);

        card.addEventListener('pointermove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const [cx, cy] = getCenter(card);
          const dx = x - cx, dy = y - cy;
          let kx = Infinity, ky = Infinity;
          if (dx !== 0) kx = cx / Math.abs(dx);
          if (dy !== 0) ky = cy / Math.abs(dy);
          const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);

          let angle = 0;
          if (dx !== 0 || dy !== 0) {
            angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
            if (angle < 0) angle += 360;
          }

          card.style.setProperty('--edge-proximity', (edge * 100).toFixed(3));
          card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
        });

        // Update background properly if theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          card.style.setProperty('--card-bg', e.matches ? 'var(--surface-lowest)' : '#ffffff');
        });
      });
    })();

    // ── RETRACTABLE NAV ─────────────────────────────────────────
    (function () {
      const nav = document.getElementById('main-nav');
      let lastY = window.scrollY;
      window.addEventListener('scroll', function () {
        const y = window.scrollY;
        if (y > 120 && y > lastY) nav.classList.add('nav-hidden');
        else nav.classList.remove('nav-hidden');
        lastY = y;
      }, { passive: true });
    })();

    // ── SCROLL REVEAL ───────────────────────────────────────────
    (function () {
      const els = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e, i) {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = (i % 4) * 0.08 + 's';
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });
      els.forEach(function (el) { io.observe(el); });
    })();

    // ── STATS BAR ANIMATION ─────────────────────────────────────
    (function () {
      const bars = document.querySelectorAll('.stats-bar-fill');
      const gaugeArc = document.getElementById('gauge-arc');
      function animate() {
        bars.forEach(function (b) { b.style.width = (b.getAttribute('data-w') || 0) + '%'; });
        if (gaugeArc) {
          gaugeArc.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)';
          gaugeArc.style.strokeDashoffset = 301.6 * (1 - 0.82);
        }
      }
      const sec = document.querySelector('.sec-stats');
      if (sec && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { animate(); }
          });
        }, { threshold: 0.15 }).observe(sec);
      } else { animate(); }
    })();

    // ── SMOOTH SCROLL FOR NAV LINKS ─────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });