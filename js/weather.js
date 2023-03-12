function onGeo(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "bbf17dc52e316d9579511481f8cd9269";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const cityAndTemp = document.querySelector("#weather span:first-child");
            cityAndTemp.innerText = `${data.name} / ${data.main.temp}°C`;
        }); //request

}

function onGeoError() {
    alert("navigator error");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);