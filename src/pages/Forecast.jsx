import ForecastSection from "../components/ForecastSection";
import useWeather from "../hooks/useWeather";
import { useState } from "react";

export default function Forecast() {
  const [city] = useState("Bengaluru");
  const { forecast } = useWeather(city);

  return (
    <div style={{ padding: "2rem" }}>
      {forecast && <ForecastSection forecast={forecast} />}
    </div>
  );
}
