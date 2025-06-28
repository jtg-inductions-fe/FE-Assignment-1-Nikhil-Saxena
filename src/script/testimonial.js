import Splide from '@splidejs/splide';

export const initTestimonialSlider = () => {
    const testimonialCarousel = document.querySelector('.splide');
    if (testimonialCarousel) {
        const splide = new Splide(testimonialCarousel, {
            perPage: 1,
            pagination: true,
        });
        splide.mount();
    }
};
