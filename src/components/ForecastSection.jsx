import ForecastCard from "./ForecastCard";

export default function ForecastSection({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <section className="forecast-section">
      <h3>Today&apos;s Forecast</h3>

      <div className="forecast-list">
        {forecast.map((item, index) => (
          <ForecastCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
