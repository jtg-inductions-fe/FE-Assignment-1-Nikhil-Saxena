export const handleFooterList = () => {

    const headingWrappers = document.querySelectorAll(
        '.footer__list-heading-wrapper',
    );

    headingWrappers.forEach((wrapper) => {
        wrapper.addEventListener('click', function () {
            const list = this.nextElementSibling;
            const icon = this.children[1];
            if (list.classList.contains('footer__list-items--open')) {
                list.classList.remove('footer__list-items--open');
                icon.classList.remove('footer__list-icon--open');
            } else {
                icon.classList.add('footer__list-icon--open');
                list.classList.add('footer__list-items--open');
            }
        });
    });
};

