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
AOS.init({
    offset: 50,
    duration: 1000,

});
$(function () {
    $.scrollUp({
        scrollText: '<i class="fa-solid fa-arrow-up"></i>',
        scrollSpeed: 1000
    });
});
$('form').submit(function () {
    alert('From Submitted');
})

$('.readmore-btn').click(function () {
    $('.hero-details p').fadeToggle(1000)

})
