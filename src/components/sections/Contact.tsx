import { TEAM_INFO } from "@/lib/constants";
import { Mail, Instagram, MapPin, ExternalLink } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: TEAM_INFO.email,
    href: `mailto:${TEAM_INFO.email}`,
    description: "Escríbenos para consultas, alianzas o prensa.",
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: TEAM_INFO.instagram,
    href: TEAM_INFO.instagramUrl,
    description: "Síguenos para ver el progreso del rover en tiempo real.",
    external: true,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "PUCP — San Miguel, Lima",
    href: "https://maps.google.com/?q=Pontificia+Universidad+Católica+del+Perú",
    description: "Av. Universitaria 1801, San Miguel, Lima 15088.",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto">

        {/* ── ENCABEZADO ──────────────────────────────────────────── */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-chaska-orange uppercase">
            Contacto
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter text-white mt-3">
            Hablemos.<br />
            <span className="text-chaska-orange">Estamos aquí.</span>
          </h2>
          <p className="text-on-surface-variant leading-relaxed mt-4">
            ¿Quieres unirte al equipo, proponer una alianza o simplemente
            saber más sobre Chaska? Contáctanos directamente.
          </p>
        </div>

        {/* ── GRID DE CONTACTO ────────────────────────────────────────
            Layout: 1 columna en móvil, 3 columnas en desktop
        ──────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {CONTACT_ITEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group p-6 bg-surface-container border border-white/5 hover:border-chaska-orange/40 rounded-sm transition-all duration-300 hover:bg-surface-container-high flex flex-col gap-4"
              >
                {/* Ícono */}
                <div className="w-10 h-10 flex items-center justify-center bg-chaska-orange/10 group-hover:bg-chaska-orange/20 rounded-sm transition-colors duration-300">
                  <Icon size={18} className="text-chaska-orange" />
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                      {item.label}
                    </span>
                    {/* Ícono de link externo si aplica */}
                    {item.external && (
                      <ExternalLink
                        size={12}
                        className="text-on-surface-variant group-hover:text-chaska-orange transition-colors duration-300"
                      />
                    )}
                  </div>
                  <p className="font-bold text-sm text-white mb-2">
                    {item.value}
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── MAPA PUCP ───────────────────────────────────────────────
            Embed de Google Maps apuntando a la PUCP.
            loading="lazy" = el mapa solo carga cuando el usuario llega aquí.
            Esto mejora el tiempo de carga inicial de la página.
        ──────────────────────────────────────────────────────────── */}
        <div className="rounded-sm overflow-hidden border border-white/10">
          <div className="px-4 py-3 bg-surface-container border-b border-white/10 flex items-center gap-2">
            <MapPin size={14} className="text-chaska-orange" />
            <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">
              PUCP — Av. Universitaria 1801, San Miguel
            </span>
          </div>
          <div className="relative w-full h-64 md:h-80 bg-surface-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4!2d-77.0779!3d-12.0698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662bf%3A0x90e6b7b8b8b8b8b8!2sPontificia%20Universidad%20Cat%C3%B3lica%20del%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación PUCP"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* ── CTA FINAL ───────────────────────────────────────────────
            Último empujón antes del footer para que el usuario
            tome acción si todavía no lo hizo.
        ──────────────────────────────────────────────────────────── */}
        <div className="mt-16 text-center">
          <p className="text-on-surface-variant text-sm mb-6">
            ¿Listo para ser parte de la historia?
          </p>
          
          <a
            href="#recruitment"
            className="
              inline-flex items-center justify-center gap-2
              bg-chaska-orange hover:bg-chaska-orange/90
              text-white font-bold text-xs tracking-widest uppercase
              px-12 py-4 rounded-sm
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