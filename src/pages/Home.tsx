import { useState } from "react";
import { FaMedal, FaCoins, FaUserAlt, FaAward, FaAlgolia } from "react-icons/fa";
import Header from "../components/Header";
import { levels } from "../components/Niveles"
import Dr from "../assets/Dr/doctor1.png"


const Home = () => {
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);

  const handleOpenCharacterChange = () => {
    setIsCharacterModalOpen(true);
  };

  const handleCloseCharacterChange = () => {
    setIsCharacterModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      {/* Header */}
      <Header />

      <div className="flex justify-between mt-8 p-4">
        {/* Columna izquierda: otros elementos */}
        <div className="w-1/4 bg-black text-white p-4 rounded-lg shadow-lg flex flex-col space-y-4">
          {/* Puntos */}
          <div className="bg-green-500 p-4 rounded-lg shadow-md flex items-center space-x-4">
            <FaCoins className="text-4xl" />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Puntos</h3>
              <p className="text-sm">1000 Puntos</p>
            </div>
          </div>

          {/* Medallas */}
          <div className="bg-yellow-500 p-4 rounded-lg shadow-md flex items-center space-x-4">
            <FaMedal className="text-4xl" />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Medallas</h3>
              <p className="text-sm">3 Medallas</p>
            </div>
          </div>

          {/* Cambio de personajes como botón */}
          <button
            onClick={handleOpenCharacterChange}
            className="bg-blue-500 p-4 rounded-lg shadow-md flex items-center space-x-4 hover:bg-blue-600 transition"
          >
            <FaUserAlt className="text-4xl" />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Cambio de Personajes</h3>
              <p className="text-sm">Selecciona un nuevo personaje</p>
            </div>
          </button>
        </div>

        {/* Columna central: niveles */}
        <div className="w-1/2 flex flex-col items-center ml-4 mr-4">
          <h2 className="text-3xl font-bold text-white mb-6">Selecciona tu nivel</h2>
          {/* Grid de niveles dividido en 2 columnas */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {levels.map((level) => (
              <button key={level.id} className="bg-gray-800 border-2 border-red-400 transition hover:bg-gray-700 p-4 rounded-lg shadow-lg flex place-items-center space-x-5">
                <div className="flex bg-amber-400 rounded-full w-20 h-20 justify-center place-items-center">
                  <img
                    src={level.dificultadImg}
                    alt="Dificultad"
                    className="w-15 h-15"
                  />
                </div>

                <div className="flex flex-col space-x-10 h-20 w-50 space-y-1">
                  <div className="flex flex-row w-50 space-x-4 place-items-center">
                    <h3 className="text-xl font-semibold text-white">{level.nivel}</h3>
                    <span className="text-sm text-white">{level.dificultad}</span>
                  </div>
                  
                  <div className="flex w-35 h-30 space-x-6">
                    <div className="flex items-center space-x-1">
                      <FaAlgolia className="text-white w-6 h-6"/>
                      <span className="text-sm text-white">{level.tiempo_minutos} min</span>
                    </div>

                    <div className="flex justify-center place-items-center">
                      <FaAward className="text-white w-6 h-6"/>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Columna derecha: imagen del personaje principal */}
        <div className="w-1/4 bg-black text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4">El Dr. SinVer tela MeT</h3>
          <img
            src={Dr}
            alt="Personaje Principal"
            className="w-40 h-40 object-cover rounded-full mb-4"
          />
          <p className="text-sm text-center">Aquí puedes poner una breve descripción del personaje principal.</p>
        </div>
      </div>

      {/* Modal para cambio de personaje */}
      {isCharacterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 max-w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Seleccionar Personaje</h3>
            <p className="text-gray-700 mb-4">Aquí puedes seleccionar un nuevo personaje para usar.</p>
            <button
              onClick={handleCloseCharacterChange}
              className="bg-red-500 text-white py-2 px-4 text-sm rounded-md hover:bg-red-600 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;