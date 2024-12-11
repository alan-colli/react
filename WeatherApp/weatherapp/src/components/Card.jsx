export default function Card({ cityInfos }) {
  if (!cityInfos || !cityInfos.main || !cityInfos.sys || !cityInfos.weather) {
    //check if exist some search
    return <p>Loading...</p>;
  }

  const sunInfo = (sunHour) => {
    //Adjust the time to sunset and sunrise
    const date = new Date(sunHour * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };
  const weatherCondition = cityInfos.weather[0].main;
  const backgroundByWeather = (condition) => {
    switch (
      condition //change background color depending on the weather
    ) {
      case "Clear":
        return "bg-blue-200";
      case "Clouds":
        return "bg-gray-300";
      case "Rain":
        return "Bg-blue-600 text-white";
      case "Drizzle":
        return "bg-blue-500";
      case "Thunderstorm":
        return "bg-purple-800 text-white";
      case "Snow":
        return "bg-white";
      case "Mist":
        return "bg-gray-300";
      case "Fog":
        return "bg-gray-300";
      case "Haze":
        return "bg-gray-300";
      case "Dust":
        return "bg-yellow-500";
      case "Sand":
        return "bg-yellow-500";
      case "Ash":
        return "bg-yellow-500";
      case "Squall":
        return "bg-gray-600";
      case "Tornado":
        return "bg-red-900";
    }
  };

  console.log(cityInfos);
  //Change the temperature to Celsius (from K)
  const tempInCelsius = cityInfos.main.temp - 273.15;
  const tempMaxInCelsius = cityInfos.main.temp_max - 273.15;
  const tempMinInCelsius = cityInfos.main.temp_min - 273.15;
  const tempFeelsInCelsius = cityInfos.main.feels_like - 273.15;

  //Adjusting the wind speed to Km/H
  const adjustingWindSpeed = cityInfos.wind.speed * 3.6;

  return (
    <div
      className={`flex justify-center items-center w-[60vw] h-[50vh]  rounded-md  ${backgroundByWeather(
        weatherCondition
      )}`}
    >
      <div className=" flex justify-center items-center flex-col space-y-8">
        <p className="text-2xl flex justify-center font-bold ">
          {cityInfos.name}, {cityInfos.sys.country}
        </p>
        <p className="text-md font-bold text-xl">
          {tempInCelsius.toFixed(1)}°C
        </p>
        <div className="xl:grid xl:grid-cols-2 flex-col justify-center items-center xl:space-x-16">
          <div className="flex space-x-4 text-xl flex-col items-center justify-center space-y-8">
            <p>Feels like: {tempFeelsInCelsius.toFixed(1)}°C</p>
            <p>Min: {tempMinInCelsius.toFixed(1)}°C</p>
            <p>Max: {tempMaxInCelsius.toFixed(1)}°C</p>
            <p>Weather: {weatherCondition}</p>
          </div>
          <div className="hidden xl:block text-xl space-y-4">
            <p>
              Lon : {cityInfos.coord.lon} Lat: {cityInfos.coord.lat}
            </p>
            <p>Humidity: {cityInfos.main.humidity}%</p>
            <p>Sunrise: {sunInfo(cityInfos.sys.sunrise)}</p>
            <p>Sunset: {sunInfo(cityInfos.sys.sunset)}</p>
            <p>Wind Speed: {adjustingWindSpeed.toFixed(1)} Km/H</p>
          </div>
        </div>
      </div>
    </div>
  );
}
