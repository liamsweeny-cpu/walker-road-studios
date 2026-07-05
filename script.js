/* Walker Road Studios — script.js */
const toggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (toggle && navMenu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    });
  });
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navMenu.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    }
  });
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
    toggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    toggle.focus();
  }
});
