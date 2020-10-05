var element = document.querySelectorAll(".statistic-item-content-number");
var speed = 10;
$(window).scroll(function(){
   if($(this).scrollTop()>2850){
    element.forEach((Item)=>{
        var currentValue = 0;
       var ConterUp = function(){
          var number =parseFloat(Item.getAttribute('data-number'));
          var unit = Item.getAttribute('data-unit')
          var value = number/speed;
          currentValue+=value;
          if (currentValue<number){
              Item.innerHTML=parseInt(currentValue)+unit;
              setTimeout(ConterUp,80);
          }
          else{
              Item.innerHTML=number+unit;
          }
      }
      ConterUp();
    });
    $(this).unbind();
   }
})

$(window).scroll(function(){
    if($(this).scrollTop()>50){
        $('.header-navbar-side-button').fadeIn();
        $('.header-navbar').addClass('header_navbar_fix');
        $('.header-nav-logo img').attr('src','http://demo.themelogi.com/navian/wp-content/themes/navian/assets/img/logo-dark.png');
    }else{
        $('.header-navbar').removeClass('header_navbar_fix');
        $('.header-nav-logo img').attr('src','http://demo.themelogi.com/navian/wp-content/themes/navian/assets/img/logo-light.png');
    }
})
$('.header-navbar-side-button').click(function(){
    $("html").animate({ scrollTop: 0 }, 500);
})

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:2000,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4,
        }
    }
});
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

// using the event helper
