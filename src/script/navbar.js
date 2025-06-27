export function initNavbarToggle() {
    const body = document.body;
    const navbar = document.getElementById('navbar');
    const navbarContainer = document.getElementById('navbar__container');
    const navbarMenuButton = document.getElementById('navbar__menu');
    const navigationLinks = document.getElementById('navbar__links');
    const navbarMenuActionButtons = document.getElementById('navbar__actions');

    if (!navbarMenuButton || !navigationLinks || !navbarMenuActionButtons)
        return;

    let isMenuOpen = false;

    navbarMenuButton.addEventListener('click', () => {
        const screenWidth = window.innerWidth;
        isMenuOpen = !isMenuOpen;
        navbarMenuButton.setAttribute('aria-expanded', String(isMenuOpen));
        // For Large Screens
        if (screenWidth > 1440) return;
        // For Medium Screens
        if (screenWidth >= 1024 && screenWidth <= 1440) {
            navigationLinks.classList.toggle('navbar__links--open', isMenuOpen);
            navbarContainer.classList.toggle(
                'navbar__container--open',
                isMenuOpen,
            );
            body.classList.toggle('.no-scroll');
            return;
        }

        // For smaller screens
        navigationLinks.classList.toggle('navbar__links--open', isMenuOpen);
        navbarMenuActionButtons.classList.toggle(
            'navbar__actions--open',
            isMenuOpen,
        );
        navbarContainer.classList.toggle('navbar__container--open', isMenuOpen);
        body.classList.toggle('.no-scroll');
    });

    document.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('navbar--scrolled');
        }
    });

    // Enter Key Function of Navbar Toggle Button
    navbarMenuButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navbarMenuButton.click();
        }
    });
}
