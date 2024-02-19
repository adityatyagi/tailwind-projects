const initApp = () => {
    const hamburgerMenuBtn = document.getElementById('hamburger-button');
    console.log("🚀 ~ initApp ~ hamburgerMenuBtn:", hamburgerMenuBtn)

    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        console.log("🚀 ~ toggleMenu ~ toggleMenu:", toggleMenu)
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerMenuBtn.classList.toggle('toggle-btn');
    }

    hamburgerMenuBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
};

// init the app after the DOM has been completely loaded;
document.addEventListener('DOMContentLoaded', initApp);