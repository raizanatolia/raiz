import { PageId } from '../data/content';
import { ShieldCheck, Mail, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

interface PoliticaPrivacidadPageProps {
  onNavigate: (page: PageId) => void;
}

export default function PoliticaPrivacidadPage({ onNavigate }: PoliticaPrivacidadPageProps) {
  const handleBack = () => {
    window.location.hash = '#/';
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Breadcrumb / Return */}
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#363D28]/70 hover:text-[#363D28] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Volver al inicio</span>
        </button>

        {/* Header */}
        <header className="border-b border-[#363D28]/15 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#A18347]" aria-hidden="true" />
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#363D28]/90 font-semibold">
              TRANSPARENCIA Y PROTECCIÓN DE DATOS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#363D28] tracking-tight leading-tight mb-4">
            Política de Privacidad y Protección de Datos Personales
          </h1>

          <p className="text-sm font-sans text-[#363D28]/70">
            Conforme a la Ley N.º 29733 (Ley de Protección de Datos Personales de Perú) y su Reglamento aprobado
            mediante D. S. N.º 016-2024-JUS.
          </p>
          <p className="text-xs font-sans text-[#363D28]/60 mt-1">
            Última actualización: 26 de octubre de 2026.
          </p>
        </header>

        {/* Content sections */}
        <div className="prose prose-stone max-w-none text-sm sm:text-base font-sans text-[#363D28]/85 font-light leading-relaxed space-y-8">
          {/* Section 1 */}
          <section className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#363D28]/10 space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif text-[#363D28] font-normal">
              1. Identificación del Responsable del Tratamiento
            </h2>
            <p>
              El presente sitio web es titularidad y responsabilidad de <strong>Anatolia Zapata</strong> (en adelante, «RAÍZ»),
              con correo electrónico oficial de contacto: <a href="mailto:raizanatolia@gmail.com" className="text-[#363D28] font-medium underline underline-offset-2">raizanatolia@gmail.com</a>.
            </p>
            <div className="text-xs text-[#363D28]/70 bg-[#F2EBDD]/60 p-3.5 rounded-xl border border-[#363D28]/10 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#A18347] shrink-0 mt-0.5" />
              <span>
                <strong>Nota de transparencia:</strong> Los datos registrales complementarios (RUC y razón social formal) se encuentran sujetos a confirmación y validación final por la titular en el marco de sus actividades profesionales en Perú.
              </span>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif text-[#363D28] font-normal">
              2. Datos Personales que se Recopilan
            </h2>
            <p>
              A través de los formularios disponibles en este sitio web (páginas <em>Personas</em>, <em>Organizaciones</em> y <em>Contacto</em>), únicamente se solicita y recopila la información estrictamente necesaria para atender tus consultas:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
              <li><strong>Nombre y apellidos</strong>: para identificarte y dirigirnos a ti con cercanía y respeto.</li>
              <li><strong>Correo electrónico</strong>: para responder a tu inquietud o coordinar una conversación exploratoria.</li>
              <li><strong>Organización / Empresa</strong>: únicamente en el formulario de organizaciones, para comprender el contexto de tu equipo.</li>
              <li><strong>Motivo de consulta y notas opcionales</strong>: para conocer brevemente qué dimensión o temática deseas explorar.</li>
            </ul>
            <p className="text-xs text-[#363D28]/70">
              No solicitamos datos sensibles (salud, opiniones políticas, convicciones religiosas o situaciones íntimas) a través de nuestros formularios públicos.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif text-[#363D28] font-normal">
              3. Finalidad del Tratamiento y Base Legal
            </h2>
            <p>
              Los datos facilitados serán tratados exclusivamente con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
              <li>Responder a las consultas, dudas o solicitudes de acompañamiento recibidas.</li>
              <li>Coordinar fechas y alcances para sesiones individuales de Viaje RAÍZ o propuestas a medida para organizaciones.</li>
              <li>Enviar información directamente solicitada por el usuario respecto a las actividades de RAÍZ.</li>
            </ul>
            <p>
              La base legal que legitima el tratamiento es el <strong>consentimiento libre, previo, expreso e informado</strong> otorgado por la persona usuaria al marcar afirmativamente la casilla de aceptación y pulsar el botón de envío. En ningún caso se activan suscripciones comerciales no autorizadas ni se envían correos masivos no solicitados.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif text-[#363D28] font-normal">
              4. Proveedores y Transferencias de Datos
            </h2>
            <p>
              Para operar este sitio web de manera segura y eficiente, se emplean servicios tecnológicos de terceros debidamente seleccionados:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
              <li><strong>FormSubmit.co</strong>: servicio tecnológico externo empleado como canal seguro de transmisión de los formularios hacia el correo oficial (<code className="text-xs bg-[#FAF7F2] px-1 py-0.5 rounded">raizanatolia@gmail.com</code>). FormSubmit procesa la transmisión técnica sin comercializar los datos.</li>
              <li><strong>GitHub Pages</strong>: plataforma de alojamiento web estático donde se publican las páginas del proyecto.</li>
              <li><strong>Cloudinary</strong>: red de entrega de contenido (CDN) empleada exclusivamente para optimizar y servir imágenes estáticas oficiales.</li>
            </ul>
            <p>
              No vendemos, alquilamos ni cedemos tus datos personales a empresas de publicidad ni a intermediarios comerciales de ningún tipo.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif text-[#363D28] font-normal">
              5. Plazo de Conservación y Medidas de Seguridad
            </h2>
            <p>
              Los datos personales se conservarán mientras se mantenga la comunicación o relación entre las partes, o hasta que el titular de los datos ejerza su derecho de cancelación o supresión.
            </p>
            <p>
              RAÍZ adopta medidas técnicas y organizativas razonables, diligentes y proporcionadas para proteger los datos personales contra accesos no autorizados, pérdidas o alteraciones. De acuerdo con las buenas prácticas de la industria y la normativa peruana, se reconoce que ningún sistema tecnológico en internet ofrece seguridad absoluta, por lo que nos comprometemos a mantener un estándar riguroso y transparente de cuidado y reserva profesional.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#363D28]/10 space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif text-[#363D28] font-normal">
              6. Ejercicio de Derechos ARCO
            </h2>
            <p>
              Conforme a la Ley N.º 29733, puedes ejercer en cualquier momento y de forma gratuita tus derechos de:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-[#F2EBDD]/60 border border-[#363D28]/10">
                <strong className="block text-[#363D28] font-medium mb-0.5">Acceso</strong>
                Conocer qué datos personales tuyos están siendo tratados y las condiciones del tratamiento.
              </div>
              <div className="p-3 rounded-xl bg-[#F2EBDD]/60 border border-[#363D28]/10">
                <strong className="block text-[#363D28] font-medium mb-0.5">Rectificación</strong>
                Actualizar o corregir datos inexactos, erróneos o incompletos.
              </div>
              <div className="p-3 rounded-xl bg-[#F2EBDD]/60 border border-[#363D28]/10">
                <strong className="block text-[#363D28] font-medium mb-0.5">Cancelación (Supresión)</strong>
                Solicitar la eliminación de tus datos cuando hayan dejado de ser necesarios.
              </div>
              <div className="p-3 rounded-xl bg-[#F2EBDD]/60 border border-[#363D28]/10">
                <strong className="block text-[#363D28] font-medium mb-0.5">Oposición</strong>
                Oponerte al tratamiento de tus datos por motivos fundados y legítimos.
              </div>
            </div>
            <p className="pt-2 text-sm">
              Para ejercer cualquiera de estos derechos, envía una solicitud escrita con tu nombre y el detalle de tu pedido al correo oficial:
            </p>
            <div className="pt-1">
              <a
                href="mailto:raizanatolia@gmail.com?subject=Solicitud%20Derechos%20ARCO%20-%20RA%C3%8DZ"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Escribir a raizanatolia@gmail.com</span>
              </a>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif text-[#363D28] font-normal">
              7. Cookies y Tecnologías de Rastreo
            </h2>
            <p>
              Este sitio web opera de forma limpia y minimalista. <strong>No empleamos cookies publicitarias, píxeles de seguimiento ni herramientas de analítica invasiva</strong> (como Meta Pixel, TikTok Pixel o Google Analytics). Únicamente se utilizan recursos técnicos indispensables para la visualización correcta de tipografías y el funcionamiento básico de la navegación.
            </p>
          </section>
        </div>

        {/* Footer of legal page */}
        <div className="mt-12 pt-8 border-t border-[#363D28]/15 flex items-center justify-between flex-wrap gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#363D28] font-semibold hover:text-[#A18347] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Regresar a la página principal</span>
          </button>

          <span className="text-xs font-sans text-[#363D28]/60">
            RAÍZ · Anatolia Zapata
          </span>
        </div>
      </div>
    </div>
  );
}
