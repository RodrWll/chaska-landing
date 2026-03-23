import Image from "next/image";
import { Play } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// CUANDO TENGAS LAS FOTOS REALES:
// 1. Ponlas en la carpeta /public/gallery/
// 2. Reemplaza los src de abajo con "/gallery/nombre-foto.jpg"
// 3. Actualiza los alt con descripciones reales
// ─────────────────────────────────────────────────────────────

const GALLERY_PHOTOS = [
  {
    src: "/gallery/foto-1.jpg",
    alt: "Equipo Chaska trabajando en el rover",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/foto-2.jpg",
    alt: "Brazo robótico del rover Chaska",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/foto-3.jpg",
    alt: "Sistema de locomoción del rover",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/foto-4.jpg",
    alt: "Equipo Chaska en laboratorio PUCP",
    span: "col-span-1 row-span-1",
  },
];

// ID del video de YouTube.
// Reemplaza este valor con el ID real cuando lo tengas.
// Ejemplo: si la URL es https://youtube.com/watch?v=dQw4w9WgXcQ
// entonces el ID es: dQw4w9WgXcQ
const YOUTUBE_VIDEO_ID = "VbMo-3Rs2yE";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* ── ENCABEZADO ──────────────────────────────────────────── */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-chaska-orange uppercase">
            Galería
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter text-white mt-3">
            El rover en<br />
            <span className="text-chaska-orange">acción.</span>
          </h2>
          <p className="text-on-surface-variant leading-relaxed mt-4">
            Imágenes del proceso de construcción, pruebas en laboratorio
            y el equipo detrás del rover.
          </p>
        </div>

        {/* ── VIDEO DE YOUTUBE ────────────────────────────────────────
            aspect-video = proporción 16:9 (estándar YouTube)
            El iframe llena el contenedor completamente.
        ──────────────────────────────────────────────────────────── */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-[0.3em] text-on-surface-variant uppercase mb-4 block">
            Video destacado
          </span>

          <div className="relative w-full aspect-video bg-surface-container rounded-sm overflow-hidden border border-white/10">
            {YOUTUBE_VIDEO_ID !== "REEMPLAZAR_CON_ID" ? (
              // Video real de YouTube
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                title="Chaska Rover — Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              // Placeholder mientras no hay video real
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface-container-low">
                <div className="w-16 h-16 rounded-full bg-chaska-orange/20 flex items-center justify-center">
                  <Play size={28} className="text-chaska-orange ml-1" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-white">Video del Rover</p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Agrega el ID del video en YOUTUBE_VIDEO_ID
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── GRID DE FOTOS ───────────────────────────────────────────
            Usamos un grid de 2 columnas en móvil y 4 en desktop.
            Cada celda tiene aspect-square para fotos cuadradas.
        ──────────────────────────────────────────────────────────── */}
        <div className="mt-12">
          <span className="text-xs font-bold tracking-[0.3em] text-on-surface-variant uppercase mb-4 block">
            Fotos del equipo
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_PHOTOS.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square bg-surface-container rounded-sm overflow-hidden border border-white/5 group"
              >
                {/* Verificamos si la foto existe o mostramos placeholder */}
                <div className="absolute inset-0 bg-surface-container-high flex items-center justify-center">
                  <span className="text-xs text-on-surface-variant font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* 
                  Cuando tengas las fotos reales, descomenta esto
                  y borra el placeholder de arriba:

                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                */}

                {/* Overlay con caption al hover */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-xs text-white font-medium leading-tight">
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── NOTA DE PRENSA PUCP ─────────────────────────────────────
            Link directo al artículo original
        ──────────────────────────────────────────────────────────── */}
        <div className="mt-12 flex items-center gap-4 p-6 bg-surface-container-low border border-white/5 rounded-sm hover:border-chaska-orange/30 transition-colors duration-300 group">
          <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-chaska-orange/10 group-hover:bg-chaska-orange/20 rounded-sm transition-colors duration-300">
            {/* Ícono de periódico/artículo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-chaska-orange"
            >
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
              <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/>
            </svg>
          </div>

          <div className="flex-1">
            <p className="text-sm font-bold text-white">
              Nota de Prensa — Facultad de Ciencias e Ingeniería PUCP
            </p>
            <p className="text-xs text-on-surface-variant mt-0.5">
              "Chaska: tecnología PUCP para explorar el espacio y salvar vidas en tierra"
            </p>
          </div>

            <a
            href="https://facultad-ciencias-ingenieria.pucp.edu.pe/2025/07/04/chaska-tecnologia-pucp-para-explorar-el-espacio-y-salvar-vidas-en-tierra/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold tracking-widest uppercase text-chaska-orange hover:text-white transition-colors duration-200"
          >
            Leer →
          </a>
        </div>

      </div>
    </section>
  );
}