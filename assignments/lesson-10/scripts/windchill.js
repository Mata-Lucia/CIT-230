function windchill() {

let temp = parseInt(document.getElementById("high").innerHTML);
let speed = parseInt(document.getElementById("wind").innerHTML);

result = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16)
         + 0.4275 * temp * Math.pow(speed, 0.16);

document.getElementById('output').innerHTML = result.toFixed(1);

}
