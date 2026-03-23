export const TEAM_INFO = {
  name: "Chaska",
  university: "PUCP",
  foundedYear: 2025,
  email: "chaska.roverteam@gmail.com",
  instagram: "@chaska",
  instagramUrl: "https://instagram.com/chaska",
};

export const RECRUITMENT_ENABLED =
  process.env.NEXT_PUBLIC_RECRUITMENT_ENABLED === "true";

  // Los 9 sub-equipos del rover
export const TEAMS = [
  {
    id: "gestion",
    name: "Gestión",
    emoji: "🏢",
    description: "Coordinación general, planificación y relaciones externas del equipo.",
  },
  {
    id: "locomocion",
    name: "Locomoción",
    emoji: "🦾",
    description: "Diseño y control del sistema de movilidad del rover.",
  },
  {
    id: "brazo",
    name: "Brazo Robótico",
    emoji: "🤖",
    description: "Manipulador de 6 grados de libertad para tareas de precisión.",
  },
  {
    id: "ciencia",
    name: "Ciencia",
    emoji: "🔬",
    description: "Instrumentos científicos para análisis de suelo y muestras.",
  },
  {
    id: "electronica",
    name: "Electrónica y Comunicaciones",
    emoji: "⚡",
    description: "Hardware, PCBs, sensores y sistemas de comunicación.",
  },
  {
    id: "software",
    name: "Software y Estación Base",
    emoji: "💻",
    description: "Software embebido, interfaz de control y telemetría.",
  },
  {
    id: "navegacion",
    name: "Navegación Autónoma",
    emoji: "🧭",
    description: "Algoritmos de autonomía, SLAM y planificación de rutas.",
  },
  {
    id: "dron",
    name: "Dron",
    emoji: "🛸",
    description: "Vehículo aéreo no tripulado integrado al sistema del rover.",
  },
  {
    id: "soporte",
    name: "Soporte",
    emoji: "📢",
    description: "Comunicaciones, marketing y difusión del equipo.",
  },
];