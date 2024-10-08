export default function Modal({ handleCloseModal, selectedCountry }) {
  return (
    <div className="justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh]">
      <div className="flex flex-col justify-center items-center bg-white h-[80vh] w-[80vw] rounded-md p-4">
        {selectedCountry ? (
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">
              {selectedCountry.name.common}
            </h1>
            <img src={selectedCountry.flags.svg} className="w-32 h-20 mb-4" />
            <p>
              <strong>Capital:</strong> {selectedCountry.capital}
            </p>
            <p>
              <strong>Population:</strong>{" "}
              {selectedCountry.population.toLocaleString()}
            </p>
            <p>
              <strong>Region:</strong> {selectedCountry.region}
            </p>
            <p>
              <strong>Subregion:</strong> {selectedCountry.subregion}
            </p>
            <p>
              <strong>Area:</strong> {selectedCountry.area.toLocaleString()} km²
            </p>
            <p>
              <strong>Currency:</strong>{" "}
              {Object.values(selectedCountry.currencies)[0].name}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {Object.values(selectedCountry.languages).join(", ")}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <button
          className="bg-red-600 text-white border-2 w-[5vw] border-black hover:bg-red-900 mt-4"
          onClick={handleCloseModal}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
