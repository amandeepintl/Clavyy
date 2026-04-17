tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'background':                '#f5f6ff',
            'surface':                   '#f5f6ff',
            'surface-bright':            '#f5f6ff',
            'surface-container-lowest':  '#ffffff',
            'surface-container-low':     '#edf0ff',
            'surface-container':         '#e3e8f8',
            'surface-container-high':    '#dde2f4',
            'surface-container-highest': '#d7dcef',
            'surface-dim':               '#ced4e8',
            'surface-variant':           '#d7dcef',
            'primary':                   '#53549a',
            'primary-dim':               '#47488d',
            'primary-container':         '#b1b2ff',
            'primary-fixed':             '#b1b2ff',
            'primary-fixed-dim':         '#a3a4f0',
            'on-primary':                '#f4f1ff',
            'on-primary-fixed':          '#16155b',
            'on-primary-fixed-variant':  '#36387c',
            'on-primary-container':      '#2d2e72',
            'secondary':                 '#415b8f',
            'secondary-dim':             '#344f82',
            'secondary-container':       '#bfd1ff',
            'secondary-fixed':           '#bfd1ff',
            'secondary-fixed-dim':       '#a9c3fe',
            'on-secondary':              '#f0f2ff',
            'on-secondary-container':    '#2b4679',
            'tertiary':                  '#525a79',
            'tertiary-dim':              '#464e6d',
            'tertiary-container':        '#ced6fb',
            'tertiary-fixed':            '#ced6fb',
            'tertiary-fixed-dim':        '#c0c8ec',
            'on-tertiary':               '#f1f2ff',
            'on-tertiary-container':     '#414a68',
            'on-surface':                '#2a2f39',
            'on-surface-variant':        '#575b67',
            'on-background':             '#2a2f39',
            'outline':                   '#737783',
            'outline-variant':           '#a9adba',
            'surface-tint':              '#53549a',
            'inverse-surface':           '#0a0e17',
            'inverse-on-surface':        '#999da9',
            'inverse-primary':           '#b1b2ff',
            'error':                     '#b41340',
            'error-dim':                 '#a70138',
            'error-container':           '#f74b6d',
            'on-error':                  '#ffefef',
            'on-error-container':        '#510017',
          },
          borderRadius: {
            DEFAULT: '1rem',
            lg:      '2rem',
            xl:      '3rem',
            full:    '9999px',
          },
          fontFamily: {
            headline: ['"Plus Jakarta Sans"', 'sans-serif'],
            body:     ['"Be Vietnam Pro"',    'sans-serif'],
            label:    ['"Be Vietnam Pro"',    'sans-serif'],
          },
        }
      }
    }

