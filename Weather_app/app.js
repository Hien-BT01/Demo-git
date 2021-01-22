let weather = {
    "apiKey":"c3514dd48346a8e2bedbfea0036d4f8a",
    fetchWeather:function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        + this.apiKey)
        .then(response => response.json()).then(data => {
            this.displayWeather(data)
            console.log(data)
        });
    },
    displayWeather:function(data){
        console.log(data)
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        const weatherCard = document.querySelector(".weather");
        weatherCard.innerHTML = `
            <div class="weather">
                <h2 class="weather__city">Weather in ${name}</h2>
                <p class="weather__temperature">${temp}°C</p>
                <div class="weather__status">
                    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather__icon" class="weather__icon">
                    <span class="weather__infor">${description}</span>
                </div>
                <p class="moistness">humidity: ${humidity}6%</p>
                <p class="wind">wind: ${speed}km/h</p>
            </div>
        `
        const bodyElement = document.querySelector("body");
        bodyElement.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

const buttonElement = document.querySelector("button");
const inputElement = document.querySelector(".search-bar");
buttonElement.addEventListener("click", (e) => {
    weather.search();
})

inputElement.addEventListener("keyup",function(e){
    if(e.key === "Enter"){
        weather.search();
    }
})