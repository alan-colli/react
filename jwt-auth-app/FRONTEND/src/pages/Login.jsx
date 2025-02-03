import { useState } from "react";
import Layout from "../components/Layout";
import { onLogin } from "../API/auth";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await onLogin(values);

      // Armazena o token e atualiza o estado
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isAuth", "true");
      dispatch(authenticateUser());

      // Redireciona após login bem-sucedido
      navigate("/dashboard");
    } catch (error) {
      console.log(
        error.response?.data?.errors?.[0]?.msg || "Erro desconhecido"
      );
      setError(
        error.response?.data?.errors?.[0]?.msg || "Credenciais inválidas"
      );
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex justify-center items-center">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="bg-gray-200 flex h-[40vh] justify-start space-y-12 items-center flex-col w-[90vw] rounded-md"
        >
          <h2 className="mt-6">Login</h2>
          <div className="space-x-2">
            <label>Email:</label>
            <input
              type="email"
              className="border-2"
              onChange={(e) => onChange(e)}
              name="email"
              id="email"
              value={values.email}
              placeholder="test@email.com"
              required
            />
          </div>
          <div className="space-x-2">
            <label>Password:</label>
            <input
              type="password"
              className="border-2"
              onChange={(e) => onChange(e)}
              id="password"
              name="password"
              value={values.password}
              placeholder="password"
              required
            />
          </div>
          <button
            className="bg-black text-gray-200 rounded-md border-gray-200 border-2 w-24 "
            type="submit"
          >
            Submit
          </button>

          {error && <div className="text-red-600 font-bold">{error}</div>}
        </form>
      </div>
    </Layout>
  );
}

export default Login;
