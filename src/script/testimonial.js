import Splide from '@splidejs/splide';
export function initTestimonialSlider() {
    const testimonialCarousel = document.querySelector('.splide');
    if (testimonialCarousel) {
        const splide = new Splide(testimonialCarousel, {
            perPage: 1,
            pagination: true,
            autoplay: true,
            arrows: false,
            interval: 3000,
        });
        splide.mount();
        document
            .getElementById('testimonial-prev')
            .addEventListener('click', () => {
                splide.go('<');
            });
        document
            .getElementById('testimonial-next')
            .addEventListener('click', () => {
                splide.go('>');
            });
    }
}
