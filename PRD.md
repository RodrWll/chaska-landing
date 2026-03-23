# 📋 PRD - LANDING PAGE CHASKA

## **1. VISIÓN DEL PROYECTO**

Desarrollar un landing page minimalista y profesional que represente a **Chaska**, equipo de robótica de la PUCP que compite en URC y ERC, con el objetivo de atraer estudiantes talentosos de diferentes disciplinas para que se unan al equipo y demostren el potencial del rover desarrollado.

---

## **2. INFORMACIÓN DEL EQUIPO**

| Campo | Valor |
|-------|-------|
| **Nombre** | Chaska |
| **Universidad** | PUCP (Pontificia Universidad Católica del Perú) |
| **Año de Fundación** | 2025 |
| **Misión** | Competir en las competencias más prestigiosas de robótica y adaptar tecnologías desarrolladas a aplicaciones reales en la industria |
| **Email** | chaska.roverteam@gmail.com |
| **Instagram** | @chaska |
| **Logo** | Disponible (formato a definir) |
| **Colores** | Naranja (#f16723), Blanco, Negro |

---

## **3. CONTENIDO DISPONIBLE**

✅ **Multimedia:**
- Fotos grupales de miembros (parciales)
- Imágenes del rover
- Video de YouTube sobre SAR (Search and Rescue)
- Nota de prensa de PUCP

❌ **No disponible aún:**
- Artículos técnicos de innovaciones
- Blog

---

## **4. LOGROS Y TRAYECTORIA**

| Competencia | Año | Resultado | Nota |
|------------|------|-----------|------|
| **URC** | 2026 | Rechazados (Pasó PDR - 1 punto de diferencia) | Primer filtro aprobado |
| **ERC** | 2025 | Rechazados (Último filtro) | Equipo nuevo, aprendizaje inicial |
| **ERC** | 2026 | En competencia (objetivo actual) | - |

**Posicionamiento:** Equipo nuevo y prometedor, rechazado por mínimos detalles pero con demostración de capacidad técnica.

---

## **5. ESTRUCTURA DE EQUIPOS**

El landing mostrará 10 sub-equipos/áreas:

1. 🏢 **Gestión**
2. 🦾 **Locomoción**
3. 🤖 **Brazo Robótico**
4. 🔬 **Ciencia**
5. ⚡ **Electrónica y Comunicaciones**
6. 💻 **Software y Estación Base**
7. 🧭 **Navegación Autónoma**
8. 🛸 **Dron**
9. 📢 **Soporte (Comunicaciones y Marketing)**

---

## **6. CONVOCATORIA DE RECLUTAMIENTO**

**Estado:** Deshabilitado por defecto (mostrar "Próximamente")

**Funcionalidad:**
- Flag booleano en base de datos para habilitar/deshabilitar
- Cuando está habilitado: Mostrar sección "Join Us" con formulario
- Cuando está deshabilitado: Mostrar "Convocatoria próximamente" o similar

**Disciplinas Buscadas:**
- Ingeniería Mecánica
- Mecatrónica
- Ingeniería Electrónica
- Telecomunicaciones
- Química
- Física
- (Flexible según necesidades)

**Proceso de Selección:**
- A definir y comunicar cuando la convocatoria sea abierta

---

## **7. FORMULARIO DE POSTULACIÓN**

**Campos:**
- Nombre Completo
- Email
- Teléfono (opcional)
- Universidad (si no es PUCP)
- Carrera/Disciplina
- Año de Estudio (1ro-5to)
- ¿A qué equipo/área quieres unirte? (selector con los 10 equipos)
- ¿Por qué quieres unirte? (textarea corto)
- LinkedIn (opcional)
- Archivo de CV (opcional, subida de archivo)

**Almacenamiento:**
- Base de datos gratuita (Supabase o Firebase)
- Acceso administrador para revisar postulaciones

**Validación:**
- Email válido y único
- Campos requeridos: nombre, email, carrera, equipo, mensaje
- CV máximo 5MB (si se sube)

---

## **8. ESTRUCTURA DE SECCIONES (Inspirado en Nova Rover)**

```
1. NAVBAR
   - Logo Chaska
   - Links: Home, About, Teams, Recruitment, Contact
   - Scroll behavior (navbar fijo o sticky)

2. HERO SECTION
   - Título impactante
   - Subtítulo/descripción corta
   - CTA principal: "Únete a Chaska"
   - Imagen/video del rover en fondo o lado
   - Animaciones sutiles

3. ABOUT SECTION
   - Misión y visión
   - "Somos un equipo nuevo pero..."
   - Logros recientes (PDR 2026, participación ERC 2025, etc.)
   - Qué hacemos
   - 3-4 puntos clave sobre la misión

4. TEAMS SECTION (Sub-equipos)
   - Grid de 10 tarjetas
   - Cada tarjeta: Icono, nombre equipo, descripción corta
   - Hover effect o expandible para más info
   - Minimalista pero informativo

5. RECRUITMENT SECTION
   - Condicional: Si convocatoria está abierta
   - Disciplinas buscadas (badges)
   - CTA: "Postúlate Ahora"
   - Si no está abierta: "Convocatoria proximamente"

6. FORM SECTION
   - Formulario inline (solo si convocatoria abierta)
   - Validaciones en tiempo real
   - Mensaje de éxito/error
   - Confirmación al enviar

7. GALLERY/MEDIA
   - Fotos del equipo (grid responsivo)
   - Embeds de video YouTube
   - Nota de prensa de PUCP
   - Minimalista, no abarrotado

8. CONTACT SECTION
   - Email: chaska.roverteam@gmail.com
   - Instagram link
   - Mapa de ubicación PUCP (opcional)

9. FOOTER
   - Logo
   - Links rápidos
   - Copyright
   - Social links
```

---

## **9. STACK TECNOLÓGICO**

| Aspecto | Tecnología | Razón |
|--------|-----------|-------|
| **Framework** | Next.js 14+ (App Router) | SSR, SEO, performance |
| **Styling** | Tailwind CSS | Utility-first, rápido |
| **Componentes UI** | 21st dev + Custom | Minimalista, profesional |
| **Iconos** | Heroicons / Lucide React | Simples, consistentes |
| **Formularios** | React Hook Form | Validación, performance |
| **Base de Datos** | Supabase (PostgreSQL) | Gratuita, segura, fácil |
| **Almacenamiento Archivos** | Supabase Storage | Mismo servicio |
| **Hosting** | Vercel | Free tier, Next.js nativo |
| **SEO** | next-seo / Next.js built-in | Metadatos, Open Graph |
| **Analytics** | (Futuro) Vercel Analytics | Opcional |
| **Email** | (Futuro) Resend o SendGrid | Confirmaciones automáticas |

---

## **10. CARACTERÍSTICAS FUNCIONALES**

**MVP (Mínimo Viable):**
- ✅ Landing page responsivo (mobile-first)
- ✅ Secciones estáticas: Hero, About, Teams, Gallery, Contact
- ✅ Formulario de postulación con validación
- ✅ Base de datos para almacenar postulaciones
- ✅ Admin: Flag para habilitar/deshabilitar convocatoria
- ✅ SEO optimizado
- ✅ Deploy en Vercel

**Futuro (No MVP):**
- 🔄 Confirmación de email automática
- 🔄 Dashboard admin para revisar postulaciones
- 🔄 Blog/actualizaciones
- 🔄 Dark mode
- 🔄 Newsletter
- 🔄 Analytics avanzados

---

## **11. DISEÑO Y ESTILO**

**Filosofía:**
- **Minimalista pero profesional**
- Contenido blanco/limpio
- Acentos en naranja (#f16723)
- Tipografía clara (sans-serif moderno)
- Espaciado generoso
- Animaciones sutiles (no invasivas)

**Referencias:**
- Nova Rover (estructura y layout)
- 21st dev components (componentes base)
- nextlevelbuilder/ui-ux-pro-max-skill (patrones de diseño)

**Colores Principales:**
- Primario: Naranja #f16723
- Secundario: Negro #000000
- Fondo: Blanco #FFFFFF
- Texto: Negro #1a1a1a
- Bordes/dividers: Gris claro #e5e5e5

---

## **12. RESPONSIVIDAD**

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navbar colapsable en móvil
- Grid cards se adaptan: 1 col (móvil) → 2 cols (tablet) → 3+ cols (desktop)

---

## **13. VARIABLES DE AMBIENTE (.env.local)**

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email (futuro)
NEXT_PUBLIC_RESEND_API_KEY=

# Admin
NEXT_PUBLIC_RECRUITMENT_ENABLED=false  # Flag para habilitar convocatoria
```

---

## **14. FLUJO DE USUARIO**

```
Usuario llega → Lee hero section → Explora About y Teams 
→ Ve si hay convocatoria abierta → Completa formulario 
→ Recibe confirmación (visual, y email futuro) 
→ Admin ve postulación en base de datos
```

---

## **15. CRITERIOS DE ÉXITO**

- ✅ Landing cargue en <3 segundos
- ✅ 100% responsivo
- ✅ Formulario funcione sin errores
- ✅ Datos se guarden correctamente en DB
- ✅ SEO score alto (Lighthouse)
- ✅ Admin pueda habilitar/deshabilitar convocatoria fácilmente
- ✅ Diseño profesional que represente calidad técnica del equipo

---

## **16. PRÓXIMOS PASOS**

1. ✅ **PRD aprobado** (Este documento)
2. 📐 **Diseño visual** (Figma mockups - opcional)
3. 💻 **Setup inicial** (Repo, dependencias, estructura)
4. 🛠️ **Desarrollo de componentes**
5. 🗄️ **Integración Supabase**
6. 🧪 **Testing y ajustes**
7. 🚀 **Deploy en Vercel**
8. 📝 **Documentación y mantenimiento**

---

## ✨ RESUMEN

Este landing page será la puerta de entrada para que nuevos talentos se unan a **Chaska**. Será minimalista pero impactante, profesional pero accesible, y completamente funcional para capturar postulaciones de futuros miembros del equipo.