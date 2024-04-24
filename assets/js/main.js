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
        scrollText: '<i class="fa-solid fa-arrow-up"></i>',
        scrollSpeed: 1500
    });
});
$('form').submit(function () {
    alert('From Submitted');
})

$('.readmore-btn').click(function () {
    $('.hero-details p').fadeToggle(1000)

})
AOS.init({
    offset: 50,
    duration: 1000,
    once: true,
});
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
