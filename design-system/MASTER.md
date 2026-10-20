# Sistema de Diseño · RAÍZ — Anatolia Zapata

Este documento recopila las decisiones visuales, tokens de estilo y principios editoriales adoptados para la presencia web de **RAÍZ**.

---

## 1. Filosofía y Dirección de Marca

- **Propósito:** Comprender desde dónde tomamos decisiones para elegir con mayor conciencia y reconocer la huella que dejamos en nuestro entorno.
- **Tono y Personalidad:** Calma, profundidad, cercanía, feminidad, naturaleza y elegancia sencilla.
- **Metáfora Rectora:** El crecimiento de una semilla: primero profundiza raíces firmes en la tierra para luego brotar, crecer y dar frutos sostenibles.
- **Dirección de Comunicación:** *“Comprende tu raíz. Transforma tus decisiones.”*
- **Frase de Marca:** *“Cada decisión deja una huella.”*

---

## 2. Tokens de Color

| Token | Código HEX | Rol y Aplicación |
|---|---|---|
| **Marfil Cálido** | `#F2EBDD` | Superficie principal del sitio. Aporta serenidad, textura orgánica y luminosidad suave. |
| **Marfil Tint** | `#EAE2D2` | Fondos de secciones alternas y contenedores sutiles. |
| **Marfil Puro** | `#FAF7F2` | Fondo de bloques destacados y tarjetas de lectura. |
| **Verde Oliva Profundo** | `#363D28` | Color de texto principal, titulares, botones primarios y acentos con alto contraste. |
| **Verde Oliva Oscuro** | `#242A1A` | Fondo del footer y estados hover de botones primarios. |
| **Ocre Dorado Mate** | `#A18347` | Acento discreto para líneas sutiles, números editoriales y detalles orgánicos. No se usa en texto pequeño de bajo contraste. |
| **Ocre Luminoso** | `#C4A76C` | Acentos sobre fondos oscuros (como en el bloque de Mapa RAÍZ y Footer). |
| **Borde / Hairline** | `rgba(54, 61, 40, 0.12)` | Delimitadores orgánicos ultrafinos en lugar de sombras pesadas o bordes toscos. |

---

## 3. Tipografía

### Titulares (Serif Expresiva)
- **Familia:** `Cormorant Garamond`, Georgia, serif.
- **Uso:** H1, H2, H3, citas y números de recursos.
- **Intención:** Sensibilidad editorial, calidez humana y cadencia reflexiva.

### Texto y Controles (Sans Legible)
- **Familia:** `Manrope`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- **Uso:** Párrafos, navegación, botones, etiquetas y acordeones.
- **Intención:** Máxima legibilidad en pantallas móviles y de escritorio, soporte integral de tildes y diacríticos en español.

---

## 4. Principios de Composición y "Anti-Slop"

1. **Sin píldoras estáticas decorativas:** La metadata y las firmas se presentan en texto plano limpio con separadores sutiles (`·`), sin chips redondeados ni fondos de plástico.
2. **Alternancia de ritmos compositivos:** No se repiten tarjetas idénticas sección por sección. Se alternan retículas asimétricas, citas editoriales y bloques de ancho completo.
3. **Firma visual orgánica:** Se incorpora un trazo ultrafino que evoca raíces y brotes para conectar bloques sin saturar.
4. **Respeto a la honestidad del producto:** No se prometen resultados automáticos, diagnósticos clínicos inexistentes ni puntuaciones arbitrarias.
5. **Cero efectos estridentes:** Sin degradados de neón, sin dorado metálico ficticio, sin animaciones que mareen y con respeto total a `prefers-reduced-motion`.

---

## 5. Arquitectura de Imágenes y Preparación Cloudinary

- Todas las imágenes están centralizadas en `src/data/images.ts`.
- Cada imagen cuenta con identificador, URL provisional estable, texto alternativo descriptivo, procedencia y proporciones bloqueadas para prevenir saltos de maquetación (CLS).
- Para migrar a Cloudinary en el futuro, basta con habilitar `CLOUDINARY_CONFIG.useCloudinary = true` y definir `cloudName` / `baseUrl` sin modificar un solo componente visual.
