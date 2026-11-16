// Collapsible abstracts: every ".abstract" block gets a button in front of it
// that shows/hides it. The button text comes from the block's label (default "Abstract").
document.querySelectorAll('.abstract').forEach(function (content) {
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'collapse';
  btn.textContent = content.dataset.label || 'Abstract';
  btn.setAttribute('aria-expanded', 'false');
  content.hidden = true;
  content.parentNode.insertBefore(btn, content);
  btn.addEventListener('click', function () {
    var open = content.hidden;
    content.hidden = !open;
    btn.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', String(open));
  });
});

// Open external links in a new tab.
document.querySelectorAll('main a[href^="http"]').forEach(function (a) {
  a.target = '_blank';
  a.rel = 'noopener';
});

// Dark/light theme switch. The choice is remembered for the next visit.
var themeToggle = document.getElementById('themeToggle');
themeToggle.checked = document.documentElement.getAttribute('data-theme') === 'dark';
themeToggle.addEventListener('change', function () {
  var theme = themeToggle.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('theme', theme); } catch (e) {}
});
