import { useState } from "react";
import useWeather from "../hooks/useWeather";
import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import ForecastSection from "../components/ForecastSection";
import WeatherHighlights from "../components/WeatherHighlights";

export default function Dashboard() {
  const [city, setCity] = useState("Bengaluru");
  const {
    current,
    forecast,
    loading,
    error,
    fetchByLocation,
  } = useWeather(city);

  return (
    <div className="dashboard">
      <div className="left-panel">
        <SearchBar onSearch={setCity} onLocate={fetchByLocation} />

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {current && <CurrentWeather data={current} />}
        {forecast && <ForecastSection forecast={forecast} />}
      </div>

      <div className="right-panel">
        {current && <WeatherHighlights data={current} />}
      </div>
    </div>
  );
}
