import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [weather, setWeather] = useState(null); // Initialize as null or an empty object

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Sao%20Paulo,br&appid=bedb63c1bacba4e45ed48402ddbfba15&units=metric"
      )
      .then((response) => {
        setWeather(response.data); // Save the entire response object
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados do clima:", error);
      });
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {weather ? (
        <div>
          <h1>{weather.city.name}</h1>
          <p>Temperature: {weather.list[0].main.temp}°C</p>
          <p>Description: {weather.list[0].weather[0].description}</p>
          <p>Minimun temperature: {weather.list[0].main.temp_min}</p>
          <p>Maximum temperature: {weather.list[0].main.temp_max}</p>
          <p>Humidity: {weather.list[0].main.humidity}</p>
        </div>
      ) : (
        <p>Charging...</p>
      )}
    </div>
  );
}
