"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { TEAMS, RECRUITMENT_ENABLED } from "@/lib/constants";
import { Loader2, CheckCircle, Clock, Upload } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// SCHEMA DE VALIDACIÓN CON ZOD
// Cada campo define su tipo y sus reglas.
// Los mensajes de error aparecen debajo de cada input.
// ─────────────────────────────────────────────────────────────
const applicationSchema = z.object({
  full_name: z
    .string()
    .min(3, "Ingresa tu nombre completo"),
  email: z
    .string()
    .email("Ingresa un email válido"),
  phone: z
    .string()
    .max(9, "Máximo 9 dígitos")
    .optional(),
  university: z
    .string()
    .optional(),
  career: z
    .string()
    .min(2, "Ingresa tu carrera"),
  study_cycle: z
    .number({ message: "Selecciona tu ciclo" })
    .int()
    .min(1)
    .max(10),
  team: z
    .string()
    .min(1, "Selecciona un equipo"),
  motivation: z
    .string()
    .min(50, "Cuéntanos un poco más — mínimo 50 caracteres")
    .max(500, "Máximo 500 caracteres"),
  linkedin: z
    .string()
    .url("Ingresa una URL válida")
    .optional()
    .or(z.literal("")),
});

// Inferimos el tipo TypeScript desde el schema de Zod.
// Así no repetimos la definición de tipos.
type ApplicationForm = z.infer<typeof applicationSchema>;

// ─────────────────────────────────────────────────────────────
// COMPONENTE DE INPUT REUTILIZABLE
// Encapsula el label, el input y el mensaje de error.
// Así no repetimos ese bloque en cada campo.
// ─────────────────────────────────────────────────────────────
function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">
        {label}
        {required && <span className="text-chaska-orange ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-400 mt-0.5">{error}</p>
      )}
    </div>
  );
}

// Clases compartidas para todos los inputs y selects
const inputClass = `
  w-full bg-surface-container border border-white/10
  focus:border-chaska-orange focus:outline-none
  text-white text-sm px-4 py-3 rounded-sm
  transition-colors duration-200
  placeholder:text-on-surface-variant/50
`;

