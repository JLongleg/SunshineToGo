import weather from "../data/weather.json" with { type: "json"};

var curWeather = weather;
var randNumber;
var pickedCities = new Array(3);
var maxLength = weather.length;
for (var i = 0; i<3; i++) {
    randNumber = Math.floor(Math.random() * maxLength);
    maxLength = maxLength - 1;
    pickedCities[i]= curWeather[randNumber];
    curWeather.splice(randNumber, 1);
}
console.log(pickedCities);