import { useState } from 'react';
import { PageId } from '../data/content';
import { BookOpen, Sparkles, Calendar, CheckCircle2, ArrowRight, Mail, Users, Star } from 'lucide-react';

interface CursosRetosPageProps {
  onNavigate: (page: PageId) => void;
}

const COURSES_DATA = [
  {
    badge: 'RETO GRATUITO · 7 DÍAS',
    title: 'Reto 7 Días: Reconecta con tu Raíz',
    subtitle: 'Un ejercicio diario de 5 minutos en audio y bitácora digital',
    description:
      'Diseñado para mujeres ocupadas que quieren hacer una pausa consciente en su rutina, observar qué emociones o exigencias están acelerando sus días y recalibrar su atención.',
    details: [
      '7 audios breves guiados por Anatolia Zapata',
      'Bitácora digital descargable con preguntas de reflexión',
      'Acceso flexible desde tu celular',
    ],
    status: 'Inscripciones abiertas',
    ctaText: 'Quiero unirme al Reto 7 Días',
    ctaAction: 'https://wa.me/51940497864?text=Hola%20Anatolia,%20quiero%20inscripciones%20para%20el%20Reto%207%20D%C3%ADas',
  },
  {
    badge: 'TALLER INTENSIVO ONLINE',
    title: 'Decisiones sin Culpa',
    subtitle: 'Aprende a establecer límites sanos y tomar decisiones en coherencia',
    description:
      'Un taller práctico de 2 encuentros donde trabajamos los automatismos del «sí fácil», el miedo a decepcionar a otros y cómo construir acuerdos sostenibles en tu familia y trabajo.',
    details: [
      '2 sesiones en vivo de 90 minutos vía Zoom',
      'Guía de ejercicios y plantillas de acuerdos familiares/laborales',
      'Grabación disponible por 30 días',
    ],
    status: 'Próxima edición: Consultar fechas',
    ctaText: 'Consultar por próxima edición',
    ctaAction: 'https://wa.me/51940497864?text=Hola%20Anatolia,%20quiero%20informaci%C3%B3n%20del%20taller%20Decisiones%20sin%20Culpa',
  },
  {
    badge: 'CURSO DIGITAL Y BITÁCORA',
    title: 'Bitácora RAÍZ: Tu Guía de Trabajo Personal',
    subtitle: 'Un sistema estructurado para pasar del caos a la claridad escrita',
    description:
      'Aprende la metodología de registro consciente de Anatolia Zapata para utilizar tu Bitácora como una herramienta diaria de orden mental, gestión emocional y foco en lo importante.',
    details: [
      'Cuaderno de trabajo Bitácora RAÍZ (Físico o Virtual)',
      'Acceso a la plataforma de video con las 5 lecciones guiadas',
      'Ejercicios prácticos de seguimiento mensual',
    ],
    status: 'Disponible todo el año',
    ctaText: 'Quiero mi Bitácora y Curso',
    ctaAction: 'https://wa.me/51940497864?text=Hola%20Anatolia,%20quiero%20informaci%C3%B3n%20de%20Bit%C3%A1cora%20RA%C3%8DZ',
  },
];

export default function CursosRetosPage({ onNavigate }: CursosRetosPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    fetch('https://formsubmit.co/ajax/raizanatolia@gmail.com', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      })
      .catch(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      });
  };

  return (
    <div className="bg-[#FAF5EE] text-[#222918] font-sans min-h-screen pt-28 pb-20 md:pt-36 md:pb-28">
      {/* ------------------------------------------------------------- */}
      {/* HERO CURSOS & RETOS */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mb-16 md:mb-20 text-center space-y-6">
        <div className="inline-block">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#363D28] block mb-1">
            APRENDIZAJE Y EXPERIENCIAS FLEXIBLES · RAÍZ
          </span>
          <div className="w-16 h-[2px] bg-[#A18347] mx-auto" />
        </div>

        <div className="relative inline-block">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#222918] uppercase leading-none">
            CURSOS & RETOS
          </h1>
          <div className="w-full h-3 sm:h-4 bg-[#D8E488] rounded-full mt-1 opacity-90 -skew-x-6 mx-auto" />
        </div>

        <p className="text-xl sm:text-2xl font-serif text-[#222918] leading-relaxed max-w-3xl mx-auto font-normal">
          Aprende, explora y pon en práctica nuevas formas de elegir. Espacios de aprendizaje flexible para avanzar a tu propio ritmo.
        </p>

        <p className="text-base sm:text-lg text-[#363D28]/85 font-light leading-relaxed max-w-2xl mx-auto">
          Si buscas una primera aproximación al Método RAÍZ antes de iniciar un proceso de acompañamiento 1 a 1, o deseas profundizar en temas específicos como límites, gestión del tiempo y escritura consciente.
        </p>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* LISTADO DE CURSOS Y RETOS */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mb-20 md:mb-28 space-y-8">
        {COURSES_DATA.map((course, idx) => (
          <div
            key={idx}
            className="bg-[#F6F0E8] rounded-3xl p-8 sm:p-10 border border-[#363D28]/12 shadow-xs space-y-6 hover:border-[#363D28]/30 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="bg-[#D8E488] text-[#222918] text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full tracking-wider">
                {course.badge}
              </span>
              <span className="text-xs font-semibold text-[#363D28]/80 bg-[#FAF5EE] px-3 py-1 rounded-full border border-[#363D28]/10">
                {course.status}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-[#222918] uppercase">
                {course.title}
              </h2>
              <p className="text-base sm:text-lg font-serif italic text-[#5A6836]">
                {course.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#363D28]/90 leading-relaxed font-normal">
              {course.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#363D28]">
                ¿Qué incluye esta experiencia?
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#363D28]/85 font-normal">
                {course.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 bg-[#FAF5EE] p-3 rounded-xl border border-[#363D28]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#5A6836] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href={course.ctaAction}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#111111] hover:bg-[#363D28] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>{course.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FORMULARIO DE NOTIFICACIONES / Novedades */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="bg-[#222918] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8E488]">
              NOVEDADES Y PRÓXIMAS FECHAS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              ¿Quieres enterarte antes de abrir inscripciones?
            </h3>
            <p className="text-sm text-[#FAF7F2]/80 leading-relaxed">
              Déjanos tu nombre y correo para avisarte con prioridad sobre los nuevos retos y talleres en vivo organizados por Anatolia Zapata.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#FAF5EE] text-[#222918] p-8 rounded-2xl text-center space-y-3 max-w-md mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#5A6836] mx-auto" />
              <h4 className="font-bold text-lg uppercase">¡Te has registrado con éxito!</h4>
              <p className="text-sm text-[#363D28]/80">
                Te mantendremos al tanto de las próximas convocatorias y cursos de RAÍZ.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-md mx-auto space-y-4">
              <input type="hidden" name="_subject" value="Nueva suscripción a Cursos y Retos RAÍZ" />
              <div>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Tu Nombre"
                  className="w-full px-4 py-3.5 rounded-xl bg-white text-[#222918] text-sm focus:outline-none focus:ring-2 focus:ring-[#D8E488]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Tu Correo Electrónico"
                  className="w-full px-4 py-3.5 rounded-xl bg-white text-[#222918] text-sm focus:outline-none focus:ring-2 focus:ring-[#D8E488]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D8E488] hover:bg-[#c8d870] text-[#222918] font-black text-xs sm:text-sm uppercase tracking-wider py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Registrando...</span>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Quiero recibir novedades</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
