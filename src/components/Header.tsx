import { useState } from "react";

const Header = () => {
  const [user] = useState({
    name: "Jugador1",
    profilePic: "https://i.pravatar.cc/50", // Imagen de perfil de prueba
  });

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    // Aquí puedes agregar la lógica para cerrar sesión
  };

  return (
    <header className="w-full bg-black text-white p-4 shadow-lg flex justify-between items-center">
      {/* Nombre y foto de perfil */}
      <div className="flex items-center gap-4">
        <img
          src={user.profilePic}
          alt="Perfil"
          className="w-10 h-10 rounded-full border-2 border-green-500"
        />
        <span className="text-lg font-semibold">{user.name}</span>
      </div>

      {/* Botones */}
      <div className="flex items-center gap-4">
        <button className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition">
          Configuración
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default Header;