import { formatTime, formatDate } from "./dateFormatter";


export function formatCurrentWeather(data) {
  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
    condition: data.weather[0].main,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    sunrise: formatTime(data.sys.sunrise),
    sunset: formatTime(data.sys.sunset),
    date: formatDate(data.dt),
  };
}





export function formatForecastWeather(data) {
  return data.list.slice(0, 5).map(item => ({
    time: formatTime(item.dt),
    temperature: Math.round(item.main.temp),
    icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
    condition: item.weather[0].main,
  }));
}
