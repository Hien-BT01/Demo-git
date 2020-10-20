var element = document.querySelectorAll(".statistic-item-content-number"),
  speed = 10;
$(window).scroll(function () {
    $(this).scrollTop() > 2850 &&
      (element.forEach((e) => {
          var t = 0,
            a = function () {
              var o = parseFloat(e.getAttribute("data-number")),
                l = e.getAttribute("data-unit");
              (t += o / speed) < o
                ?
                ((e.innerHTML = parseInt(t) + l), setTimeout(a, 80)) :
                (e.innerHTML = o + l);
            };
          a();
        }),
        $(this).unbind());
  }),
  $(window).scroll(function () {
    $(this).scrollTop() > 50 ?
      ($(".header-navbar-side-button").fadeIn(),
        $(".header-navbar").addClass("header_navbar_fix"),
        $(".header-nav-logo img").attr(
          "src",
          "http://demo.themelogi.com/navian/wp-content/themes/navian/assets/img/logo-dark.png"
        )) :
      ($(".header-navbar").removeClass("header_navbar_fix"),
        $(".header-nav-logo img").attr(
          "src",
          "http://demo.themelogi.com/navian/wp-content/themes/navian/assets/img/logo-light.png"
        ));
  }),
  $(".header-navbar-side-button").click(function () {
    $("html").animate({
        scrollTop: 0,
      },
      500
    );
  }),
  $(".owl-carousel0").owlCarousel({
    loop: !0,
    autoplay: !0,
    autoplayHoverPause: !0,
    autoplayTimeout: 2e3,
    margin: 10,
    nav: !0,
    dots: !0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1e3: {
        items: 4,
      },
    },
  }),
  $(".owl-carousel1").owlCarousel({
    loop: !0,
    autoplay: !0,
    autoplayHoverPause: !0,
    autoplayTimeout: 2e3,
    margin: 10,
    nav: !0,
    dots: !0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1e3: {
        items: 3,
      },
    },
  });
var owl = $(".owl-carousel");
owl.owlCarousel({
    loop: !0,
    nav: !0,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      960: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  }),
  owl.on("mousewheel", ".owl-stage", function (e) {
    e.deltaY > 0 ? owl.trigger("next.owl") : owl.trigger("prev.owl"),
      e.preventDefault();
  });
const collapesHeader = document.querySelectorAll(
  ".question-answer__detail__collapse__list"
);
collapesHeader.forEach((e) => {
  e.addEventListener("click", (t) => {
    const a = document.querySelector(
      ".question-answer__detail__collapse__list.question-answer__detail__collapse__list__active"
    );
    a &&
      a !== e &&
      (a.classList.toggle("question-answer__detail__collapse__list__active"),
        (a.nextElementSibling.style.maxHeight = 0)),
      e.classList.toggle("question-answer__detail__collapse__list__active");
    const o = e.nextElementSibling;
    e.classList.contains("question-answer__detail__collapse__list__active") ?
      (o.style.maxHeight = o.scrollHeight + "px") :
      (o.style.maxHeight = 0);
  });
});