// this is for after clicking once, we have to moveOut the mouse over the element, then we can click again
var flipAnimation = document.querySelectorAll(".animation_flip");
flipAnimation.forEach((flipAnimation) => {
    flipAnimation.addEventListener("click", (event) => {
        flipAnimation.classList.toggle("flipped");
    });
    flipAnimation.addEventListener("mouseleave", () => {
        flipAnimation.classList.remove("flipped");
    })
});

// scroll Button to bottom and turn back
// var scrolltoTop = document.querySelector('.button__scroll-top');
// window.addEventListener('scroll', function () {
//     if (document.documentElement.scrollTop > 200) {
//         scrolltoTop.classList.add('scroll_toTop');
//     } else {
//         scrolltoTop.classList.remove('scroll_toTop');
//     }
// })
// $('.button__scroll-top').click(function () {
//     $('html').animate({
//         scrollTop: 0
//     }, 1000);
// });
// scrolltoTop.addEventListener('click', () => {
//     $('html').animate({
//         scrollTop: 0
//     }, 1000);
// })
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('.button__scroll-top').addClass('scroll_toTop');
    } else {
        $('.button__scroll-top').removeClass('scroll_toTop');
    }
})
$('.button__scroll-top').click(function () {
    $('html').animate({
        scrollTop: 0
    }, 50);
});