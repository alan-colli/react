import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./components.css";

export default function Navbar() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <nav className="navbar">
      <div>
        <NavLink to={"/"} className="link">
          <span>Home</span>
        </NavLink>
      </div>
      {isAuth ? (
        <div>
          <NavLink to="/dashboard" className="link">
            <span>Dashboard</span>
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to={"/login"} className="navlogin">
            <span>Login</span>
          </NavLink>
          <NavLink to={"/register"} className="link">
            <span>Register</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}
