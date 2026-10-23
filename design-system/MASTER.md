# Sistema de Diseño · RAÍZ — Anatolia Zapata
## Fase 1: Rediseño visual, experiencia de usuario y conversión

Este documento recopila las decisiones visuales, tokens de estilo, arquitectura de rutas y principios editoriales adoptados para la plataforma web de **RAÍZ · Anatolia Zapata**.

---

## 1. Identidad Visual Oficial

### Logotipo Horizontal Oficial
- **URL:** `https://res.cloudinary.com/rus3f4tb/image/upload/v1792767322/RAIZ_HorizontalLogoTransparente.png`
- **Uso:** Encabezado principal y pie de página. Se respetan sus proporciones originales sin duplicar texto tipográfico junto a él.

### Isotipo y Favicon
- **URL:** `https://res.cloudinary.com/rus3f4tb/image/upload/v1792767407/favicon-raiz.png`
- **Uso:** Favicon oficial del documento HTML, aplicaciones reducidas y acentos identitarios.

---

## 2. Tokens de Color y Atmósfera

| Token | Código HEX | Rol y Aplicación |
|---|---|---|
| **Marfil Cálido** | `#F2EBDD` | Superficie principal del sitio. Aporta serenidad, calidez humana y descanso visual. |
| **Marfil Puro** | `#FAF7F2` | Fondo de bloques destacados, tarjetas de lectura y secciones de identificación. |
| **Marfil Tint** | `#EAE2D2` | Fondos de secciones alternas, contenedores sutiles y tarjetas de enfoque. |
| **Verde Oliva Profundo** | `#363D28` | Color de texto principal, titulares, botones primarios y acentos con alto contraste. |
| **Verde Oliva Oscuro** | `#242A1A` | Fondo del footer y estados hover de botones primarios. |
| **Ocre Dorado Mate** | `#A18347` | Acento discreto para líneas sutiles, números editoriales y detalles orgánicos. No se usa en texto pequeño. |
| **Ocre Luminoso** | `#C4A76C` | Acentos sobre fondos oscuros (como en el bloque de Mapa RAÍZ y Footer). |
| **Borde / Hairline** | `rgba(54, 61, 40, 0.12)` | Delimitadores orgánicos ultrafinos en lugar de sombras pesadas o bordes toscos. |

---

## 3. Tipografía

- **Titulares (Serif Expresiva):** `Cormorant Garamond`, Georgia, serif. Aporta cadencia reflexiva, elegancia y calidez humana.
- **Textos y Controles (Sans Legible):** `Manrope`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif. Alta legibilidad en móvil y soporte integral de acentos en español.

---

## 4. Nuevo Hero de Inicio (Sin Retrato)

- **Composición:** Columna única editorial con alto contraste y amplia respiración espacial.
- **Fondo:** Solución visual CSS atmosférica con base marfil cálido, gradientes sutiles y filigrana botánica tenue.
- **Preparación Higgsfield:** Variable `BRAND_ASSETS.heroBackgroundCloudinaryUrl` lista para recibir la URL definitiva en Cloudinary con `background-size: cover` y capa de protección.
- **Contenido del Hero:**
  - Eyebrow: `RAÍZ · UN ESPACIO PARA ELEGIR CON CONCIENCIA`
  - H1: *Sabes que necesitas un cambio. Es momento de descubrir qué quieres construir.*
  - CTA Principal: *Descubre tu Mapa RAÍZ →*
  - CTA Secundario: *Conoce mi acompañamiento →*
  - Enlace discreto: *¿Representas una organización? Explora esta línea →*

---

## 5. Arquitectura de Rutas y Páginas

La web implementa dos caminos claramente diferenciados a través de un enrutador hash compatible con GitHub Pages (`base: "./"`):

1. **`#/` (Inicio):** Landing completa de diez bloques secuenciales (Hero sin retrato, Identificación «Una pausa para mirarte», El sentido de RAÍZ, Dos caminos, El Método RAÍZ botánico, Mapa RAÍZ cinco recursos, Oferta principal, Sobre Anatolia, FAQs y Cierre).
2. **`#/personas` (Personas):** Orientada a mujeres en transición personal o profesional, 4 situaciones identificables y desglose de Mapa, Viaje y Bitácora.
3. **`#/organizaciones` (Organizaciones):** Enfoque institucional, mirada integral, 4 áreas de trabajo, 3 formatos y proceso de 4 pasos.
4. **`#/sobre-mi` (Sobre mí):** Historia auténtica de Anatolia Zapata en primera persona, preservando la sensibilidad del relato y espacio reservado para su retrato fotográfico real.
5. **`#/mapa-raiz` (Mapa RAÍZ):** Presentación clara del punto de partida, los cinco recursos oficiales, modo de uso y nota de transparencia (sin promesas clínicas o psicométricas).
6. **`#/viaje-raiz` (Viaje RAÍZ):** Oferta del programa de 12 sesiones individuales a lo largo de 3 meses, qué incluye y contacto directo.
7. **`#/contacto` (Contacto):** Conmutador entre Personas y Organizaciones, formulario accesible y canal directo a WhatsApp y correo.
