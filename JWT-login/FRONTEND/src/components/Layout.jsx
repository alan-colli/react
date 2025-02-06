import Navbar from "./Navbar.jsx";
import "./components.css";

export default function Layout({ children }) {
  return (
    <div className="mainDiv">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
