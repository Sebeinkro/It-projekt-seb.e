const splashScreen = document.getElementById('splash-screen');
const navbar = document.getElementById('navbar');


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        setTimeout(() => {
            splashScreen.remove();

        }, 100)
    }, 3500)
});

let prevY = window.scrollY;
window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    if (prevY > currentY) 
        navbar.classList.remove('hidden');
    else
        navbar.classList.add('hidden');

    prevY = currentY;
});