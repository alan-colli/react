import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../translations";

export default function Home() {
  const { isDarkMode, language } = useTheme();
  const t = translations[language];

  return (
    <div
      className={`flex flex-col min-h-[93vh] ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 to-blue-950"
            : "bg-gradient-to-r from-blue-600 to-blue-800"
        } text-white py-12 sm:py-16 md:py-20 px-4`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t.home.title}
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto">
            {t.home.subtitle}
          </p>
          <Link
            to="/auth/register"
            className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            {t.home.startNow}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`py-12 sm:py-16 px-4 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {t.home.whyChoose}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } p-4 sm:p-6 rounded-lg shadow-lg border ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="text-blue-500 text-3xl sm:text-4xl mb-3 sm:mb-4">
                📊
              </div>
              <h3
                className={`text-lg sm:text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {t.home.features.visualization.title}
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {t.home.features.visualization.description}
              </p>
            </div>
            <div
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } p-4 sm:p-6 rounded-lg shadow-lg border ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="text-blue-500 text-3xl sm:text-4xl mb-3 sm:mb-4">
                🔔
              </div>
              <h3
                className={`text-lg sm:text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {t.home.features.reminders.title}
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {t.home.features.reminders.description}
              </p>
            </div>
            <div
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } p-4 sm:p-6 rounded-lg shadow-lg border ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="text-blue-500 text-3xl sm:text-4xl mb-3 sm:mb-4">
                💰
              </div>
              <h3
                className={`text-lg sm:text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {t.home.features.savings.title}
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {t.home.features.savings.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } py-12 sm:py-16 px-4`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {t.home.cta.title}
          </h2>
          <p
            className={`text-lg sm:text-xl mb-6 sm:mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            {t.home.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/auth/register"
              className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              {t.home.cta.createAccount}
            </Link>
            <Link
              to="/auth/login"
              className={`inline-block ${
                isDarkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
              } px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto`}
            >
              {t.home.cta.login}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
