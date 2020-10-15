var element = document.querySelectorAll(".statistic-item-content-number");
var speed = 10;
$(window).scroll(function () {
    if ($(this).scrollTop() > 2850) {
        element.forEach((Item) => {
            var currentValue = 0;
            var ConterUp = function () {
                var number = parseFloat(Item.getAttribute('data-number'));
                var unit = Item.getAttribute('data-unit')
                var value = number / speed;
                currentValue += value;
                if (currentValue < number) {
                    Item.innerHTML = parseInt(currentValue) + unit;
                    setTimeout(ConterUp, 80);
                } else {
                    Item.innerHTML = number + unit;
                }
            }
            ConterUp();
        });
        $(this).unbind();
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.header-navbar-side-button').fadeIn();
        $('.header-navbar').addClass('header_navbar_fix');
        $('.header-nav-logo img').attr('src', 'http://demo.themelogi.com/navian/wp-content/themes/navian/assets/img/logo-dark.png');
    } else {
        $('.header-navbar').removeClass('header_navbar_fix');
        $('.header-nav-logo img').attr('src', 'http://demo.themelogi.com/navian/wp-content/themes/navian/assets/img/logo-light.png');
    }
})
$('.header-navbar-side-button').click(function () {
    $("html").animate({
        scrollTop: 0
    }, 500);
})

$('.owl-carousel0').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
$('.owl-carousel1').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

//Collapes cách 1
// var collapesDiv = document.querySelectorAll('.question-answer__detail__collapse__list'); 
//     function collapseItems(event,index){
//         for(let j = 0; j < collapesDiv.length ; j++){
//             collapesDiv[j].nextElementSibling.style.display = 'none';
//             collapesDiv[j].style.background = 'transparent';
//             collapesDiv[j].innerHTML = '+'
//         }
//         collapesDiv[index].style.background = 'red';
//         collapesDiv[index].nextElementSibling.style.display = 'block'
//         collapesDiv[index].innerHTML = '-'
//     }
//     for (let i = 0 ; i < collapesDiv.length ; i++){     
//         collapesDiv[i].addEventListener('click',(event)=>{
//             collapseItems(event,i);
//         })
// }
// var collapesDiv = document.querySelectorAll('.question-answer__detail__collapse__list');
// const collapesContent = collapesDiv.nextElementSibling;
/*collapesDiv.forEach(collapesDiv => {
    collapesDiv.addEventListener('click', () => {
        const collapesContent = collapesDiv.nextElementSibling;
        collapesDiv.classList.toggle('question-answer__detail__collapse__list__active');
        if (collapesDiv.classList.contains('question-answer__detail__collapse__list__active')) {
            collapesContent.style.maxHeight = collapesContent.scrollHeight + 'px';
        } else {
            collapesContent.style.maxHeight = 0;
        }
    });
});*/
var collapesDiv = document.querySelectorAll('.question-answer__detail__collapse__list');
for(let index = 0 ; index < collapesDiv.length ; index++){
    collapesDiv[index].addEventListener('click', () =>{
        let collapesContent = collapesDiv[index].nextElementSibling;
        collapesDiv[index].classList.toggle('question-answer__detail__collapse__list__active');
        if(collapesDiv[index].classList.contains('question-answer__detail__collapse__list__active')){
            collapesContent.style.maxHeight = collapesContent.scrollHeight + 'px'
        }else{
            collapesContent.style.maxHeight = 0;
        }
    })
}
