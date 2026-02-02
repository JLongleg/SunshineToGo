const weather = require("../data/weather.json");

function cityShuffler() {
    var curWeather = [...weather];
    var randNumber;
    var shuffledCities = new Array(weather.length);
    var maxLength = weather.length;
    for (var i = 0; i<weather.length; i++) {
        randNumber = Math.floor(Math.random() * maxLength);
        maxLength = maxLength - 1;
        shuffledCities[i]= curWeather[randNumber];
        curWeather.splice(randNumber, 1);
    }
    return shuffledCities;
}

module.exports = {cityShuffler};