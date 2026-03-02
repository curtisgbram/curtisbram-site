(() => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  // Footer year (optional, won't error if element missing)
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (!btn || !nav) return;

  const setOpen = (open) => {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
  };

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!expanded);
  });

  // Close the menu after clicking a link (mobile)
  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'A') setOpen(false);
  });
})();
