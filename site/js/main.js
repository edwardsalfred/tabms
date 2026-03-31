/* ════════════════════════════════════════════════════════════
   THE TAB — main.js
   Animations: GSAP + ScrollTrigger
   ════════════════════════════════════════════════════════════ */

/* ── Nav: transparent → solid on scroll ─────────────────── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Mobile menu toggle ──────────────────────────────────── */
(function () {
  const hamburger = document.querySelector('.nav-hamburger');
  const menu      = document.querySelector('.mobile-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    menu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

/* ── Active nav link ─────────────────────────────────────── */
(function () {
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── GSAP animations (loaded after DOM ready) ────────────── */
document.addEventListener('DOMContentLoaded', function () {
  // If GSAP isn't available, reveal everything and exit
  if (typeof gsap === 'undefined') {
    document.querySelectorAll('.will-animate').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ── Hero animations ──────────────────────────────────── */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  const heroEyebrow = document.querySelector('.hero-eyebrow');
  const heroH1      = document.querySelector('.hero h1');
  const heroSub     = document.querySelector('.hero-sub');
  const heroActions = document.querySelector('.hero-actions');
  const heroScroll  = document.querySelector('.hero-scroll');

  if (heroH1) {
    heroTl
      .from(heroEyebrow, { y: 20, opacity: 0, duration: 0.7, delay: 0.3 })
      .from(heroH1,      { y: 40, opacity: 0, duration: 0.9 }, '-=0.4')
      .from(heroSub,     { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
      .from(heroActions, { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
      .from(heroScroll,  { opacity: 0, duration: 0.6 }, '-=0.2');
  }

  /* ── Hero parallax ────────────────────────────────────── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }

  /* ── Generic fade-up scroll animations ────────────────── */
  gsap.utils.toArray('.will-animate').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        }
      }
    );
  });

  /* ── Stagger: KGS cards ────────────────────────────────── */
  const kgsCards = gsap.utils.toArray('.kgs-card');
  if (kgsCards.length) {
    gsap.from(kgsCards, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.kgs-grid',
        start: 'top 85%',
        once: true,
      }
    });
  }

  /* ── Stagger: ministry cards ───────────────────────────── */
  const ministryCards = gsap.utils.toArray('.ministry-card, .ministry-full-card');
  if (ministryCards.length) {
    gsap.from(ministryCards, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ministryCards[0].closest('.ministry-grid, .ministry-full-grid'),
        start: 'top 85%',
        once: true,
      }
    });
  }

  /* ── Stagger: event cards ──────────────────────────────── */
  const eventCards = gsap.utils.toArray('.event-card');
  if (eventCards.length) {
    gsap.from(eventCards, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.events-grid',
        start: 'top 85%',
        once: true,
      }
    });
  }

  /* ── Stagger: leader cards ─────────────────────────────── */
  const leaderCards = gsap.utils.toArray('.leader-card');
  if (leaderCards.length) {
    gsap.from(leaderCards, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.leadership-grid',
        start: 'top 85%',
        once: true,
      }
    });
  }

  /* ── Counter animation ─────────────────────────────────── */
  const statNums = document.querySelectorAll('.stat-num[data-count]');
  if (statNums.length) {
    const counterTrigger = statNums[0].closest('.stats-bar, .stats-grid');
    gsap.from(counterTrigger, {
      scrollTrigger: {
        trigger: counterTrigger,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          statNums.forEach(el => {
            const target = parseInt(el.dataset.count, 10);
            gsap.to({ val: 0 }, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                el.textContent = Math.round(this.targets()[0].val) + (el.dataset.suffix || '');
              }
            });
          });
        }
      },
      opacity: 0
    });
  }

  /* ── Horizontal line reveals ───────────────────────────── */
  gsap.utils.toArray('.section-line').forEach(line => {
    gsap.from(line, {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: line, start: 'top 90%', once: true }
    });
  });

  /* ── Quote reveal ──────────────────────────────────────── */
  const quote = document.querySelector('.quote-section blockquote');
  if (quote) {
    gsap.from(quote, {
      opacity: 0,
      y: 32,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: quote, start: 'top 85%', once: true }
    });
  }

});
