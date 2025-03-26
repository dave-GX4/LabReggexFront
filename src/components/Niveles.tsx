import Facil from "../assets/dificultad/facil.png"
import FacilIntermedio from "../assets/dificultad/FacilIntermedio.png"
import Intermedio from "../assets/dificultad/intermedio.png"
import Dificil from "../assets/dificultad/dificil.png"

export const levels = [
    {
        "id":1,
        "nivel": "Nivel 1",
        "dificultad": "Fácil",
        "dificultadImg": Facil,
        "tiempo_minutos": 5,
        "icono": "https://via.placeholder.com/50/000000/FFFFFF/?text=Medalla"
    },
    {
        "id":2,
        "nivel": "Nivel 2",
        "dificultad": "Facil intermedio",
        "dificultadImg": FacilIntermedio,
        "tiempo_minutos": 10,
        "icono": "https://via.placeholder.com/50/000000/FFFFFF/?text=Medalla"
    },
    {
        "id":3,
        "nivel": "Nivel 3",
        "dificultad": "Intermedio",
        "dificultadImg": Intermedio,
        "tiempo_minutos": 15,
        "icono": "https://via.placeholder.com/50/000000/FFFFFF/?text=Medalla"
    },
    {
        "id":4,
        "nivel": "Nivel 4",
        "dificultad": "Difícil",
        "dificultadImg": Dificil,
        "tiempo_minutos": 20,
        "icono": "https://via.placeholder.com/50/000000/FFFFFF/?text=Medalla"
    }
    // Agregar más niveles según sea necesario
  ]  