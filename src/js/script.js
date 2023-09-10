// ==============================SELECTORS=====================================
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
// ============================================================================



// ==============================ON-PAGE-LOAD==================================
window.onbeforeunload = () => {
    localStorage.setItem('scrollpos', window.scrollY);
};
// ============================================================================



// ==============================HANDLERS====================================
const handleRelocatingAfterPageReload = () => {
    const scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) {
        window.scrollTo(0, scrollpos);
    }
}

const handleHamburgerDisplay = () => {
    // Check if `default` is present in either the overlay or the hamburger menu classList.
    // If it is, remove it and add the fade-in class to both the overlay and the hamburger menu.
    //              default -> the overlay and the hamburger menu are currently being hidden.
    // Else, continue with the animation handling.
    //              fade-in -> the overlay and the hamburger menu are currently being shown.
    //              fade-out -> the overlay and the hamburger menu are currently being hidden.
    if ($('.overlay').classList.contains('default') || $('.hamburger-menu').classList.contains('default')) {
        $('.overlay').classList.remove('default');
        $('.hamburger-menu').classList.remove('default');

        $('.overlay').classList.add('fade-in');
        $('.hamburger-menu').classList.add('fade-in');
    } else {
        $('.overlay').classList.contains('fade-in') ? (
            $('.overlay').classList.replace('fade-in', 'fade-out')
        ) : (
            $('.overlay').classList.replace('fade-out', 'fade-in')
        );

        $('.hamburger-menu').classList.contains('fade-in') ? (
            $('.hamburger-menu').classList.replace('fade-in', 'fade-out')
        ) : (
            $('.hamburger-menu').classList.replace('fade-out', 'fade-in')
        );
    }
}
// ============================================================================



// ==============================EVENT-LISTENERS===============================
document.addEventListener('DOMContentLoaded', handleRelocatingAfterPageReload);
$('#toggle').addEventListener('click', handleHamburgerDisplay);
// ============================================================================