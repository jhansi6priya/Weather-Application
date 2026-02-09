import weatherIconMap from "../utils/weatherIcons";

export default function CurrentWeather({ data }) {
  if (!data) return null;

  const icon =
    weatherIconMap[data.condition] || weatherIconMap["Clear"];

  return (
    <section className="current-weather card">
      <div className="cw-main">
        <div>
          <h2 className="city">{data.city}</h2>
          <p className="date">{data.date}</p>

          <h1 className="temp">{data.temperature}°C</h1>
          <p className="condition">{data.condition}</p>
        </div>

        <img src={icon} alt={data.condition} />
      </div>

      <div className="cw-extra">
        <p>🌅 Sunrise: {data.sunrise}</p>
        <p>🌇 Sunset: {data.sunset}</p>
      </div>
    </section>
  );
}
