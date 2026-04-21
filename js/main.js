/* ============================================================
   JAMAL CAESAR — PORTFOLIO
   main.js
   Handles: sticky nav, mobile nav, scroll animations,
            skill bar animation, footer year
   ============================================================ */

(function () {
  'use strict';

  /* ── STICKY NAVBAR ────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Run on load

  /* ── MOBILE NAVIGATION TOGGLE ────────────────────────────── */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── INTERSECTION OBSERVER — FADE / SLIDE ANIMATIONS ─────── */
  const animatedElements = document.querySelectorAll('.fade-in, .fade-up');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve once animated so it stays visible after scrolling back
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately for older browsers
    animatedElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── SKILL BAR ANIMATION ──────────────────────────────────── */
  const skillFills = document.querySelectorAll('.skill-fill');

  if ('IntersectionObserver' in window && skillFills.length > 0) {
    const skillObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const targetWidth = fill.getAttribute('data-width');
          if (targetWidth) {
            // Small delay so CSS transition looks intentional
            setTimeout(function () {
              fill.style.width = targetWidth + '%';
            }, 200);
          }
          skillObserver.unobserve(fill);
        }
      });
    }, { threshold: 0.3 });

    skillFills.forEach(function (fill) {
      skillObserver.observe(fill);
    });
  } else {
    // Fallback
    skillFills.forEach(function (fill) {
      const targetWidth = fill.getAttribute('data-width');
      if (targetWidth) fill.style.width = targetWidth + '%';
    });
  }

  /* ── FOOTER YEAR ──────────────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ── SMOOTH SCROLL FOR ANCHOR LINKS ──────────────────────── */
  // Native smooth-scroll via CSS is set, but we add offset compensation
  // for the sticky navbar height.
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

})();
