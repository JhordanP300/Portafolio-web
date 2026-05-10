// ============================================================
// 🛠️ HABILIDADES — Tecnologías con barras de progreso animadas
// ============================================================

import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useFormulario";

export default function Habilidades({ habilidades }) {
  const [categoriaActiva, setCategoriaActiva] = useState(0);
  const [ref, esVisible] = useIntersectionObserver();

  const categoriaSeleccionada = habilidades[categoriaActiva];

  return (
    <section
      id="habilidades"
      className="py-24 bg-gray-950"
      aria-labelledby="titulo-habilidades"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">02. MI STACK</p>
          <h2 id="titulo-habilidades" className="text-4xl font-black text-white">
            Habilidades técnicas
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full" aria-hidden="true" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Las tecnologías con las que trabajo a diario. Siempre aprendiendo nuevas herramientas.
          </p>
        </div>

        {/* Tabs de categorías */}
        <div
          className={`flex justify-center mb-10 transition-all duration-700 delay-100 ${
            esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          role="tablist"
          aria-label="Categorías de habilidades"
        >
          <div className="flex gap-2 bg-gray-900 p-1 rounded-xl border border-white/5">
            {habilidades.map((cat, idx) => (
              <button
                key={cat.categoria}
                role="tab"
                aria-selected={categoriaActiva === idx}
                aria-controls={`panel-${cat.categoria}`}
                onClick={() => setCategoriaActiva(idx)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  categoriaActiva === idx
                    ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-gray-950 font-bold shadow-lg shadow-cyan-500/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat.categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Panel de habilidades */}
        <div
          id={`panel-${categoriaSeleccionada.categoria}`}
          role="tabpanel"
          aria-label={`Habilidades de ${categoriaSeleccionada.categoria}`}
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-5">
            {categoriaSeleccionada.items.map((skill, idx) => (
              <BarraHabilidad
                key={skill.nombre}
                skill={skill}
                esVisible={esVisible}
                delay={idx * 80}
              />
            ))}
          </div>
        </div>

        {/* Tecnologías extra como badges */}
        {/* <div
          className={`mt-16 text-center transition-all duration-700 delay-300 ${
            esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-500 text-sm mb-6 font-mono">También he trabajado con:</p>
          <div className="flex flex-wrap justify-center gap-3" aria-label="Otras tecnologías">
            {[
              "Redux", "GraphQL", "REST APIs", "Webpack", "Vite",
              "Linux", "CI/CD", "Scrum", "TDD", "Firebase",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-gray-900 border border-white/10 rounded-full text-gray-400 text-sm hover:border-cyan-500/30 hover:text-gray-300 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Componente: barra de progreso individual
// ─────────────────────────────────────────────
function BarraHabilidad({ skill, esVisible, delay }) {
  return (
    <div
      className="bg-gray-900 border border-white/5 rounded-xl p-5 hover:border-cyan-500/20 transition-colors duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">{skill.icono}</span>
          <span className="text-white font-medium">{skill.nombre}</span>
        </div>
        <span className="text-cyan-400 font-mono text-sm font-bold">
          {skill.nivel}%
        </span>
      </div>

      {/* Barra de progreso */}
      <div
        className="h-2 bg-gray-800 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={skill.nivel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Nivel de ${skill.nombre}: ${skill.nivel}%`}
      >
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: esVisible ? `${skill.nivel}%` : "0%",
            transitionDelay: `${delay + 300}ms`,
          }}
        />
      </div>
    </div>
  );
}
