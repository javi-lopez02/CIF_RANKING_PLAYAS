import { useEffect, useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import {useAuth} from '../../context/auth.context'

export default function BeachLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Array<string>>([]);
  const {errors ,signIn, isAuth} = useAuth()

  const navigate = useNavigate();

  useEffect(() => {
    if (error.length > 0) {
      const time = setTimeout(() => {
        setError([]);
      }, 5000);
      return () => clearTimeout(time);
    }
  }, [error]);

  useEffect(()=>{
    setError(errors)
  },[errors])

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const { elements } = event.currentTarget;
    const inputEmail = elements.namedItem("email") as RadioNodeList;
    const inputPassword = elements.namedItem("password") as RadioNodeList;

    if (!inputEmail.value) {
      setError([...error, "User name is required"]);
      return;
    }

    if (!inputPassword.value) {
      setError([...error, "Password is required"]);
      return
    }

    await signIn({email: inputEmail.value, password:inputPassword.value})

    inputEmail.value = ""
    inputPassword.value = ""
  };

  return (
    <div className="flex min-h-screen">
      {/* Panel lateral con imagen de playa */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-700 opacity-80"></div>
        <img 
          src="/api/placeholder/800/600" 
          alt="Hermosa playa" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-white">
          <h2 className="text-4xl font-bold mb-4">Beach Ranking</h2>
          <p className="text-xl max-w-md text-center">
            Descubre y califica las mejores playas del mundo
          </p>
        </div>
      </div>
      
      {/* Formulario de login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <img 
              src="/api/placeholder/120/120" 
              alt="Logo" 
              className="mx-auto h-20 w-20 mb-4 rounded-full"
            />
            <h1 className="text-3xl font-bold text-gray-800">¡Bienvenido!</h1>
            <p className="text-gray-600 mt-2">Inicia sesión para calificar tus playas favoritas</p>
          </div>

          {error.length > 0 &&
              error.map((err) => {
                return (
                  <div
                    className="bg-red-400 p-2 rounded-lg mx-auto w-4/5 flex items-center justify-center"
                    key={err}
                  >
                    <h1 className="text-white font-bold">{err}</h1>
                  </div>
                );
              })}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <Link to={"#"} className="text-sm text-blue-600 hover:text-blue-500">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Recordar mi sesión
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Iniciando sesión...
                </span>
              ) : (
                "Iniciar sesión"
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <Link to={"/register"} className="font-medium text-blue-600 hover:text-blue-500">
                Regístrate ahora
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}