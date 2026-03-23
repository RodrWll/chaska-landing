"use client";

// Este componente necesita "use client" porque tiene
// una animación de entrada que depende del navegador.

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 overflow-hidden"
    >

      {/* ── FONDO ──────────────────────────────────────────────
          Por ahora usamos un gradiente oscuro como placeholder.
          Cuando tengas fotos reales del rover, reemplazas esto
          con un <Image> de Next.js.
      ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente base — simula el fondo oscuro del diseño */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

        {/* Acento naranja sutil en la esquina — da profundidad */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-chaska-orange/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-chaska-orange/5 blur-3xl rounded-full" />

        {/* Overlay gradiente de abajo — hace legible el texto */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* ── CONTENIDO ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl space-y-6">

        {/* Badge de estado */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            {/* Punto parpadeante — indica que están activos */}
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chaska-orange opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-chaska-orange" />
          </span>
          <span className="text-xs font-bold tracking-[0.2em] text-chaska-orange uppercase">
            Compitiendo en ERC 2026
          </span>
        </div>

        {/* Título principal */}
        {/* El <br /> crea el salto de línea para el efecto visual */}
        <h1 className="font-headline font-black text-5xl md:text-7xl leading-none tracking-tighter uppercase text-white">
          Ingeniería<br />
          <span className="text-chaska-orange">Peruana</span><br />
          al Mundo.
        </h1>

        {/* Subtítulo */}
        <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl">
          Somos el equipo de robótica de la PUCP. Diseñamos, construimos y
          competimos con un rover en las competencias más exigentes del planeta.
        </p>

        {/* Botones CTA */}
        {/* Dos botones: uno primario (acción principal) y uno secundario */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">

          {/* CTA primario */}
          <Link
            href="#recruitment"
            className="
              inline-flex items-center justify-center gap-2
              bg-chaska-orange hover:bg-chaska-orange/90
              text-white font-bold text-xs tracking-widest uppercase
              px-8 py-4 rounded-sm
              transition-all duration-200 active:scale-95
            "
          >
            <Rocket size={14} />
            Únete al Equipo
          </Link>

          {/* CTA secundario */}
          <Link
            href="#about"
            className="
              inline-flex items-center justify-center gap-2
              border border-white/20 hover:border-chaska-orange/50
              text-on-surface-variant hover:text-white
              font-bold text-xs tracking-widest uppercase
              px-8 py-4 rounded-sm
              transition-all duration-200
            "
          >
            Conocer más
          </Link>
        </div>

        {/* Stats rápidas — 3 números que dan credibilidad inmediata */}
        <div className="flex gap-8 pt-4 border-t border-white/10">
          <div>
            <p className="font-headline font-black text-2xl text-white">2025</p>
            <p className="text-xs text-on-surface-variant tracking-widest uppercase">Fundación</p>
          </div>
          <div>
            <p className="font-headline font-black text-2xl text-white">9</p>
            <p className="text-xs text-on-surface-variant tracking-widest uppercase">Sub-equipos</p>
          </div>
          <div>
            <p className="font-headline font-black text-2xl text-chaska-orange">ERC</p>
            <p className="text-xs text-on-surface-variant tracking-widest uppercase">2026 activo</p>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ──────────────────────────────────────
          Pequeña animación que invita al usuario a scrollear.
          Se oculta automáticamente en pantallas pequeñas.
      ──────────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs text-on-surface-variant tracking-widest uppercase">Scroll</span>
        <ArrowDown
          size={16}
          className="text-on-surface-variant animate-bounce"
        />
      </div>

    </section>
  );
}