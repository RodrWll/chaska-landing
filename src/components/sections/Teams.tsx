import { TEAMS } from "@/lib/constants";
import {
  Building2,
  Cog,
  Hand,
  FlaskConical,
  Zap,
  Monitor,
  Navigation,
  Plane,
  Megaphone,
} from "lucide-react";

// Mapeamos cada id de equipo con un ícono de lucide-react.
// Los íconos son componentes de React, así que los guardamos
// como valores en un objeto y los recuperamos por id.
const TEAM_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  gestion:    Building2,
  locomocion: Cog,
  brazo:      Hand,
  ciencia:    FlaskConical,
  electronica: Zap,
  software:   Monitor,
  navegacion: Navigation,
  dron:       Plane,
  soporte:    Megaphone,
};

export default function Teams() {
  return (
    <section id="teams" className="py-24 px-6 md:px-12 bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto">

        {/* ── ENCABEZADO ──────────────────────────────────────────── */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-chaska-orange uppercase">
            Sub-equipos
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter text-white mt-3">
            Un rover,<br />
            <span className="text-chaska-orange">nueve equipos.</span>
          </h2>
          <p className="text-on-surface-variant leading-relaxed mt-4">
            Chaska es posible gracias a la colaboración de especialistas en
            distintas disciplinas. Cada sub-equipo es responsable de un sistema
            crítico del rover.
          </p>
        </div>

        {/* ── GRID DE TARJETAS ────────────────────────────────────────
            Responsive: 1 columna en móvil → 2 en tablet → 3 en desktop
        ──────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAMS.map((team, index) => {
            // Recuperamos el ícono correspondiente a este equipo.
            // Si no existe un ícono para ese id, usamos Cog como fallback.
            const Icon = TEAM_ICONS[team.id] ?? Cog;

            return (
              <div
                key={team.id}
                className="group relative p-6 bg-surface-container border border-white/5 hover:border-chaska-orange/40 rounded-sm transition-all duration-300 hover:bg-surface-container-high"
              >
                {/* Número de orden — detalle técnico/estético */}
                <span className="absolute top-4 right-4 text-xs font-bold text-white/10 font-mono group-hover:text-chaska-orange/30 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Ícono */}
                <div className="w-10 h-10 flex items-center justify-center bg-chaska-orange/10 group-hover:bg-chaska-orange/20 rounded-sm mb-5 transition-colors duration-300">
                  <Icon size={18} className="text-chaska-orange" />
                </div>

                {/* Nombre del equipo */}
                <h3 className="font-headline font-black text-base tracking-tight text-white mb-2 uppercase">
                  {team.name}
                </h3>

                {/* Descripción */}
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {team.description}
                </p>

                {/* Línea de acento inferior — aparece al hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-chaska-orange group-hover:w-full transition-all duration-500 rounded-sm" />
              </div>
            );
          })}
        </div>

        {/* ── CTA INFERIOR ────────────────────────────────────────────
            Invita a unirse después de ver los equipos disponibles
        ──────────────────────────────────────────────────────────── */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-surface-container border border-white/5 rounded-sm">
          <div>
            <p className="font-headline font-black text-lg text-white tracking-tight">
              ¿Ves tu lugar aquí?
            </p>
            <p className="text-sm text-on-surface-variant mt-1">
              Buscamos talento en todas las disciplinas.
            </p>
          </div>
            <a
            href="#recruitment"
            className="
              shrink-0 inline-flex items-center justify-center
              bg-chaska-orange hover:bg-chaska-orange/90
              text-white font-bold text-xs tracking-widest uppercase
              px-8 py-4 rounded-sm
              transition-all duration-200 active:scale-95
            "
          >
            Ver Convocatoria
          </a>
        </div>

      </div>
    </section>
  );
}