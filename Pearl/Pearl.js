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
dropdownIcon.addEventListener("click",(e) => {
    dropdownIcon.classList.toggle("rotate");
    dropDownMenu.classList.toggle("active");
})

$(window).scroll(function(){
    if($(window).scrollTop() >= 50){
        $(".header-nav").css("transition","0.3s","ease-in-out");
        $(".header-nav").addClass("fix-navbar");
    }else{
        $(".header-nav").removeClass("fix-navbar")
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
$(document).ready(function(){
    if($(window).width() < 975){
        $(".logo img").attr("src","https://pearl.stylemixthemes.com/landing/assets/images/header/logo-white.png");
    }else{
        $(".logo img").attr("src","https://pearl.stylemixthemes.com/landing/assets/images/header/logo.png");
    }
    $(window).resize(function(){
        if($(this).width() < 975){
            $(".logo img").attr("src","https://pearl.stylemixthemes.com/landing/assets/images/header/logo-white.png");
        }else{
            $(".logo img").attr("src","https://pearl.stylemixthemes.com/landing/assets/images/header/logo.png");
        }
    })
});
$(".menu-list__items-icon").click(function(e){
    e.stopPropagation();
    $(this).toggleClass("updown");
    $(this).next().toggleClass("activeSub");
});
VanillaTilt.init(document.querySelectorAll(".image-box"), {
    max: 30,
    speed: 3000
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