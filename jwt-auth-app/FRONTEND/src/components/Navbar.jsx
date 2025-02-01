import { NavLink } from "react-router-dom";

function Navbar() {
  const isAuth = false;
  return (
    <nav className="flex w-[100vw] h-[7vh] bg-blue-300 justify-between items-center ">
      <div className="text-2xl m-2">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
      </div>

      {isAuth ? (
        <div>
          <NavLink to="/dashboard">
            <span>Dashboard</span>
          </NavLink>
        </div>
      ) : (
        <div className="text-xl space-x-4">
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>
          <NavLink to="/register">
            <span>Register</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
