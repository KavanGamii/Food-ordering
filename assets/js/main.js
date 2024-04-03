$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$(function () {
    $.scrollUp({
        animation: 'slide',
        scrollText: '<i class="fa-solid fa-arrow-up"></i>',
        scrollSpeed: 1500
    });
});