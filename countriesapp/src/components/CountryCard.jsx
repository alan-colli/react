export default function CountryCard({ country }) {
  if (!country || !country.flags) {
    return (
      <p className="text-gray-200 mt-8 text-center">
        No country selected. Please search for a country.
      </p>
    );
  }

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg w-[90vw] md:w-[70vw] lg:w-[60vw] mt-8 flex flex-col md:flex-row overflow-hidden">
      {/* Flag image */}
      <div className="w-full md:w-1/2">
        <img
          src={country.flags.png}
          alt={`${country.name?.common} flag`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Country infos */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {country.name?.common}
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="font-bold">Capital:</span> {country.capital?.[0]}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="font-bold">Continent:</span>{" "}
          {country.continents?.[0]}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="font-bold">Population:</span>{" "}
          {country.population.toLocaleString("pt-BR")}
        </p>
        <p className="text-lg font-medium text-gray-700">
          <span className="font-bold">Language:</span>{" "}
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "Unknown"}
        </p>
      </div>
    </div>
  );
}
