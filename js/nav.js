/*
 * Mobile menu helper. The menu itself opens and closes with CSS alone
 * (the #nav-toggle checkbox in the header); this only closes it in the
 * cases CSS cannot: after a link in the menu is used, on Escape, and on
 * a tap outside the header. Every page loads it; it does nothing on
 * desktop widths, where the menu button is hidden.
 */
(function (document) {
  var toggle = document.getElementById('nav-toggle');
  var header = toggle && toggle.closest('.site-header');
  var nav = header && header.querySelector('.nav');
  if (!toggle || !header || !nav) return;

  function close(returnFocus) {
    if (!toggle.checked) return;
    toggle.checked = false;
    if (returnFocus) toggle.focus();
  }

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) close(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Esc') close(true);
  });

  document.addEventListener('pointerdown', function (event) {
    if (!header.contains(event.target)) close(false);
  });
})(document);
