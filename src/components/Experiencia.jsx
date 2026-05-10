// ============================================================
// 📅 EXPERIENCIA — Timeline de experiencia laboral
// ============================================================

import { useIntersectionObserver } from "../hooks/useFormulario";

// Iconos y colores por tipo de experiencia
const TIPO_CONFIG = {
  "tiempo-completo": { emoji: "💼", color: "text-cyan-400", bg: "bg-cyan-400" },
  "independiente": { emoji: "🧑‍💻", color: "text-violet-400", bg: "bg-violet-400" },
  "academia": { emoji: "🎓", color: "text-emerald-400", bg: "bg-emerald-400" },
};

export default function Experiencia({ experiencia }) {
  const [ref, esVisible] = useIntersectionObserver();

  return (
    <section
      id="experiencia"
      className="py-24 bg-gray-950"
      aria-labelledby="titulo-experiencia"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">04. MI RECORRIDO</p>
          <h2 id="titulo-experiencia" className="text-4xl font-black text-white">
            Experiencia laboral
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full" aria-hidden="true" />
        </div>

        {/* Timeline */}
        <ol className="relative" aria-label="Línea de tiempo de experiencia laboral">
          {/* Línea vertical del timeline */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent"
            aria-hidden="true"
          />

          {experiencia.map((item, idx) => {
            const config = TIPO_CONFIG[item.tipo] || TIPO_CONFIG["tiempo-completo"];

            return (
              <li
                key={item.id}
                className={`relative pl-16 sm:pl-20 pb-12 last:pb-0 transition-all duration-700 ${
                  esVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* Punto del timeline */}
                <div
                  className={`absolute left-4 sm:left-6 top-1 w-5 h-5 rounded-full border-2 border-gray-950 ${config.bg} flex items-center justify-center shadow-lg`}
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                </div>

                {/* Tarjeta de experiencia */}
                <div className="bg-gray-900/80 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors duration-300 group">
                  {/* Encabezado de la tarjeta */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {item.cargo}
                      </h3>
                      <p className={`font-semibold mt-0.5 ${config.color}`}>
                        {item.emoji} {item.empresa}
                      </p>
                    </div>

                    {/* Período */}
                    <time
                      className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-800 px-3 py-1.5 rounded-full whitespace-nowrap border border-white/5 font-mono"
                      dateTime={item.periodo}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.periodo}
                    </time>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.descripcion}
                  </p>

                  {/* Tecnologías usadas */}
                  <div className="flex flex-wrap gap-2" aria-label={`Tecnologías en ${item.empresa}`}>
                    {item.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-800 text-gray-400 text-xs rounded-lg border border-white/5 font-mono hover:border-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Educación al final del timeline */}
        <div
          className={`mt-16 p-6 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 border border-cyan-500/10 rounded-2xl transition-all duration-700 delay-500 ${
            esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            🎓 Formación académica
          </h3>
          <div className="space-y-3">
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <p className="text-white font-medium">Diseño Grafico</p>
                <p className="text-gray-400 text-sm">CESDE · Medellín</p>
              </div>
              <span className="text-gray-500 text-sm font-mono">2017 – 2019</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <p className="text-white font-medium">Asistente en Desarrollo de Software </p>
                <p className="text-gray-400 text-sm">CESDE · Medellín</p>
              </div>
              <span className="text-gray-500 text-sm font-mono">2024 – Presente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
