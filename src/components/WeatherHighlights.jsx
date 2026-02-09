import HighlightCard from "./HighlightCard";

export default function WeatherHighlights({ data }) {
  if (!data) return null;

  return (
    <section className="highlights">
      <h3>Today&apos;s Highlights</h3>

      <div className="highlights-grid">
        <HighlightCard
          label="Humidity"
          value={data.humidity}
          unit="%"
          icon="💧"
        />

        <HighlightCard
          label="Wind Speed"
          value={data.windSpeed}
          unit=" km/h"
          icon="💨"
        />
      </div>
    </section>
  );
}
