var span = document.getElementById("current-temp");
let weatherRequest = new XMLHttpRequest();
var apiURLstring = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c1457f18c70d984cbefc0e7449d3ad9c';
weatherRequest.open('GET', apiURLstring);
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    span.textContent = weatherData.main.temp;
    console.log(weatherData);
}
weatherRequest.send();
