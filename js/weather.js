const API_KEY = "7b6135d329a93726f10371b8aed75378";
function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response=>response.json())
                .then((data) =>{
                    const icon = document.querySelector("#weather span:first-child img");
                    const city = document.querySelector("#weather span:last-child");
                    
                    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                    city.innerText= data.name;                   
                });
            }
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);