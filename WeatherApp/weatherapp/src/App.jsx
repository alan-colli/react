import axios from "axios";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [cityInfos, setCityInfos] = useState({});

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const res = await axios.get(url);
      const data = await res.data;
      setCityInfos(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = () => {
    search(cityInput);
    setCityInput("");
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-black flex justify-center flex-col items-center space-y-8">
      <div className="flex items-center space-x-4 bg-white rounded-md">
        <input
          value={cityInput}
          type="text"
          placeholder="Type a city"
          className="pl-2 rounded-md md:w-96 bg-white xl:w-[30vw]"
          onChange={(e) => setCityInput(e.target.value)}
        />

        <button
          type="submit"
          className="bg-white rounded-md h-6 w-6"
          onClick={handleSearch}
        >
          <img src="public\magnifying-glass (1).png" />
        </button>
      </div>
      {!cityInfos || !cityInfos.main || !cityInfos.weather ? (
        <div className="flex justify-center items-center w-[60vw] h-[50vh] bg-gray-200 rounded-md flex-col xl:text-8xl">
          Waiting to a city!
        </div>
      ) : (
        <Card cityInfos={cityInfos} />
      )}
    </div>
  );
}

export default App;
