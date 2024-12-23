import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import { useState } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState({});

  const search = async (countryName) => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      setCountry(data[0]); // Define apenas o primeiro país retornado
    } catch (error) {
      console.error("Error to find data", error);
    }
  };

  const handleNameCountry = () => {};

  return (
    <div className="w-[100vw] h-[100vh] bg-blue-950 flex flex-col items-center">
      <Header />
      <p className="text-gray-200 mt-6">Type a country: </p>
      <form
        className="flex space-x-14 text-gray-100 bg-gray-200 rounded-md mt-6"
        onSubmit={(event) => {
          event.preventDefault();
          const countryName = event.target[0].value; // Captura o valor do input
          search(countryName);
        }}
      >
        <input type="text" className="rounded-md bg-gray-200 text-black pl-4" />
        <button onClick={handleNameCountry}>
          <img
            src="/glass.png"
            alt="search photo"
            className="w-4 bg-gray-200 rounded-sm"
          />
        </button>
      </form>
      <CountryCard country={country} />
    </div>
  );
}

export default App;
