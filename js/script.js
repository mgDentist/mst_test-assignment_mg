const PAGE_SCROLL_OFFSET = 50;

const isPageScrolled = () => {
    const scrollPosition = window.scrollY;
    const header = document.getElementById('header');

    if (scrollPosition > PAGE_SCROLL_OFFSET) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

const toggleMenu = () => {
    const burgerButton = document.querySelector('.header__burger-button');
    const header = document.getElementById('header');
    const body = document.body;

    if (burgerButton) {
        burgerButton.addEventListener('click', () => {
            header.classList.toggle('menu-open');
            body.classList.toggle('no-scroll');
        });

        const navLinks = document.querySelectorAll('.header__nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('menu-open');
                body.classList.remove('no-scroll');
            });
        });
    }
}

window.addEventListener('scroll', isPageScrolled);

document.addEventListener('DOMContentLoaded', () => {
    isPageScrolled();
    toggleMenu();
});