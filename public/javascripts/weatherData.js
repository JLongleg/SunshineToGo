async function getWeatherData(latitude, longitude) {

  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?" +
    "latitude=" + latitude +
    "&longitude=" + longitude +
    "&daily=temperature_2m_max" +
    "&forecast_days=1"
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const data = await response.json();
  //console.log(data.daily.temperature_2m_max);
  return data;
}
import cities from "../data/cities.json" with { type: "json" };
import * as fs from "node:fs";

var curWeatherData = "[\n";
for (const city of cities) {
  const weatherData = await getWeatherData(city.latitude, city.longitude);
  curWeatherData += "{\"city\":\"" + city.city + "\",\"country\":\"" + city.country + "\",\"maxTemperature\":" + Math.floor(weatherData.daily.temperature_2m_max) + "},\n";
};
curWeatherData = curWeatherData.slice(0,-2);
curWeatherData += "\n]";
console.log(curWeatherData);
fs.writeFile("../data/weather.json", curWeatherData, "utf8", (err) => {
  if (err) throw err;
});
