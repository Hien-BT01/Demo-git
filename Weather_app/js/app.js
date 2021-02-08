let weather={apiKey:"c3514dd48346a8e2bedbfea0036d4f8a",fetchWeather:function(e){fetch("http://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid="+this.apiKey).then(e=>e.json()).then(e=>{this.displayWeather(e),console.log(e)})},displayWeather:function(e){console.log(e);var{name:t}=e,{icon:a,description:n}=e.weather[0],{temp:r,humidity:s}=e.main,{speed:e}=e.wind;const c=document.querySelector(".weather");c.innerHTML=`
            <div class="weather">
                <h2 class="weather__city">Weather in ${t}</h2>
                <p class="weather__temperature">${r}°C</p>
                <div class="weather__status">
                    <img src="http://openweathermap.org/img/wn/${a}.png" alt="weather__icon" class="weather__icon">
                    <span class="weather__infor">${n}</span>
                </div>
                <p class="moistness">humidity: ${s}6%</p>
                <p class="wind">wind: ${e}km/h</p>
            </div>
        `;const i=document.querySelector("body");i.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+t+"')"},search:function(){this.fetchWeather(document.querySelector(".search-bar").value)}};const buttonElement=document.querySelector("button"),inputElement=document.querySelector(".search-bar");buttonElement.addEventListener("click",e=>{weather.search()}),inputElement.addEventListener("keyup",function(e){"Enter"===e.key&&weather.search()});