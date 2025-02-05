import Navbar from "./Navbar.jsx";
import "./components.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