// ─────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────
export default function Recruitment() {

  // Estado del archivo CV seleccionado
  const [cvFile, setCvFile] = useState<File | null>(null);

  // Estado del envío: idle | loading | success | error
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [errorMessage, setErrorMessage] = useState("");

  // Inicializamos React Hook Form con el resolver de Zod
  const {
    register,       // conecta cada input al formulario
    handleSubmit,   // envuelve el submit con validación
    formState: { errors },  // errores de validación
    reset,          // limpia el formulario
    watch,          // observa el valor de un campo
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  // Observamos el campo motivation para mostrar el contador
  const motivationValue = watch("motivation", "");

  // ── FUNCIÓN DE ENVÍO ──────────────────────────────────────
  // Se ejecuta solo si Zod validó todos los campos correctamente
  const onSubmit = async (data: ApplicationForm) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      let cv_url = "";

      // Si el usuario adjuntó un CV, lo subimos primero a Storage
      if (cvFile) {
        // Creamos un nombre único para evitar colisiones
        const fileName = `${Date.now()}_${cvFile.name.replace(/\s/g, "_")}`;

        const { error: uploadError } = await supabase.storage
          .from("cvs")          // nombre del bucket en Supabase
          .upload(fileName, cvFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) throw new Error("Error subiendo el CV");

        // Obtenemos la URL pública del archivo subido
        const { data: urlData } = supabase.storage
          .from("cvs")
          .getPublicUrl(fileName);

        cv_url = urlData.publicUrl;
      }

      // Guardamos la postulación en la tabla applications
      const { error: insertError } = await supabase
        .from("applications")
        .insert([{ ...data, cv_url: cv_url || null }]);

      if (insertError) {
        // Email duplicado — el más común
        if (insertError.code === "23505") {
          throw new Error("Este email ya tiene una postulación registrada.");
        }
        throw new Error("Error al enviar la postulación.");
      }

      setSubmitStatus("success");
      reset();
      setCvFile(null);

    } catch (err: unknown) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Ocurrió un error inesperado."
      );
    }
  };

  // ── VISTA: CONVOCATORIA CERRADA ───────────────────────────
  if (!RECRUITMENT_ENABLED) {
    return (
      <section id="recruitment" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-surface-container border border-white/10 rounded-sm">
              <Clock size={28} className="text-chaska-orange" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-chaska-orange uppercase">
                Convocatoria
              </span>
              <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter text-white mt-3">
                Próximamente.
              </h2>
              <p className="text-on-surface-variant mt-4 max-w-md mx-auto leading-relaxed">
                Estamos preparando la próxima convocatoria. Síguenos en
                Instagram para enterarte primero.
              </p>
            </div>
            
            <a
              href="https://instagram.com/chaska"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-chaska-orange/50 text-on-surface-variant hover:text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200"
            >
              Seguir en Instagram
            </a>
          </div>
        </div>
      </section>
    );
  }

  // ── VISTA: ÉXITO ─────────────────────────────────────────
  if (submitStatus === "success") {
    return (
      <section id="recruitment" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-chaska-orange/20 rounded-sm">
              <CheckCircle size={28} className="text-chaska-orange" />
            </div>
            <div>
              <h2 className="font-headline font-black text-3xl tracking-tighter text-white">
                ¡Postulación enviada!
              </h2>
              <p className="text-on-surface-variant mt-3 max-w-md mx-auto leading-relaxed">
                Recibimos tu postulación. Nos pondremos en contacto contigo
                pronto. Mientras tanto, síguenos en Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── VISTA: FORMULARIO ACTIVO ──────────────────────────────
  return (
    <section id="recruitment" className="py-24 px-6 md:px-12 bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-chaska-orange uppercase">
            Convocatoria
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter text-white mt-3">
            Únete a<br />
            <span className="text-chaska-orange">Chaska.</span>
          </h2>
          <p className="text-on-surface-variant leading-relaxed mt-4">
            Buscamos estudiantes apasionados de todas las carreras de la PUCP.
            Si tienes ganas de construir algo grande, este es tu lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── COLUMNA IZQUIERDA: info de disciplinas ── */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-bold tracking-[0.3em] text-on-surface-variant uppercase mb-6">
              Disciplinas buscadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Ing. Mecánica",
                "Ing. Mecatrónica",
                "Ing. Electrónica",
                "Ing. Telecomunicaciones",
                "Química",
                "Física",
                "Ing. Informática",
                "Ing. Geológica",
                "Comunicaciones",
                "Marketing",
              ].map((d) => (
                <span
                  key={d}
                  className="text-xs font-bold tracking-wide uppercase px-3 py-1.5 bg-surface-container border border-white/10 text-on-surface-variant rounded-sm"
                >
                  {d}
                </span>
              ))}
            </div>

            <div className="mt-8 p-5 bg-surface-container border border-chaska-orange/20 rounded-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-chaska-orange mb-2">
                Nota
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Si tu carrera no está en la lista pero crees que puedes
                aportar, igualmente postula. Evaluamos el potencial.
              </p>
            </div>
          </div>

          {/* ── COLUMNA DERECHA: formulario ── */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >

              {/* Nombre + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Nombre completo" error={errors.full_name?.message} required>
                  <input
                    {...register("full_name")}
                    placeholder="Tu nombre completo"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message} required>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="tu@email.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              {/* Teléfono + Universidad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Teléfono" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    placeholder="999 999 999"
                    className={inputClass}
                  />
                </Field>
                <Field label="Universidad" error={errors.university?.message}>
                  <input
                    {...register("university")}
                    placeholder="PUCP (si aplica)"
                    className={inputClass}
                  />
                </Field>
              </div>

              {/* Carrera + Ciclo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Carrera" error={errors.career?.message} required>
                  <input
                    {...register("career")}
                    placeholder="Ej: Ingeniería Mecánica"
                    className={inputClass}
                  />
                </Field>
                <Field label="Ciclo de estudio" error={errors.study_cycle?.message} required>
                  <select
                    {...register("study_cycle", { valueAsNumber: true })}
                    className={inputClass}
                  >
                    <option value="">Selecciona tu ciclo</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((c) => (
                      <option key={c} value={c}>
                        Ciclo {c}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Equipo */}
              <Field label="¿A qué equipo quieres unirte?" error={errors.team?.message} required>
                <select
                  {...register("team")}
                  className={inputClass}
                >
                  <option value="">Selecciona un equipo</option>
                  {TEAMS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Motivación */}
              <Field label="¿Por qué quieres unirte?" error={errors.motivation?.message} required>
                <textarea
                  {...register("motivation")}
                  rows={4}
                  placeholder="Cuéntanos qué te motiva a unirte a Chaska y qué puedes aportar al equipo..."
                  className={`${inputClass} resize-none`}
                />
                {/* Contador de caracteres */}
                <p className="text-xs text-on-surface-variant/50 text-right -mt-1">
                  {motivationValue?.length ?? 0}/500
                </p>
              </Field>

              {/* LinkedIn */}
              <Field label="LinkedIn" error={errors.linkedin?.message}>
                <input
                  {...register("linkedin")}
                  placeholder="https://linkedin.com/in/tu-perfil"
                  className={inputClass}
                />
              </Field>

              {/* CV Upload */}
              <Field label="CV (PDF, máx. 5MB)">
                <label className="flex items-center gap-3 w-full border border-dashed border-white/20 hover:border-chaska-orange/50 px-4 py-4 rounded-sm cursor-pointer transition-colors duration-200 group">
                  <Upload size={16} className="text-on-surface-variant group-hover:text-chaska-orange transition-colors" />
                  <span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">
                    {cvFile ? cvFile.name : "Seleccionar archivo..."}
                  </span>
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && file.size <= 5 * 1024 * 1024) {
                        setCvFile(file);
                      } else if (file) {
                        alert("El archivo supera los 5MB.");
                      }
                    }}
                  />
                </label>
              </Field>

              {/* Error general */}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-sm">
                  <p className="text-sm text-red-400">{errorMessage}</p>
                </div>
              )}

              {/* Botón submit */}
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="
                  w-full flex items-center justify-center gap-2
                  bg-chaska-orange hover:bg-chaska-orange/90
                  disabled:opacity-50 disabled:cursor-not-allowed
                  text-white font-bold text-xs tracking-widest uppercase
                  px-8 py-4 rounded-sm
                  transition-all duration-200 active:scale-95
                "
              >
                {submitStatus === "loading" ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Enviando postulación...
                  </>
                ) : (
                  "Enviar postulación"
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}