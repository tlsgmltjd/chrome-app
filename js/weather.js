const API_KEY = "a9daa77e90315fdedae042632d323f2f";

const title = document.querySelector("#geo-title");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      console.log(data);
      title.innerText = `${data.name} ${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
