//Header Scroll Color Change
let header = document.querySelector('header');
window.addEventListener('scroll',() => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
//Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//Remove Menu On Scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}