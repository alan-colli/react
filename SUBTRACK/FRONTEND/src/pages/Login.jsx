import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-[93vh] bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Bem-vindo de volta</h2>
          <p className="mt-2 text-gray-400">
            Entre com suas credenciais para acessar sua conta
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Lembrar-me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="#"
                className="font-medium text-blue-500 hover:text-blue-400"
              >
                Esqueceu sua senha?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Entrar
          </button>
        </form>

        <div className="text-center text-sm text-gray-400">
          Não tem uma conta?{" "}
          <Link
            to="/auth/register"
            className="font-medium text-blue-500 hover:text-blue-400"
          >
            Registre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
