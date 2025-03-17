import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen ">
      <nav className="bg-gray-800 text-white p-4 h-[7vh] flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-bold">
            SUBTRACK
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="/auth/login" className="text-white">
            Login
          </Link>
          <Link to="/auth/register" className="text-white">
            Register
          </Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white p-4 h-[2vh] flex justify-center items-center">
        <p>© 2025 Alan Colli</p>
      </footer>
    </div>
  );
}

export default App;
