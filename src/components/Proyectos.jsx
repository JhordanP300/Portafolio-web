// ============================================================
// 💼 PROYECTOS — Cards con descripción, tecnologías y links
// Aqui utilizamos un diseño de tarjeta para mostrar cada proyecto, con una imagen destacada, descripción breve, tecnologías utilizadas y enlaces a GitHub y demo en vivo. Se incluye un botón para mostrar más proyectos si hay más de 3.
// las tecnologias que utilicé para crear este componente son: React, Tailwind CSS, JavaScript, Intersection Observer API para animaciones al hacer scroll, y un poco de lógica para manejar el estado de mostrar más o menos proyectos. Además, se implementan buenas prácticas de accesibilidad y SEO.
// ============================================================
import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useFormulario";
import Portafolio from '../../Portafolio-web.png';
import pinandprint from '../../pagina-pinandprint.png';

// Mapa de imágenes disponibles
const IMAGENES = {
  Portafolio,
  pinandprint,
};

// Colores de las tags por tecnología
const COLORES_TECH = {
  React: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  MongoDB: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  PostgreSQL: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Next.js": "bg-white/10 text-white border-white/20",
  TypeScript: "bg-blue-400/10 text-blue-300 border-blue-400/20",
  Python: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Docker: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  default: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

export default function Proyectos({ proyectos }) {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [ref, esVisible] = useIntersectionObserver();

  // Si no se muestran todos, solo muestra los 3 primeros
  const proyectosVisibles = mostrarTodos ? proyectos : proyectos.slice(0, 3);

  return (
    <section
      id="proyectos"
      className="py-24 bg-gray-900"
      aria-labelledby="titulo-proyectos"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">03. MI TRABAJO</p>
          <h2 id="titulo-proyectos" className="text-4xl font-black text-white">
            Proyectos destacados
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full" aria-hidden="true" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Una muestra de lo que he construido. Cada proyecto es una solución a un problema real.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center mx-auto max-w-4xl">
          {proyectosVisibles.map((proyecto, idx) => (
            <TarjetaProyecto
              key={proyecto.id}
              proyecto={proyecto}
              esVisible={esVisible}
              delay={idx * 100}
            />
          ))}
        </div>

        {/* Botón ver más / ver menos */}
        {proyectos.length > 3 && (
          <div
            className={`text-center mt-12 transition-all duration-700 delay-300 ${
              esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => setMostrarTodos(!mostrarTodos)}
              className="px-8 py-3 border border-cyan-500/30 text-cyan-400 font-medium rounded-xl hover:bg-cyan-500/5 hover:border-cyan-400 transition-all duration-200"
              aria-expanded={mostrarTodos}
            >
              {mostrarTodos ? "Ver menos proyectos ↑" : `Ver todos (${proyectos.length}) ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Componente: tarjeta de proyecto individual
// ─────────────────────────────────────────────
function TarjetaProyecto({ proyecto, esVisible, delay }) {
  const colorTech = (tech) => COLORES_TECH[tech] || COLORES_TECH.default;

  return (
    <article
      className={`group bg-gray-800/50 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 ${
        esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={`Proyecto: ${proyecto.nombre}`}
    >
      {/* Imagen / Placeholder del proyecto */}
      <div className="relative h-44 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
        {proyecto.imagen ? (
          <img
            src={IMAGENES[proyecto.imagenArchivo]}
            alt={`Captura de pantalla del proyecto ${proyecto.nombre}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          // Placeholder visual cuando no hay imagen
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-gray-600 text-xs font-mono">{proyecto.nombre}</span>
          </div>
        )}

        {/* Badge "Destacado" si aplica */}
        {proyecto.destacado && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium backdrop-blur-sm">
            ⭐ Destacado
          </div>
        )}
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2 leading-tight">
          {proyecto.nombre}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {proyecto.descripcion}
        </p>

        {/* Tags de tecnologías */}
        <div className="flex flex-wrap gap-2 mb-5" aria-label="Tecnologías utilizadas">
          {proyecto.tecnologias.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-xs rounded-lg border font-mono ${colorTech(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-white/5">
          {/* <a
            href={proyecto.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200 group/link"
            aria-label={`Ver código de ${proyecto.nombre} en GitHub`}
          >
            <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Código
          </a> */}
          <a
            href={proyecto.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200 group/link ml-auto"
            aria-label={`Ver demo en vivo de ${proyecto.nombre}`}
          >
            Demo en vivo
            <svg className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
