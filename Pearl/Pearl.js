let buttonDesmosCustomMades = document.querySelectorAll("[data-filter]");
let imageDemosCustomMades = document.querySelectorAll("[data-content]");
let $itemList = $(".Demos-list__items");
$itemList.isotope({
    itemSelector: '.All',
    layoutMode: 'masonry'
});
buttonDesmosCustomMades.forEach(tab => {
    tab.addEventListener('click',() => {
        let buttonTarget = tab.getAttribute('data-filter');
        buttonDesmosCustomMades.forEach(buttonClick => {
            buttonClick.classList.remove("colorChecked");
        })
        tab.classList.add("colorChecked");
        $itemList.isotope({
            filter: buttonTarget
        })
    })
})
let dropDownMenu = document.querySelector(".Demos-list__topics");
let dropdownIcon = document.querySelector(".dropdown-button__list__icon");
let dropdownButton = document.querySelector(".dropdown-button__list");
// let textButton = document.querySelector(".dropdown-button__list_text");
dropdownButton.addEventListener("click",(e) => {
    dropdownIcon.classList.toggle("rotate");
    dropDownMenu.classList.toggle("activeOpen");
    // buttonDesmosCustomMades.forEach(button => {
    //     button.addEventListener("click",function(){
    //         textButton.innerText = button.innerText;
    //     })
    // })
    $(".topic").click(function(){
        $(".dropdown-button__list_text").text($(this).text());
    })
})

// $(window).scroll(function(){
//     if($(window).scrollTop() >= 50){
//         $(".header-nav").css("transition","0.3s","ease-in-out");
//         $(".header-nav").addClass("fix-navbar");
//     }else{
//         $(".header-nav").removeClass("fix-navbar")
//     }
// })
// $(".dropdown-menu__button").click(function(e){
//     e.stopPropagation()
//     $(".navbar-item").toggleClass("dropdown__res");
//     $(".button-click").toggleClass("closeX")
//     if($(window).width() < 975){
//         $(".header-nav .container").toggleClass("nav__active");
//     }
// });
$(document).ready(function(){
    if($(window).width() < 975){
        $(".logo img").attr("src","https://pearl.stylemixthemes.com/landing/assets/images/header/logo-white.png");
        $(".navbar-item").css("top","0");
        $(".header-image").css("display","none");
    }else{
        $(".logo img").attr("src","https://pearl.stylemixthemes.com/landing/assets/images/header/logo.png");
        $(".header-image").css("display","block");
    }
    $(window).resize(function(){
        if($(this).width() < 975){
            $(".logo img").attr("src","https://pearl.stylemixthemes.com/landing/assets/images/header/logo-white.png");
            $(".header-image").css("display","none");
            $(".navbar-item").css("top","0");
        }else{
            $(".logo img").attr("src","https://pearl.stylemixthemes.com/landing/assets/images/header/logo.png");
            $(".header-image").css("display","block");
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop() >= 50){
            $(".header-nav").css("transition","0.3s","ease-in-out");
            $(".header-nav").addClass("fix-navbar");
            $(".navbar-item").css("top","0");
        }else{
            $(".header-nav").removeClass("fix-navbar")
            if($(window).width() < 975){
                $(".navbar-item").css("top","0");
            }else{
                $(".navbar-item").css("top","20px");
            }
        }
    })
    $(".dropdown-menu__button").click(function(e){
        e.stopPropagation()
        $(".navbar-item").toggleClass("dropdown__res");
        $(".button-click").toggleClass("closeX")
        if($(window).width() < 975){
            $(".header-nav .container").toggleClass("nav__active");
        }
    });
    $(".menu-list__items").click(function(e){
        e.stopPropagation();
        $(this).children(".menu-list__items-icon").toggleClass("updown");
        $(this).find(".subMenu-list").toggleClass("activeSub");
        $(this).find(".subMenu-short-list").toggleClass("activeSub");
    });
    VanillaTilt.init(document.querySelectorAll(".image-box"), {
        max: 30,
        speed: 3000
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
          $(".button__scroll-top").addClass("scroll__toTop");
        } else {
          $(".button__scroll-top").css("transition", "1.5s");
          $(".button__scroll-top").removeClass("scroll__toTop");
        }
      });
      $(".button__scroll-top").click(function () {
        $("html").animate(
          {
            scrollTop: 0,
          },
          50
        );
      });
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1,
            dots:false
        },
        767:{
            items:2
        },
        1200:{
            items:3
        }
    }
})
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
// let subMenus = document.querySelectorAll(".menu-list__items-icon");
// subMenus.forEach(subMenu => {
//     subMenu.addEventListener("click",(e) => {
//         e.stopPropagation();
//         subMenu.classList.toggle("updown");
//         subMenu.nextElementSibling.classList.toggle("activeSub");
//     })
// })

// const btnTab = document.querySelectorAll("[data-button-target]");
// const items = document.querySelectorAll("[data-content]");
// btnTab.forEach((btn) => {
//     btn.onclick = function() {
//         const btnTarget = this.getAttribute('data-button-target');
//         items.forEach((item) => {
//             const dataContents = item.getAttribute('data-content').split(" ");
//             item.classList.remove('isChecked'); // moi khi bam button thi se an het cac item truoc
//             dataContents.forEach((value) => {
//                 if (value === btnTarget){
//                     item.classList.add('isChecked');
//                     item.classList.add("zoom-out");
//                 }
//             });
//         });
//     }
// });