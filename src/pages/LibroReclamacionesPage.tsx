import { PageId } from '../data/content';
import { BookOpen, Mail, ArrowLeft, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

interface LibroReclamacionesPageProps {
  onNavigate: (page: PageId) => void;
}

export default function LibroReclamacionesPage({ onNavigate }: LibroReclamacionesPageProps) {
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
              CUMPLIMIENTO NORMATIVO PERUANO · LEY N.º 29571 Y LEY N.º 32495
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#363D28] tracking-tight leading-tight mb-4">
            Libro de Reclamaciones Virtual
          </h1>

          <p className="text-sm font-sans text-[#363D28]/75 leading-relaxed">
            Espacio informativo y canal oficial para la atención de disconformidades, reclamos y quejas conforme
            a las directivas del Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual (INDECOPI).
          </p>
        </header>

        {/* Technical Notice & Integration Status */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/15 mb-10 space-y-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#A18347] shrink-0 mt-0.5" />
            <div className="text-sm font-sans text-[#363D28]/85 leading-relaxed">
              <strong className="block text-[#363D28] font-semibold mb-1">
                Aviso sobre la plataforma operativa y numeración correlativa:
              </strong>
              Conforme al Reglamento del Libro de Reclamaciones (D.S. N.º 011-2011-PCM y modificatorias de la Ley N.º 32495), las plataformas virtuales requieren un sistema de numeración correlativa inmutable, emisión automática de constancia de recepción al consumidor y custodia certificada de expedientes.
              <br /><br />
              Al ser este sitio un entorno estático en GitHub Pages, la integración automatizada de correlativos se encuentra en proceso de enlace con el servicio backend certificado. En tanto se culmina dicha vinculación, <strong>garantizamos la recepción y atención prioritaria de cualquier reclamo o queja</strong> a través de nuestro canal directo oficial.
            </div>
          </div>
        </div>

        {/* Distinción entre Reclamo y Queja */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-serif text-[#363D28] mb-4">
            Definiciones oficiales conforme a INDECOPI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/10">
              <span className="text-xs font-sans tracking-widest uppercase text-[#A18347] font-semibold block mb-2">
                DISCONFORMIDAD DIRECTA
              </span>
              <h3 className="text-lg font-serif font-semibold text-[#363D28] mb-2">
                Reclamo
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#363D28]/80 leading-relaxed font-light">
                Disconformidad relacionada con los servicios adquiridos o contratados, cuando el consumidor considera que no se ha cumplido con lo ofrecido o acordado.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/10">
              <span className="text-xs font-sans tracking-widest uppercase text-[#A18347] font-semibold block mb-2">
                MALESTAR O ATENCIÓN
              </span>
              <h3 className="text-lg font-serif font-semibold text-[#363D28] mb-2">
                Queja
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#363D28]/80 leading-relaxed font-light">
                Disconformidad que no se refiere directamente al servicio brindado, sino al trato, la atención al público o el malestar generado durante la interacción.
              </p>
            </div>
          </div>
        </section>

        {/* Modelo Informativo de Hoja de Reclamación */}
        <section className="bg-white/80 p-6 sm:p-10 rounded-3xl border border-[#363D28]/15 shadow-xs mb-10 space-y-6">
          <div className="border-b border-[#363D28]/10 pb-4 flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs font-sans tracking-widest uppercase text-[#A18347] font-semibold block">
                FORMATO OFICIAL
              </span>
              <h3 className="text-xl font-serif font-medium text-[#363D28]">
                Hoja de Reclamación Virtual N.º [Correlativo en trámite]
              </h3>
            </div>
            <span className="text-xs font-sans text-[#363D28]/60 bg-[#FAF7F2] px-3 py-1.5 rounded-full border border-[#363D28]/10">
              Fecha: {new Date().toLocaleDateString('es-PE')}
            </span>
          </div>

          {/* 1. Datos del Proveedor */}
          <div className="space-y-2 text-xs sm:text-sm font-sans text-[#363D28]/85">
            <h4 className="font-semibold uppercase tracking-wider text-[#363D28] text-xs">
              1. Identificación del Proveedor del Servicio
            </h4>
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#363D28]/10 space-y-1">
              <p><strong>Titular / Marca:</strong> RAÍZ · Anatolia Zapata</p>
              <p><strong>Razón Social / RUC:</strong> En proceso de consignación registral por la titular</p>
              <p><strong>Correo oficial para notificaciones:</strong> raizanatolia@gmail.com</p>
            </div>
          </div>

          {/* 2. Procedimiento de envío directo */}
          <div className="space-y-3 text-xs sm:text-sm font-sans text-[#363D28]/85">
            <h4 className="font-semibold uppercase tracking-wider text-[#363D28] text-xs">
              2. Cómo presentar tu Reclamo o Queja
            </h4>
            <p className="leading-relaxed">
              Para garantizar que tu solicitud cuente con fecha fehaciente de recepción, por favor envía un correo a <strong>raizanatolia@gmail.com</strong> indicando en el asunto: <code className="bg-[#FAF7F2] px-2 py-0.5 rounded text-[#363D28] font-mono text-xs">Reclamo / Queja - [Tu Nombre]</code> con la siguiente información indispensable:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#363D28]/10 space-y-2 text-xs">
              <p><strong>a) Identificación del consumidor:</strong> Nombres, apellidos, documento de identidad (DNI/CE), correo electrónico y domicilio.</p>
              <p><strong>b) Identificación del servicio:</strong> Servicio contratado (ej. Sesión individual, Viaje RAÍZ, Taller organizacional).</p>
              <p><strong>c) Detalle del reclamo o queja:</strong> Descripción cronológica, clara y respetuosa de los hechos ocurridos.</p>
              <p><strong>d) Pedido concreto:</strong> Qué solución o acción solicita para atender su disconformidad.</p>
            </div>
          </div>

          {/* Plazo Legal */}
          <div className="pt-2 text-xs font-sans text-[#363D28]/75 leading-relaxed border-t border-[#363D28]/10">
            <p>
              <strong>Plazo de atención:</strong> Conforme al Código de Protección y Defensa del Consumidor, el proveedor dará respuesta formal a tu reclamo o queja dentro del plazo legal improrrogable de quince (15) días hábiles al correo electrónico que consignes en tu comunicación.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="mailto:raizanatolia@gmail.com?subject=Libro%20de%20Reclamaciones%20-%20RA%C3%8DZ"
              className="inline-flex items-center justify-center text-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs max-w-full"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>Enviar Hoja de Reclamación <span className="hidden sm:inline">a raizanatolia@gmail.com</span></span>
            </a>
          </div>
        </section>

        {/* Footer of legal page */}
        <div className="pt-8 border-t border-[#363D28]/15 flex items-center justify-between flex-wrap gap-4">
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
