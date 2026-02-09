import { useEffect, useState, useCallback } from "react";
import {
  getCurrentWeather,
  getForecast,
  getCurrentWeatherByCoords,
  getForecastByCoords,
} from "../services/weatherApi";

import {
  formatCurrentWeather,
  formatForecastWeather,
} from "../utils/weatherFormatter";

export default function useWeather(city) {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /* =====================
     FETCH BY CITY
  ===================== */
  useEffect(() => {
    if (!city) return;

    async function fetchByCity() {
      try {
        setLoading(true);
        setError(null);

        const currentData = await getCurrentWeather(city);
        const forecastData = await getForecast(city);

        setCurrent(formatCurrentWeather(currentData));
        setForecast(formatForecastWeather(forecastData));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchByCity();
  }, [city]);

  /* =====================
     FETCH BY LOCATION (EXPOSED)
  ===================== */
  const fetchByLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLoading(true);
          setError(null);

          const { latitude, longitude } = position.coords;

          const currentData = await getCurrentWeatherByCoords(
            latitude,
            longitude
          );
          const forecastData = await getForecastByCoords(
            latitude,
            longitude
          );

          setCurrent(formatCurrentWeather(currentData));
          setForecast(formatForecastWeather(forecastData));
        } catch (err) {
          setError("Unable to fetch location weather");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied");
      }
    );
  }, []);

  /* =====================
     AUTO FETCH LOCATION ON FIRST LOAD (OPTIONAL)
  ===================== */
  useEffect(() => {
    fetchByLocation();
  }, [fetchByLocation]);

  return {
    current,
    forecast,
    loading,
    error,
    fetchByLocation, // 👈 IMPORTANT
  };
}
