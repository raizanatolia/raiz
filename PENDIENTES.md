# Registro de Pendientes y Activos por Confirmar · RAÍZ

*Este documento contiene los elementos pendientes de validación con Anatolia Zapata. Se mantiene fuera de la interfaz pública para preservar la honestidad y serenidad de la experiencia de la visitante.*

---

## 1. Identidad Visual y Logotipo Definitivo
- [ ] **Archivo de logotipo/isotipo oficial:** Incorporar el archivo vectorial final (estructura: semilla vertical dividida en dos mitades, espacio central e inicio de raíces delicadas).
  - *Ubicación en código:* Componente `src/components/Logo.tsx` (está preparado con el slot de reemplazo directo).
  - *Estado actual:* Presentación tipográfica editorial con `RAÍZ` y firma `ANATOLIA ZAPATA`.

---

## 2. Fotografía Real de Marca
- [ ] **Retrato de Anatolia Zapata:** Sustituir la imagen provisional del espacio de estudio/botánica (`src/data/images.ts` -> `anatoliaSpace`) por el retrato fotográfico profesional de Anatolia.
- [ ] **Fotografía de la Bitácora RAÍZ:** Sustituir la fotografía provisional de cuaderno de lino (`src/data/images.ts` -> `journal`) por la toma real de la bitácora física de acompañamiento.
- [ ] **Fotografía Hero:** Validar si se mantiene la foto de stock provisional o se produce una toma personalizada que represente a la comunidad de mujeres de RAÍZ.

---

## 3. Infraestructura de Medios (Cloudinary)
- [ ] **Configuración de Cloudinary:** Cuando se disponga de la cuenta de Cloudinary, configurar las credenciales en `src/data/images.ts`:
  ```ts
  export const CLOUDINARY_CONFIG = {
    cloudName: 'tu-cloud-name',
    baseUrl: 'https://res.cloudinary.com/tu-cloud-name/image/upload',
    useCloudinary: true,
  };
  ```

---

## 4. Definiciones Comerciales y Operativas de Viaje RAÍZ
- [ ] Duración exacta en minutos de cada una de las 12 sesiones.
- [ ] Plataforma y modalidad (videollamada Zoom/Meet, presencial en Lima, híbrido).
- [ ] Inversión económica, formas y facilidades de pago.
- [ ] Protocolo de reagendamiento de sesiones.
- [ ] Inclusión de envío físico de la Bitácora (nacional en Perú / internacional).

---

## 5. Validación del Embudo y Mapa RAÍZ
- [ ] **Flujo del Mapa RAÍZ:** Actualmente enlaza a la versión externa `https://cjyyftsgcb.zite.so/`.
- [ ] Evaluar y validar en una siguiente fase:
  - Filtro de cualificación de entrada.
  - Envío automatizado de resultados por correo electrónico.
  - Herramienta de agenda para llamada de encaje previa.

---

## 6. Canales de Comunicación y Redes Sociales
- [ ] Confirmar URL del perfil de Instagram de RAÍZ o Anatolia Zapata.
- [ ] Confirmar URL de LinkedIn si aplica.
  - *Nota:* En `src/data/content.ts` las redes sociales se mantienen ocultas hasta contar con las URLs definitivas comprobadas.
