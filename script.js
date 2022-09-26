const mb_button = document.getElementById('mb-button');
const expand_list_mb_button  = document.getElementById('expand-list-mb-button');
const overlay = document.getElementById('mb-overlay');

mb_button.addEventListener('click', () => {
    //The links
    const nav_links = document.getElementById('nav-links');
    nav_links.classList.toggle('active');
    console.log(nav_links)
    //Dark overlay and tune opacity  & lock the body
    overlay.classList.toggle('active');
    document.body.classList.toggle('active-overlay');
});

overlay.addEventListener('click', () => {
    mb_button.dispatchEvent(new Event('click'));
})

expand_list_mb_button.addEventListener('click', () => {
    mb_button.dispatchEvent(new Event('click'));
});

const carousel_buttons = document.querySelectorAll('[data-carousel-button]');
carousel_buttons.forEach(button => {
    button.addEventListener('click', () => {
        //Image carousel
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = document.querySelector('[data-carousel]').querySelectorAll('[data-carousel-slide]');
        //Detail carousel
        const details = document.querySelector('[data-carousel-detail]').querySelectorAll('[data-carousel-detail-item]');

        const activeSlide = [...slides].indexOf(document.querySelector('[data-active-img]'));
        //The [...<something>] turns this into an array
        let newIndex = activeSlide + offset;

        if(newIndex < 0) newIndex = slides.length - 1;
        if(newIndex > slides.length - 1) newIndex = 0;

        slides[newIndex].dataset.activeImg = true;
        details[newIndex].dataset.activeDetail = true;
        delete slides[activeSlide].dataset.activeImg;
        delete details[activeSlide].dataset.activeDetail;
    });
});