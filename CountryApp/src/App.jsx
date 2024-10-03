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

  axios
    .get("https://restcountries.com/v3.1/name/brazil")
    .then((res) => {
      const countryDataBrazil = res.data[0];
      setSelectedCountry(countryDataBrazil);
    })
    .catch((err) => console.log(err));

  axios
    .get("https://restcountries.com/v3.1/name/argentina")
    .then((res) => {
      const countryDataArg = res.data[0];
      setSelectedCountry(countryDataArg);
    })
    .catch((err) => console.log(err));

  axios
    .get("https://restcountries.com/v3.1/name/united%20states")
    .then((res) => {
      const countryDataUSA = res.data[0];
      setSelectedCountry(countryDataUSA);
    })
    .catch((err) => console.log(err));

  axios
    .get("https://restcountries.com/v3.1/name/canada")
    .then((res) => {
      const countryDataCanada = res.data[0];
      setSelectedCountry(countryDataCanada);
    })
    .catch((err) => console.log(err));

  axios
    .get("https://restcountries.com/v3.1/name/united%20kingdom")
    .then((res) => {
      const countryDataUK = res.data[0];
      setSelectedCountry(countryDataUK);
    })
    .catch((err) => console.log(err));

  axios
    .get("https://restcountries.com/v3.1/name/japan")
    .then((res) => {
      const countryDataJapan = res.data[0];
      setSelectedCountry(countryDataJapan);
    })
    .catch((err) => console.log(err));

  axios
    .get("https://restcountries.com/v3.1/name/russia")
    .then((res) => {
      const countryDataRussia = res.data[0];
      setSelectedCountry(countryDataRussia);
    })
    .catch((err) => console.log(err));

  axios
    .get("https://restcountries.com/v3.1/name/netherlands")
    .then((res) => {
      const countryDataNetherlands = res.data[0];
      setSelectedCountry(countryDataNetherlands);
    })
    .catch((err) => console.log(err));

  axios
    .get("https://restcountries.com/v3.1/name/france")
    .then((res) => {
      const countryDataFrance = res.data[0];
      setSelectedCountry(countryDataFrance);
    })
    .catch((err) => console.log(err));

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/germany")
      .then((res) => {
        const countryDataGermany = res.data[0];
        setSelectedCountry(countryDataGermany);
      })
      .catch((err) => console.log(err));
  }, [selectedCountry]);

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
