import Link from "next/link";
import { TEAM_INFO } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Equipos", href: "#teams" },
  { label: "Galería", href: "#gallery" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-white/10">
      
      {/* Bloque principal */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Columna 1 — Logo y descripción */}
          <div className="flex flex-col gap-4">
            <span className="font-headline font-black text-2xl tracking-tighter text-white">
              CHASKA<span className="text-chaska-orange">.</span>
            </span>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              Equipo de robótica de la PUCP. Competimos en URC y ERC con el
              objetivo de llevar la ingeniería peruana al mundo.
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href={TEAM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-chaska-orange transition-colors duration-200"
                aria-label="Instagram de Chaska"
              >
                {/* Ícono de Instagram como SVG inline — no dependemos de ninguna librería */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href={`mailto:${TEAM_INFO.email}`}
                className="text-on-surface-variant hover:text-chaska-orange transition-colors duration-200"
                aria-label="Email de Chaska"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2 — Links de navegación */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-widest uppercase text-chaska-orange">
              Navegación
            </span>
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3 — Contacto */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-widest uppercase text-chaska-orange">
              Contacto
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${TEAM_INFO.email}`}
                className="text-sm text-on-surface-variant hover:text-white transition-colors duration-200 w-fit"
              >
                {TEAM_INFO.email}
              </a>
              <a
                href={TEAM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-on-surface-variant hover:text-white transition-colors duration-200 w-fit"
              >
                {TEAM_INFO.instagram}
              </a>
              <span className="text-sm text-on-surface-variant">
                PUCP — Lima, Perú
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Barra inferior — copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-on-surface-variant tracking-widest uppercase">
            © {currentYear} Chaska Robotics — PUCP
          </span>
          <span className="text-xs text-on-surface-variant tracking-widest uppercase">
            Adaptative Intelligent Solutions
          </span>
        </div>
      </div>

    </footer>
  );
}