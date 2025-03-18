import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import {
  setStreams,
  addStream,
  removeStream,
  setError,
} from "../store/streamSlice";
import { streamService } from "../services/streamService";

export default function Dashboard() {
  const { isDarkMode } = useTheme();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { streams, loading, error } = useSelector((state) => state.streams);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStream, setNewStream] = useState({
    service_name: "",
    plan_price: "",
    start_date: "",
  });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    loadStreams();
  }, []);

  const loadStreams = async () => {
    try {
      dispatch(setError(null));
      const data = await streamService.getStreams();
      dispatch(setStreams(data));
    } catch (err) {
      console.error("Error loading streams:", err);
      dispatch(
        setError(err.response?.data?.message || "Erro ao carregar streams")
      );
    }
  };

  const handleAddStream = async (e) => {
    e.preventDefault();
    setFormError("");

    try {
      // Validação básica
      if (
        !newStream.service_name ||
        !newStream.plan_price ||
        !newStream.start_date
      ) {
        setFormError("Por favor, preencha todos os campos");
        return;
      }

      if (parseFloat(newStream.plan_price) <= 0) {
        setFormError("O preço deve ser maior que zero");
        return;
      }

      const data = await streamService.addStream(newStream);
      dispatch(addStream(data));
      setNewStream({ service_name: "", plan_price: "", start_date: "" });
      setShowAddForm(false);
    } catch (err) {
      console.error("Error adding stream:", err);
      setFormError(err.response?.data?.message || "Erro ao adicionar stream");
    }
  };

  const handleDeleteStream = async (streamId) => {
    try {
      await streamService.deleteStream(streamId);
      dispatch(removeStream(streamId));
    } catch (err) {
      console.error("Error deleting stream:", err);
      dispatch(
        setError(err.response?.data?.message || "Erro ao remover stream")
      );
    }
  };

  const calculateTotalSpending = () => {
    return streams.reduce(
      (total, stream) => total + parseFloat(stream.plan_price),
      0
    );
  };

  const calculateStreamPercentage = (price) => {
    const total = calculateTotalSpending();
    return total > 0 ? ((parseFloat(price) / total) * 100).toFixed(1) : 0;
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1
            className={`text-3xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Dashboard
          </h1>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className={`px-4 py-2 rounded-lg font-medium ${
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {showAddForm ? "Cancelar" : "Adicionar Stream"}
          </button>
        </div>

        {/* Formulário de Adição */}
        {showAddForm && (
          <div
            className={`mb-8 p-6 rounded-lg shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-xl font-semibold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Adicionar Novo Stream
            </h2>
            {formError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {formError}
              </div>
            )}
            <form onSubmit={handleAddStream} className="space-y-4">
              <div>
                <label
                  className={`block mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Nome do Serviço
                </label>
                <input
                  type="text"
                  value={newStream.service_name}
                  onChange={(e) =>
                    setNewStream({ ...newStream, service_name: e.target.value })
                  }
                  className={`w-full p-2 rounded border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  required
                />
              </div>
              <div>
                <label
                  className={`block mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Preço do Plano
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={newStream.plan_price}
                  onChange={(e) =>
                    setNewStream({ ...newStream, plan_price: e.target.value })
                  }
                  className={`w-full p-2 rounded border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  required
                />
              </div>
              <div>
                <label
                  className={`block mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Data de Início
                </label>
                <input
                  type="date"
                  value={newStream.start_date}
                  onChange={(e) =>
                    setNewStream({ ...newStream, start_date: e.target.value })
                  }
                  className={`w-full p-2 rounded border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg font-medium ${
                  isDarkMode
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                Adicionar
              </button>
            </form>
          </div>
        )}

        {/* Resumo */}
        <div
          className={`mb-8 p-6 rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-xl font-semibold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Resumo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className={`p-4 rounded-lg ${
                isDarkMode ? "bg-gray-700" : "bg-gray-50"
              }`}
            >
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Total de Streams
              </p>
              <p
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {streams.length}
              </p>
            </div>
            <div
              className={`p-4 rounded-lg ${
                isDarkMode ? "bg-gray-700" : "bg-gray-50"
              }`}
            >
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Gasto Total
              </p>
              <p
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                R$ {calculateTotalSpending().toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Lista de Streams */}
        <div
          className={`p-6 rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-xl font-semibold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Streams Ativos
          </h2>
          {loading ? (
            <p className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Carregando...
            </p>
          ) : error ? (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          ) : (
            <div className="space-y-4">
              {streams.map((stream) => (
                <div
                  key={stream.id}
                  className={`p-4 rounded-lg ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        className={`text-lg font-medium ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {stream.service_name}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Início:{" "}
                        {new Date(stream.start_date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-lg font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        R$ {parseFloat(stream.plan_price).toFixed(2)}
                      </p>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {calculateStreamPercentage(stream.plan_price)}% do total
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteStream(stream.id)}
                    className={`mt-2 px-3 py-1 rounded text-sm ${
                      isDarkMode
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-red-500 hover:bg-red-600 text-white"
                    }`}
                  >
                    Remover
                  </button>
                </div>
              ))}
              {streams.length === 0 && (
                <p
                  className={`text-center ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Nenhum stream ativo. Adicione um novo stream para começar!
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
