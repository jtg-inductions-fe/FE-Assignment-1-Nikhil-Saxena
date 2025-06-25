import '../styles/main.scss';
import { initNavbarToggle } from './navbar';
import { initTestimonialSlider } from './testimonial';
import { handleFooterList } from './footer';

document.addEventListener('DOMContentLoaded', () => {
    initNavbarToggle();
    initTestimonialSlider();
    handleFooterList();
});
