const API_KEY = "7f0fe16511829df85fabab69da72bd40";
function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in ", lat, lon);
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      const weather = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      console.log(data.name, data.weather[0].main);
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
