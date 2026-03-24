import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

// ─────────────────────────────────────────────────────────────
// Cliente de Supabase con la service_role key.
// Esta key tiene permisos completos — por eso solo la usamos
// en el servidor, NUNCA en el navegador.
// ─────────────────────────────────────────────────────────────
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// El mismo schema de validación que en el formulario.
// Validamos dos veces: en el cliente (UX) y en el servidor (seguridad).
const applicationSchema = z.object({
  full_name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().optional(),
  university: z.string().optional(),
  career: z.string().min(2),
  study_cycle: z.number().int().min(1).max(10),
  team: z.string().min(1),
  motivation: z.string().min(50).max(500),
  linkedin: z.string().url().optional().or(z.literal("")),
  cv_url: z.string().optional(),
});

// ─────────────────────────────────────────────────────────────
// Handler POST — se ejecuta cuando el formulario hace submit
// Next.js enruta automáticamente POST /api/apply a esta función
// ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // Leemos el body de la request como JSON
    const body = await request.json();

    // Validamos con Zod — si falla, retornamos error 400
    const parsed = applicationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Datos inválidos",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }
    // Agrega esto dentro del try, antes del insert en Supabase
    if (parsed.data.cv_url && !parsed.data.cv_url.includes(".pdf")) {
    return NextResponse.json(
        { error: "El CV debe ser un archivo PDF." },
        { status: 400 }
    );
    }
    // Guardamos en Supabase usando el cliente admin
    const { error } = await supabaseAdmin
      .from("applications")
      .insert([parsed.data]);

    if (error) {
      // Código 23505 = violación de unique constraint (email duplicado)
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Este email ya tiene una postulación registrada." },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      { message: "Postulación enviada correctamente." },
      { status: 201 }
    );

  } catch (err) {
    console.error("Error en /api/apply:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

// Bloqueamos otros métodos HTTP — solo aceptamos POST
export async function GET() {
  return NextResponse.json(
    { error: "Método no permitido." },
    { status: 405 }
  );
}