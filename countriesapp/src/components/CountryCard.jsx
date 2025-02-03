export default function CountryCard({ country }) {
  if (!country || !country.flag) {
    return (
      <p className="text-gray-200 mt-96 text-center  lg:text-8xl">
        No country selected. Please search for a country.
      </p>
    );
  }

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg w-[90vw] md:w-[70vw] lg:w-[60vw] mt-8 flex flex-col md:flex-row overflow-hidden ">
      <div className="w-full md:w-1/2">
        <img
          src={country.flags.png}
          alt={`${country.name?.common} flag`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center lg:space-y-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 lg:text-3xl">
          {country.name?.common}
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-2 lg:text-3xl">
          <span className="font-bold lg:text-3xl">Capital:</span>{" "}
          {country.capital?.[0]}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2 lg:text-3xl">
          <span className="font-bold lg:text-3xl">Continent:</span>{" "}
          {country.continents?.[0]}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2 lg:text-3xl">
          <span className="font-bold lg:text-3xl">Population:</span>{" "}
          {country.population.toLocaleString("pt-BR")}
        </p>
        <p className="text-lg font-medium text-gray-700 lg:text-3xl">
          <span className="font-bold">Language:</span>{" "}
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "Unknown"}
        </p>
      </div>
    </div>
  );
}
