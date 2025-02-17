import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import { useState } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState({});

  const search = async (countryName) => {
    if (!countryName.trim()) {
      setCountry({});
      return;
    }

    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      setCountry(data[0]);
    } catch (error) {
      console.error("Error to find data", error);
      setCountry({});
    }
  };

  return (
    <div className="w-screen h-[100vh] bg-blue-950 flex flex-col items-center">
      <Header />
      <p className="text-gray-200 mt-6 lg:text-6xl">Type a country: </p>
      <form
        className="flex space-x-14 text-gray-100 bg-gray-200 rounded-md mt-6"
        onSubmit={(event) => {
          event.preventDefault();
          const countryName = event.target[0].value;
          search(countryName); // Chama a busca diretamente
        }}
      >
        <input
          type="text"
          className="rounded-md bg-gray-200 text-black pl-2 h-8 lg:w-[30vw] lg:h-12 lg:text-3xl outline-none"
        />
        <button type="submit">
          <img
            src="/glass.png"
            alt="search photo"
            className="w-6 lg:w-12 bg-gray-200 rounded-sm p-1 lg:p-2"
          />
        </button>
      </form>

      <CountryCard country={country} />
    </div>
  );
}

export default App;
