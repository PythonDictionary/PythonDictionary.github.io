// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    nav.style.transition = 'opacity 0.3s';

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        const triggerPosition = 900;
        const hysteresis = 50;

        if (currentScroll > triggerPosition) {
            nav.style.opacity = '1';
            nav.style.pointerEvents = 'auto';
        } else if (currentScroll < (triggerPosition - hysteresis)) {
            nav.style.opacity = '0';
            nav.style.pointerEvents = 'none';
        }
        lastScroll = currentScroll;
    });
});