import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[93vh] bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-950 text-white py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Gerencie suas assinaturas com facilidade
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto">
            O Subtrack ajuda você a controlar todos os seus gastos recorrentes
            em um só lugar
          </p>
          <Link
            to="/auth/register"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Comece Agora
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            Por que escolher o Subtrack?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="text-blue-500 text-3xl sm:text-4xl mb-3 sm:mb-4">
                📊
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                Visualização Clara
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Veja todos os seus gastos recorrentes em um dashboard intuitivo
              </p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="text-blue-500 text-3xl sm:text-4xl mb-3 sm:mb-4">
                🔔
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                Lembretes Inteligentes
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Receba notificações antes dos vencimentos das suas assinaturas
              </p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="text-blue-500 text-3xl sm:text-4xl mb-3 sm:mb-4">
                💰
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                Economia Garantida
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Identifique e cancele assinaturas não utilizadas para economizar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
            Pronto para começar a economizar?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já estão controlando melhor seus
            gastos
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/auth/register"
              className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Criar Conta
            </Link>
            <Link
              to="/auth/login"
              className="inline-block bg-gray-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold border border-gray-600 hover:bg-gray-600 transition-colors w-full sm:w-auto"
            >
              Fazer Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
