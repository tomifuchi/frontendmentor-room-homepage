const mb_button = document.getElementById('mb-button');
const expand_list_mb_button  = document.getElementById('expand-list-mb-button');
const overlay = document.getElementById('mb-overlay');

mb_button.addEventListener('click', () => {
    const nav_links = document.getElementById('nav-links');
    nav_links.classList.toggle('active');
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