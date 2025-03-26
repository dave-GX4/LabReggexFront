import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Parte izquierda (imagen o video) */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/600x800")' }}>
        {/* Aquí puedes agregar una imagen o video en lugar de la URL de la imagen */}
      </div>

      {/* Parte derecha (Formulario de login/registro) */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 p-8">
        <Fade direction="up" cascade>
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {isLogin ? "Iniciar Sesión" : "Registro"}
            </h2>
            <Slide direction={isLogin ? "left" : "right"}>
              <form className="space-y-4">
                {!isLogin && (
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                )}
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  {isLogin ? "Entrar" : "Registrarse"}
                </button>
              </form>
            </Slide>
            <p className="text-gray-600 mt-4 text-sm">
              {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 font-bold ml-1"
              >
                {isLogin ? "Regístrate" : "Inicia sesión"}
              </button>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Auth;
