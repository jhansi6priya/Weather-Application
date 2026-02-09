export default function ForecastCard({ item }) {
  return (
    <div className="forecast-card">
      <p className="forecast-time">{item.time}</p>
      <img src={item.icon} alt={item.condition} />
      <p className="forecast-temp">{item.temperature}°C</p>
      <p className="forecast-condition">{item.condition}</p>
    </div>
  );
}
