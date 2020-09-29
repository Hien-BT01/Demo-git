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

