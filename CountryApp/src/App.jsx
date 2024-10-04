import { useState } from "react";
import Header from "./components/Header";
import ButtonsSpace from "./components/ButtonsSpace";
import axios from "axios";
import { useEffect } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const apiEndPoints = [
    "https://restcountries.com/v3.1/name/germany",
    "https://restcountries.com/v3.1/name/france",
    "https://restcountries.com/v3.1/name/netherlands",
    "https://restcountries.com/v3.1/name/russia",
    "https://restcountries.com/v3.1/name/japan",
    "https://restcountries.com/v3.1/name/united%20kingdom",
    "https://restcountries.com/v3.1/name/canada",
    "https://restcountries.com/v3.1/name/united%20states",
    "https://restcountries.com/v3.1/name/argentina",
    "https://restcountries.com/v3.1/name/brazil",
  ];

  return (
    <div className="bg-blue-900 h-[100vh] flex flex-col items-center pt-12 ">
      <Header></Header>
      <ButtonsSpace handleShowModal={handleShowModal}></ButtonsSpace>
      {showModal && (
        <Modal
          handleCloseModal={handleCloseModal}
          selectedCountry={selectedCountry}
        />
      )}
    </div>
  );
}
