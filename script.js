// Collapsible "Abstract" buttons: each button shows/hides the block right after it.
document.querySelectorAll('.collapse').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var content = btn.nextElementSibling;
    var open = content.hidden;
    content.hidden = !open;
    btn.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', String(open));
  });
});

// Dark/light theme switch. The choice is remembered for the next visit.
var themeToggle = document.getElementById('themeToggle');
themeToggle.checked = document.documentElement.getAttribute('data-theme') === 'dark';
themeToggle.addEventListener('change', function () {
  var theme = themeToggle.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('theme', theme); } catch (e) {}
});
