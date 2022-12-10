// (() => {
//     const menuBthRef = document.querySelector('[data-manu-button]');
//     const mobileMenuRef = document.querySelector('[data-menu]');
  
//     menuBthRef.addEventListener('click', () => {
//       const expanded =
//         menuBthRef.getAttribute('aria-expanded') === 'true' || false;

//       menuBthRef.classList.toggle('is-open');
//       menuBthRef.setAttribute('aria-expanded', !expanded);

//       mobileMenuRef.classList.toggle('is-open');
//     });
//   })();

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();