const navbar = document.querySelector('.navbar-js');

if (navbar) {
  const menuBtn = navbar.querySelector('.hamburger-menuBtn-js');
  const mobileMenu = navbar.querySelector('.mobile-menu-js');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}