/* ─── State ──────────────────────────────────────────────── */
  const S = { cur: 0, q1: null, q2: null, q3: null };

  const LABELS = {
    middle:'Middle School', high:'High School',
    uni:'University', pro:'Professional',
    concepts:'Understanding concepts', memory:'Memorizing',
    focus:'Staying focused', time:'Time management',
    simple:'Simple explanations', examples:'Real-life examples',
    practice:'Practice questions', visual:'Visual learning',
  };

  const ICONS = {
    q1:'school', q2:'psychology', q3:'auto_stories',
  };

  const IC_BG = {
    q1:'#bfd1ff', q2:'#ced6fb', q3:'#b1b2ff',
  };
  const IC_FG = {
    q1:'#2b4679', q2:'#414a68', q3:'#36387c',
  };

  /* ─── Left Visual per step ───────────────────────────────── */
  function leftHtml(s) {
    if (s === 0) return `
      <div class="fu" style="font-family:'Be Vietnam Pro',sans-serif; font-size:11px; font-weight:700; color:#53549a; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:4px;">Why Clavyy?</div>
      ${statRow('people','50,000+','Active scholars','#bfd1ff','#2b4679','0')}
      ${statRow('trending_up','94%','Grade improvement rate','#ced6fb','#414a68','1')}
      ${statRow('bolt','2×','Faster information retention','#b1b2ff','#36387c','2')}
    `;
    if (s === 1) return `
      <div class="fu" style="font-family:'Be Vietnam Pro',sans-serif; font-size:11px; font-weight:700; color:#53549a; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:4px;">Did you know?</div>
      <div class="stat-c fu fu-1" style="margin-bottom:1rem;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:18px; font-weight:800; color:#2a2f39; letter-spacing:-0.02em; line-height:1.35; margin-bottom:8px;">
          "Personalised learning increases performance by up to 40%."
        </div>
        <div style="font-family:'Be Vietnam Pro',sans-serif; font-size:12px; color:#737783;">— Stanford Education Research, 2023</div>
      </div>
      ${checkRow('#bfd1ff','#2b4679','AI adapts to your exact level','2')}
      ${checkRow('#ced6fb','#414a68','Curriculum-aligned content','3')}
      ${checkRow('#b1b2ff','#36387c','Complexity scales with you','4')}
    `;
    if (s === 2) return `
      <div class="fu" style="font-family:'Be Vietnam Pro',sans-serif; font-size:11px; font-weight:700; color:#53549a; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:4px;">How Clavyy helps</div>
      ${featureCard('psychology','Socratic Tutoring','AI asks the right questions to guide you to answers yourself.','#bfd1ff','#2b4679','1')}
      ${featureCard('center_focus_strong','Focus Mode','Distraction-free sessions timed to your peak concentration window.','#b1b2ff','#36387c','2')}
      ${featureCard('memory','Spaced Repetition','Automatically resurfaces material right before you forget it.','#ced6fb','#414a68','3')}
    `;
    if (s === 3) return `
      <div class="fu" style="font-family:'Be Vietnam Pro',sans-serif; font-size:11px; font-weight:700; color:#53549a; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:4px;">Almost there!</div>
      <div class="stat-c fu fu-1" style="margin-bottom:1rem;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:18px; font-weight:800; color:#2a2f39; letter-spacing:-0.02em; line-height:1.35; margin-bottom:8px;">
          "Students who learn in their preferred style retain information <span style="color:#53549a;">3× more effectively.</span>"
        </div>
        <div style="font-family:'Be Vietnam Pro',sans-serif; font-size:12px; color:#737783;">— Clavyy Learning Research, 2024</div>
      </div>
      <div class="stat-c fu fu-2" style="display:flex; align-items:center; gap:1rem;">
        <div class="ic" style="background:#b1b2ff; width:44px; height:44px;">
          <span class="material-symbols-outlined" style="font-size:20px; color:#36387c; font-variation-settings:'FILL' 1;">auto_awesome</span>
        </div>
        <div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:14px; font-weight:700; color:#2a2f39;">Your AI is warming up</div>
          <div style="font-family:'Be Vietnam Pro',sans-serif; font-size:13px; color:#575b67;">One last step to complete setup</div>
        </div>
      </div>
    `;
    if (s === 4) {
      const rows = ['q1','q2','q3'].map(k => {
        const v = S[k];
        return v ? `
          <div class="stat-c fu" style="display:flex; align-items:center; gap:1rem;">
            <div class="ic" style="background:${IC_BG[k]}; width:44px; height:44px;">
              <span class="material-symbols-outlined" style="font-size:20px; color:${IC_FG[k]}; font-variation-settings:'FILL' 1;">${ICONS[k]}</span>
            </div>
            <div>
              <div style="font-family:'Be Vietnam Pro',sans-serif; font-size:11px; font-weight:700; color:#737783; letter-spacing:0.08em; text-transform:uppercase;">
                ${k==='q1'?'Level':k==='q2'?'Challenge':'Style'}
              </div>
              <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:15px; font-weight:700; color:#2a2f39;">${LABELS[v]}</div>
            </div>
          </div>` : '';
      }).join('');
      return `
        <div class="fu" style="font-family:'Be Vietnam Pro',sans-serif; font-size:11px; font-weight:700; color:#53549a; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:4px;">Your personalised profile</div>
        ${rows || '<div style="font-family:\'Be Vietnam Pro\',sans-serif; font-size:14px; color:#575b67;">No answers recorded.</div>'}
      `;
    }
    return '';
  }

  /* ─── HTML Helpers ───────────────────────────────────────── */
  function statRow(icon, num, label, bg, fg, delay) {
    return `
      <div class="stat-c fu fu-${delay}" style="display:flex; align-items:center; gap:1rem;">
        <div class="ic" style="background:${bg}; width:52px; height:52px;">
          <span class="material-symbols-outlined" style="color:${fg}; font-variation-settings:'FILL' 1;">${icon}</span>
        </div>
        <div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:26px; font-weight:800; color:#53549a; letter-spacing:-0.02em; line-height:1.1;">${num}</div>
          <div style="font-family:'Be Vietnam Pro',sans-serif; font-size:13px; color:#575b67;">${label}</div>
        </div>
      </div>`;
  }

  function checkRow(bg, fg, text, delay) {
    return `
      <div class="stat-c fu fu-${delay}" style="display:flex; align-items:center; gap:0.875rem; padding:0.875rem 1.25rem;">
        <div style="width:32px; height:32px; border-radius:9999px; background:${bg}; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <span class="material-symbols-outlined" style="font-size:16px; color:${fg}; font-variation-settings:'FILL' 1;">check</span>
        </div>
        <span style="font-family:'Be Vietnam Pro',sans-serif; font-size:14px; color:#575b67;">${text}</span>
      </div>`;
  }

  function featureCard(icon, title, body, bg, fg, delay) {
    return `
      <div class="stat-c fu fu-${delay}" style="display:flex; align-items:flex-start; gap:1rem; margin-bottom:0.5rem;">
        <div class="ic" style="background:${bg}; width:44px; height:44px; flex-shrink:0;">
          <span class="material-symbols-outlined" style="font-size:20px; color:${fg}; font-variation-settings:'FILL' 1;">${icon}</span>
        </div>
        <div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:14px; font-weight:700; color:#2a2f39; margin-bottom:3px;">${title}</div>
          <div style="font-family:'Be Vietnam Pro',sans-serif; font-size:13px; color:#575b67; line-height:1.55;">${body}</div>
        </div>
      </div>`;
  }

  /* ─── Navigation ─────────────────────────────────────────── */
  function goto(step) {
    // hide current
    document.getElementById('step-' + S.cur).classList.remove('active');

    S.cur = step;

    // nav pill
    const pill = document.getElementById('nav-pill');
    const navStep = document.getElementById('nav-step');
    if (step >= 1 && step <= 3) {
      pill.style.display = 'block';
      navStep.textContent = step + ' / 3';
    } else {
      pill.style.display = 'none';
    }

    // update left col
    document.getElementById('left-col').innerHTML = leftHtml(step);

    // if final, build summary chips
    if (step === 4) buildChips();

    // show new step
    const panel = document.getElementById('step-' + step);
    panel.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function next(fromStep) {
    const q = 'q' + fromStep;
    if (!S[q]) {
      // shake the options
      const grid = document.getElementById('q' + fromStep + '-grid') ||
                   document.querySelector('#step-' + fromStep + ' [data-g="' + q + '"]')?.parentElement;
      if (grid) {
        grid.classList.add('shake');
        setTimeout(() => grid.classList.remove('shake'), 450);
      }
      return;
    }
    goto(fromStep + 1);
  }

  function pick(el, group) {
    document.querySelectorAll('[data-g="' + group + '"]').forEach(c => c.classList.remove('sel'));
    el.classList.add('sel');
    S[group] = el.dataset.v;
  }

  function skipAll() { goto(4); }

  function buildChips() {
    const container = document.getElementById('summary-chips');
    if (!container) return;
    const pairs = [
      { k:'q1', icon:'school' },
      { k:'q2', icon:'psychology' },
      { k:'q3', icon:'auto_stories' },
    ];
    container.innerHTML = pairs.map(p => {
      const v = S[p.k];
      if (!v) return '';
      return `<span class="chip"><span class="material-symbols-outlined" style="font-size:15px;">${p.icon}</span>${LABELS[v]}</span>`;
    }).join('');
  }

  /* ─── Init ───────────────────────────────────────────────── */
  document.getElementById('left-col').innerHTML = leftHtml(0);