export function initNavbarToggle() {
    const navbarMenuButton = document.getElementById('navbar__menu');
    const navigationLinks = document.getElementById('navbar__links');
    const navbarMenuActionButtons = document.getElementById('navbar__actions');

    if (!navbarMenuButton || !navigationLinks || !navbarMenuActionButtons)
        return;

    let isMenuOpen = false;

    navbarMenuButton.addEventListener('click', () => {
        const screenWidth = window.innerWidth;
        isMenuOpen = !isMenuOpen;
<<<<<<< HEAD
        navbarMenuButton.setAttribute('aria-expanded', String(isMenuOpen));
=======
>>>>>>> 0f85a24 (Added Trasition for Links and Actions)
        // For Large Screens
        if (screenWidth > 1440) return;
        // For Medium Screens
        if (screenWidth >= 1024 && screenWidth <= 1440) {
            navigationLinks.classList.toggle('navbar__links--open', isMenuOpen);
            return;
        }

        // For smaller screens
        navigationLinks.classList.toggle('navbar__links--open', isMenuOpen);
        navbarMenuActionButtons.classList.toggle(
            'navbar__actions--open',
            isMenuOpen,
        );
    });
<<<<<<< HEAD

    // Enter Key Function of Navbar Toggle Button
    navbarMenuButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navbarMenuButton.click();
        }
    });
=======
>>>>>>> 0f85a24 (Added Trasition for Links and Actions)
}
