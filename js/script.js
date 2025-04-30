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

window.addEventListener('scroll', isPageScrolled);

document.addEventListener('DOMContentLoaded', isPageScrolled);