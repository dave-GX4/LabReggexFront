import { useState } from "react";
import { characters } from "../components/Personajes.tsx";

const CharacterSelection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 place-items-center">
      <h2 className="text-3xl font-bold text-white mb-4">Seleccione su personaje</h2>
      <p className="text-lg text-white mb-6 text-center max-w-2xl">
        Cada personaje tiene habilidades únicas. ¡Elige sabiamente y prepárate para la aventura!
      </p>

      {/* Contenedor con scroll vertical */}
      <div className="bg-white rounded-lg w-full max-w-4xl h-[600px] overflow-y-auto p-4">
        <div className="rounded-lg place-items-center grid grid-cols-3 gap-6 p-4">
          {characters.map((character, index) => (
            <div
              key={index}
              className={`relative bg-black border-2 border-green-500 p-4 rounded-lg shadow-md flex flex-col items-center text-center w-56
                transition-all duration-300 ease-in-out transform overflow-hidden
                ${hoveredIndex === index ? "h-66" : "h-58"}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-28 h-28 object-cover rounded-full mb-3 border-2 border-white"
              />
              <h3 className="text-lg font-semibold text-white">{character.name}</h3>

              {/* Descripción visible solo en hover */}
              <div
                className={`transition-opacity duration-300 ease-in-out text-white text-sm mt-2 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0 h-0"
                }`}
              >
                <p>{character.habilidad}</p>
              </div>

              <button
                className="bg-blue-400 text-white text-sm py-2 px-4 mt-2 rounded-md hover:bg-green-600 transition"
              >
                Seleccionar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;