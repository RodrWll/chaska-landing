"use client";

// "use client" le dice a Next.js que este componente necesita
// JavaScript en el navegador (para el scroll y el menú móvil).
// Por defecto en Next.js App Router, todo es "servidor" (sin JS).

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TEAM_INFO } from "@/lib/constants";

// Los links de navegación como constante.
// Si necesitas agregar o quitar un link, solo tocas este array.
const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Equipos", href: "#teams" },
  { label: "Galería", href: "#gallery" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  // Estado: ¿el usuario ha scrolleado hacia abajo?
  // useState es un "valor que puede cambiar". Cuando cambia,
  // React re-dibuja el componente automáticamente.
  const [scrolled, setScrolled] = useState(false);

  // Estado: ¿el menú móvil está abierto?
  const [mobileOpen, setMobileOpen] = useState(false);

  // useEffect ejecuta código cuando el componente aparece en pantalla.
  // Aquí escuchamos el evento "scroll" del navegador.
  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario scrolleó más de 20px, activamos el fondo blur
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Esta función de "limpieza" se ejecuta cuando el componente
    // desaparece — evita memory leaks.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // El [] significa "ejecuta esto solo una vez, al montar"

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 h-16
        flex items-center justify-between px-6 md:px-12
        transition-all duration-300
        ${scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
        }
      `}
    >
      {/* ── LOGO ── */}
      <Link
        href="#hero"
        className="font-headline font-black text-xl tracking-tighter text-white hover:text-chaska-orange transition-colors duration-200"
      >
        CHASKA
        <span className="text-chaska-orange">.</span>
      </Link>

      {/* ── LINKS DESKTOP ── */}
      {/* "hidden md:flex" = oculto en móvil, visible en desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-bold tracking-widest uppercase text-on-surface-variant hover:text-chaska-orange transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* ── CTA DESKTOP ── */}
      <div className="hidden md:flex items-center gap-4">
        <Link
            href="#recruitment"
            className="bg-chaska-orange hover:bg-chaska-orange/90 text-white font-bold text-xs tracking-widest uppercase rounded-sm px-4 py-2 transition-colors duration-200"
        >
            Únete
        </Link>
    </div>

      {/* ── MENÚ MÓVIL ── */}
      {/* Sheet = panel que se desliza desde el lado, de shadcn */}
      {/* "md:hidden" = visible en móvil, oculto en desktop */}
      <div className="md:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <button
            onClick={() => setMobileOpen(true)}
            className="text-on-surface hover:text-chaska-orange transition-colors"
        >
            <Menu size={24} />
            <span className="sr-only">Abrir menú</span>
        </button>


          <SheetContent
            side="right"
            className="w-72 bg-surface-container border-l border-white/10 p-0"
          >
            {/* Cabecera del panel móvil */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
              <span className="font-headline font-black text-lg tracking-tighter text-white">
                CHASKA<span className="text-chaska-orange">.</span>
              </span>
            </div>

            {/* Links del panel móvil */}
            <nav className="flex flex-col px-6 py-8 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold tracking-widest uppercase text-on-surface-variant hover:text-chaska-orange py-3 border-b border-white/5 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA del panel móvil */}
            <div className="px-6">
                <Link
                href="#recruitment"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-chaska-orange hover:bg-chaska-orange/90 text-white font-bold text-xs tracking-widest uppercase rounded-sm px-4 py-3 transition-colors duration-200"
                >
                Únete al equipo
                </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}