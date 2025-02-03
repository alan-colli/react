import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProtectedInfo, onLogout } from "../API/auth.js";
import Layout from "../components/Layout.jsx";
import { unauthenticateUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [protectedData, setProtectedData] = useState(null);

  const logout = async () => {
    try {
      await onLogout();
      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
      localStorage.removeItem("token"); // Remova o token também
      navigate("/login");
    } catch (error) {
      console.log("Erro no logout:", error);
    }
  };
  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo();
      setProtectedData(data.info);
      setLoading(false);
    } catch (error) {
      if (error.response?.status === 401) {
        // Token inválido ou expirado
        logout();
      } else {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Redirecione imediatamente se não houver token
    if (!token) {
      logout();
      return;
    }

    protectedInfo();
  }, []);

  return loading ? (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  ) : (
    <div className="flex flex-col min-h-screen w-full justify-center items-center">
      <Layout>
        <div className="flex text-white flex-col text-2xl justify-center items-center min-h-screen">
          <h1>Dashboard</h1>
          <h2>{protectedData}</h2>
          <button
            onClick={() => logout()}
            className=" bg-white text-black border-2 rounded-md hover:bg-gray-800"
          >
            Logout
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
