import { useState, useEffect } from "react";
import Header from "./components/Header";
import ButtonsSpace from "./components/ButtonsSpace";
import axios from "axios";
import Modal from "./components/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryName, setCountryName] = useState("");

  const handleShowModal = (country) => {
    setCountryName(country);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCountry(null);
  };

  useEffect(() => {
    if (showModal && countryName) {
      axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((res) => {
          const countryData = res.data[0];
          setSelectedCountry(countryData);
        })
        .catch((err) => console.log(err));
    }
  }, [showModal, countryName]);

  return (
    <div className="bg-blue-900 h-[100vh] flex flex-col items-center pt-12">
      <Header />
      <ButtonsSpace handleShowModal={handleShowModal} />
      {showModal && (
        <Modal
          handleCloseModal={handleCloseModal}
          selectedCountry={selectedCountry}
        />
      )}
    </div>
  );
}
