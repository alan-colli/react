export default function CountryCard({ country }) {
  return (
    <div className="bg-gray-200 rounded-md w-[60vw] h-[60vh] mt-8 flex-col flex justify-start items-center">
      <img
        src={country[0].flags.png}
        alt="Country flag"
        className="rounded-t-md"
      />
      <p>Capital: {country[0].capital}</p>
      <p>Continent: {country[0].continents}</p>
      <p>Population: {country[0].population}</p>
      <p>Language: {country[0].languages}</p>
    </div>
  );
}
