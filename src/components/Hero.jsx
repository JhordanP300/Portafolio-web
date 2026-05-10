// ============================================================
// 🦸 HERO — Sección de presentación principal
// ============================================================

import { useEffect, useState } from "react";

// Palabras que van rotando en el efecto de escritura
const ROLES = [
  "Desarrollador Full Stack",
  "Apasionado del código limpio",
  "Constructor de experiencias web",
  "Solucionador de problemas",
];

export default function Hero({ info }) {
  const [rolActual, setRolActual] = useState(0);
  const [texto, setTexto] = useState("");
  const [escribiendo, setEscribiendo] = useState(true);

  // ✨ Efecto de máquina de escribir
  useEffect(() => {
    const rolCompleto = ROLES[rolActual];
    let timeout;

    if (escribiendo) {
      if (texto.length < rolCompleto.length) {
        timeout = setTimeout(() => {
          setTexto(rolCompleto.slice(0, texto.length + 1));
        }, 80);
      } else {
        // Pausa antes de borrar
        timeout = setTimeout(() => setEscribiendo(false), 2000);
      }
    } else {
      if (texto.length > 0) {
        timeout = setTimeout(() => {
          setTexto(texto.slice(0, -1));
        }, 40);
      } else {
        setRolActual((prev) => (prev + 1) % ROLES.length);
        setEscribiendo(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [texto, escribiendo, rolActual]);

  const irAContacto = () => {
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const irAProyectos = () => {
    const el = document.getElementById("proyectos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Sección de presentación"
    >
      {/* Fondo con gradiente y efecto de puntos */}
      <div className="absolute inset-0 bg-gray-950">
        {/* Círculos decorativos con blur */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        />
        {/* Grid de puntos de fondo */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
      </div>

      {/* contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* // badge de disponibilidad
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          Disponible para nuevas oportunidades
        </div> */}

        {/* Saludo */}
        <p className="text-gray-400 text-lg mb-3 font-mono">
          Hola, me llamo
        </p>

        {/* Nombre principal */}
        <h1 className="text-5xl sm:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
          {info.nombre.split(" ")[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
            {info.nombre.split(" ")[1]}
          </span>
        </h1>

        {/* Rol con efecto de escritura */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            {texto}
            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-blink" aria-hidden="true" />
          </p>
        </div>

        {/* Descripción */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {info.descripcionCorta}{" "}
          {/* <span className="text-gray-300">Basado en {info.ubicacion}</span> */}
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={irAContacto}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-gray-950 font-bold rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            aria-label="Ir a la sección de contacto"
          >
            Contáctame
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
          </button>

          <button
            onClick={irAProyectos}
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-200"
            aria-label="Ver mis proyectos"
          >
            Ver mis proyectos
          </button>
        </div>

        {/* Links sociales */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110"
            aria-label="Ver perfil de GitHub de Jhordan Pineda"
          >
            {/* Ícono GitHub SVG */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href={info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110"
            aria-label="Ver perfil de LinkedIn de Jhordan Pineda"
          >
            {/* Ícono LinkedIn SVG */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={`mailto:${info.correo}`}
            className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110"
            aria-label={`Enviar correo a ${info.correo}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Flecha de scroll hacia abajo */}
        <div className="mt-16 flex justify-center" aria-hidden="true">
          <div className="flex flex-col items-center gap-2 text-gray-600 animate-bounce">
            <span className="text-xs font-mono">scroll</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
