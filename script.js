/* Walker Road Studios — script.js */

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (toggle && navMenu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });

  // Close on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navMenu.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    }
  });
}

// Keyboard: close nav on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
    toggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    toggle.focus();
  }
});
