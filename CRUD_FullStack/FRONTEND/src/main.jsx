import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App"; // ou o caminho do seu componente principal
import "./styles/index.css"; // apenas se você estiver usando Tailwind CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
