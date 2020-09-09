var couterItem = document.querySelectorAll(".statistic");
var speed = 100;
function CounterUp(){
        if(document.documentElement.scrollTop>3900){
        couterItem.forEach(e=>{
            var currentValue=0;
            var value = parseInt(e.getAttribute("data-value"));
            var devisionNumber = value/speed;
            function counter(){
                if(currentValue<value){
                    currentValue+=devisionNumber;
                    setTimeout(counter,10);
                }
                else{
                    currentValue=value;
                }
                e.innerHTML=Math.floor(currentValue);
            }
            counter();
        })
        window.removeEventListener('scroll',CounterUp);
    }
}
window.addEventListener('scroll',CounterUp);
