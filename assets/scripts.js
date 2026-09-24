// Theme toggle. The initial theme is already set (in <head>, before paint); this just flips it and remembers the choice.
(function () {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    var root = document.documentElement;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();
