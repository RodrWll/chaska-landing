import { Cpu, Users, Globe, FlaskConical } from "lucide-react";

const ACHIEVEMENTS = [
  {
    competition: "ERC 2025",
    result: "Último filtro",
    detail:
      "Primera competencia internacional del equipo. Llegamos al filtro final como equipo nuevo — base sólida de aprendizaje.",
    highlight: false,
  },
  {
    competition: "URC 2026",
    result: "PDR Aprobado",
    detail:
      "Superamos el Preliminary Design Review, uno de los filtros técnicos más exigentes del mundo. 1 punto de diferencia en la fase final.",
    highlight: true,
  },
  {
    competition: "ERC 2026",
    result: "En competencia",
    detail:
      "Actualmente clasificados y preparando la participación con mejoras significativas al rover.",
    highlight: true,
  },
];

const KEY_POINTS = [
  {
    icon: Cpu,
    title: "Tecnología propia",
    description:
      "Desarrollamos desde cero ruedas con resistencia de 150 kg , LiDAR para mapeo 3D en tiempo real.",
  },
  {
    icon: Users,
    title: "Equipo multidisciplinario",
    description:
      "Mecánicos, mecatrónicos, geólogos y más — todas las carreras de la Facultad de Ciencias e Ingeniería de la PUCP bajo un mismo objetivo.",
  },
  {
    icon: FlaskConical,
    title: "Aplicaciones reales",
    description:
      "Más allá de la competencia: nuestro rover puede operar en socavones mineros peligrosos, zonas de difícil acceso geológico y misiones de desactivación de artefactos.",
  },
  {
    icon: Globe,
    title: "Legado para el Perú",
    description:
      "Demostramos que con la tecnología disponible en el Perú y la PUCP se puede construir un rover que compita con los mejores del mundo.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* ── ENCABEZADO ──────────────────────────────────────────── */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-chaska-orange uppercase">
            Sobre Nosotros
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter text-white mt-3">
            Nuevos. Serios.<br />
            <span className="text-chaska-orange">Comprobados.</span>
          </h2>
          <p className="text-on-surface-variant leading-relaxed mt-4">
            Chaska — "estrella" en quechua — nació en la PUCP con una misión
            clara: demostrar que desde el Perú se puede construir tecnología
            que compita con las universidades más avanzadas del mundo.
          </p>
        </div>

        {/* ── GRID PRINCIPAL ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Columna izquierda — Timeline de logros */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] text-on-surface-variant uppercase mb-8">
              Trayectoria
            </h3>

            <div className="flex flex-col gap-0">
              {ACHIEVEMENTS.map((item, index) => (
                <div key={index} className="relative flex gap-6 pb-10 last:pb-0">

                  {/* Línea vertical del timeline */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`
                        w-3 h-3 rounded-full mt-1 shrink-0 z-10
                        ${item.highlight
                          ? "bg-chaska-orange"
                          : "bg-surface-container-high border border-white/20"
                        }
                      `}
                    />
                    {/* La línea se oculta en el último elemento */}
                    {index < ACHIEVEMENTS.length - 1 && (
                      <div className="w-px flex-1 bg-white/10 mt-2" />
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 -mt-0.5">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className="font-headline font-black text-sm tracking-widest uppercase text-white">
                        {item.competition}
                      </span>
                      <span
                        className={`
                          text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm
                          ${item.highlight
                            ? "bg-chaska-orange/20 text-chaska-orange"
                            : "bg-surface-container text-on-surface-variant"
                          }
                        `}
                      >
                        {item.result}
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — Puntos clave */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] text-on-surface-variant uppercase mb-8">
              Por qué Chaska
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {KEY_POINTS.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="p-5 bg-surface-container-low border border-white/5 hover:border-chaska-orange/30 rounded-sm transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-chaska-orange/10 group-hover:bg-chaska-orange/20 rounded-sm mb-4 transition-colors duration-300">
                      <Icon size={16} className="text-chaska-orange" />
                    </div>
                    <h4 className="font-bold text-sm text-white mb-2">
                      {point.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ── CITA DE LA NOTA DE PRENSA PUCP ──────────────────────── */}
        <div className="mt-16 p-8 bg-surface-container-low border-l-2 border-chaska-orange rounded-sm">
          <p className="text-on-surface-variant leading-relaxed italic text-sm md:text-base">
            "La idea es demostrar que con la tecnología y las máquinas que
            disponemos acá en el Perú y en la PUCP, también podemos construir
            un vehículo que se equipare a otros en una competencia internacional."
          </p>
          <p className="text-xs font-bold tracking-widest uppercase text-chaska-orange mt-4">
            — Luis Ramírez, Fundador de Chaska · Nota de Prensa PUCP, julio 2025
          </p>
        </div>

      </div>
    </section>
  );
}