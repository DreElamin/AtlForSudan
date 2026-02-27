/* Atlanta For Sudan — Main JS */

(function () {
  'use strict';

  /* ── Mobile nav toggle ── */
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '✕' : '☰';
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    /* Close menu on outside click */
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });

    /* Close menu on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
        toggle.setAttribute('aria-label', 'Open menu');
        toggle.focus();
      }
    });
  }

  /* ── Accordion ── */
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const bodyId   = this.getAttribute('aria-controls');
      const body     = bodyId ? document.getElementById(bodyId) : null;

      /* Close all other open items */
      document.querySelectorAll('.accordion-trigger').forEach(function (t) {
        const id = t.getAttribute('aria-controls');
        const b  = id ? document.getElementById(id) : null;
        t.setAttribute('aria-expanded', 'false');
        if (b) b.classList.remove('open');
      });

      /* Toggle this one */
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        if (body) body.classList.add('open');
      }
    });
  });

  /* ── Contact form with Formspree (progressive enhancement) ── */
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const data   = new FormData(form);
      const action = form.getAttribute('action');

      /* Only attempt async if the action URL looks real (not placeholder) */
      if (action && !action.includes('XXXXXXXX')) {
        const btn = form.querySelector('[type="submit"]');
        if (btn) {
          btn.disabled    = true;
          btn.textContent = 'Sending…';
        }

        fetch(action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        })
          .then(function (res) {
            if (res.ok) {
              form.style.display = 'none';
              success.style.display = 'block';
              success.focus();
            } else {
              /* Fall back to native submit */
              form.submit();
            }
          })
          .catch(function () {
            form.submit();
          });
      } else {
        /* Form endpoint not configured — show placeholder success for demo */
        form.style.display    = 'none';
        success.style.display = 'block';
        success.focus();
      }
    });
  }

  /* ── Smooth reveal on scroll (simple IntersectionObserver) ── */
  if ('IntersectionObserver' in window) {
    const cards = document.querySelectorAll('.card, .event-card, .value-item');
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity    = '1';
            entry.target.style.transform  = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    cards.forEach(function (card) {
      card.style.opacity   = '0';
      card.style.transform = 'translateY(18px)';
      card.style.transition = 'opacity .4s ease, transform .4s ease';
      observer.observe(card);
    });
  }
})();
