import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Componente para proteger rotas que requerem autenticação
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth/login" />;
}

function AppContent() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <nav
        className={`${isDarkMode ? "bg-gray-800" : "bg-white"} text-${
          isDarkMode ? "white" : "gray-800"
        } p-4 h-[7vh] flex justify-between items-center shadow-md`}
      >
        <div>
          <Link to="/" className="text-xl font-bold">
            SUBTRACK
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? "LIGHT" : "DARK"}
          </button>
          {user ? (
            <>
              <Link
                to="/dashboard"
                className={`${isDarkMode ? "text-white" : "text-gray-800"}`}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className={`px-4 py-2 rounded-lg font-medium ${
                  isDarkMode
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-red-500 hover:bg-red-600 text-white"
                }`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className={`${isDarkMode ? "text-white" : "text-gray-800"}`}
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className={`${isDarkMode ? "text-white" : "text-gray-800"}`}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>

      <footer
        className={`${isDarkMode ? "bg-gray-800" : "bg-white"} text-${
          isDarkMode ? "white" : "gray-800"
        } p-4 h-[2vh] flex justify-center items-center shadow-md`}
      >
        <p>© 2025 Alan Colli</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
