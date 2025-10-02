const apiKey='64e298375fb683d145bbd6df614fe6dd';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    try{

        const reponse =await fetch(apiUrl+ `&q=${city}`+`&appid=${apiKey}`);
        var data=await reponse.json();

        if (data.cod==="404"){
            // alert("City not found");
            document.querySelector(".city").textContent="City not found";
            weatherIcon.src="images/totoro.png"
            
            return;
        }
    
console.log(data);

document.querySelector(".city").innerHTML=data.name;           
document.querySelector(".temp ").innerHTML=Math.round(data.main.temp)+ "°C";           
document.querySelector(".humidity").innerHTML=data.main.humidity+" %";           
document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png";
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png";
}
else if(data.weather[0].main=="Snow"){
    weatherIcon.src="images/snow.png";
}
else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
}
else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
}

}catch (error){
alert("Enter the place!");
console.error(error);
}}
    searchbtn.addEventListener("click", () => {
        checkWeather(searchbox.value);
    })

    searchbox.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            checkWeather(searchbox.value);
        }
    });
