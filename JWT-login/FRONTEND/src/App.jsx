import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Outlet,
  Routes,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Register from "./pages/register/Register.jsx";
import Dash from "./pages/dashboard/Dash.jsx";
import Home from "./pages/homepage/Home.jsx";
import Login from "./pages/login/Login.jsx";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const RestrictedRoute = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RestrictedRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/dash" element={<Dash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
