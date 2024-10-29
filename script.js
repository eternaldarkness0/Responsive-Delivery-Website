const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isActive = navLinks.classList.contains('active');
    menuBtnIcon.setAttribute('class', isActive ? 'ri-close-line' : 'ri-menu-line');
})

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    autoplay: {
        enabled: 1000,
    },
});

swiper.el.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
});

swiper.el.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
});

const options = {
    distance: '60px',
    origin: 'bottom',
    duration: 900,
}

ScrollReveal().reveal('.header-image img', {
    ...options,
    origin: 'right',
});

ScrollReveal().reveal('.header-tag', {
    ...options,
    delay: 400,
});

ScrollReveal().reveal('.header-content h1', {
    ...options,
    delay: 700,
});

ScrollReveal().reveal('.header-content .section-description', {
    ...options,
    delay: 1000,
});

ScrollReveal().reveal('.header-btns', {
    ...options,
    delay: 1300,
});

ScrollReveal().reveal('.service-card', {
    ...options,
    interval: 400,
});

ScrollReveal().reveal('.client-image img', {
    ...options,
    origin: 'left',
});

ScrollReveal().reveal('.client-content .section-subheader', {
    ...options,
    origin: 'right',
    delay: 400,
});

ScrollReveal().reveal('.client-content .section-header', {
    ...options,
    origin: 'right',
    delay: 700,
});

ScrollReveal().reveal('.client-content .section-description', {
    ...options,
    origin: 'right',
    delay: 1000,
});

ScrollReveal().reveal('.client-details', {
    ...options,
    origin: 'right',
    delay: 1300,
});

ScrollReveal().reveal('.client-rating', {
    ...options,
    origin: 'right',
    delay: 1600,
});

ScrollReveal().reveal('.download-image img', {
    ...options,
    origin: 'right',
});

ScrollReveal().reveal('.download-content .section-subheader', {
    ...options,
    origin: 'left',
    delay: 400,
});

ScrollReveal().reveal('.download-content .section-header', {
    ...options,
    origin: 'left',
    delay: 700,
});

ScrollReveal().reveal('.download-content .section-description', {
    ...options,
    origin: 'left',
    delay: 1000,
});

ScrollReveal().reveal('.download-btn', {
    ...options,
    origin: 'left',
    delay: 1300,
});
