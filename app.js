const navbar = document.querySelector('.navbar-js');

if (navbar) {
  const menuBtn = navbar.querySelector('.hamburger-menuBtn-js');
  const mobileMenu = navbar.querySelector('.mobile-menu-js');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ==========================
// Image Slider Function
// ==========================//

const heroImages = document.querySelector('.hero-images');

if (heroImages) {
  const imageArray = Array.from(
    document.querySelectorAll('.hero-images-slide')
  );
  console.log(imageArray);
  imageArray[0].classList.add('activeImage');
  let counterForImage = 0;
  const imageSlide = (slideArray, classToAdd, classToRemove) => {
    slideArray.forEach((item) => {
      item.classList.remove(`${classToAdd}`);
      item.classList.remove(`${classToRemove}`);
    });

    counterForImage >= slideArray.length - 1
      ? (counterForImage = 0)
      : (counterForImage = counterForImage + 1);
    if (counterForImage === 0) {
      slideArray[counterForImage].classList.add(`${classToAdd}`);
      slideArray[slideArray.length - 1].classList.add(`${classToRemove}`);
    } else {
      slideArray[counterForImage].classList.add(`${classToAdd}`);
      slideArray[counterForImage - 1].classList.add(`${classToRemove}`);
    }
  };

  setInterval(() => {
    imageSlide(imageArray, 'activeImage', 'wasActiveImage');
  }, 5000);
}

const parallaxImage = document.querySelectorAll('.thumbnail');

if (parallaxImage) {
  new simpleParallax(parallaxImage, {
    orientation: 'down',
    scale: 1.3,
    delay: 1,
  });
}
