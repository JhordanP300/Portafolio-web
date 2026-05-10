// ============================================================
// 🧭 NAVBAR — Barra de navegación superior
// ============================================================

import { useState, useEffect } from "react";
import { useScrollspy } from "../hooks/useFormulario";

// Links del menú de navegación
const LINKS_NAV = [
  { href: "sobre-mi", label: "Sobre mí" },
  { href: "habilidades", label: "Habilidades" },
  { href: "proyectos", label: "Proyectos" },
  { href: "experiencia", label: "Experiencia" },
  { href: "contacto", label: "Contacto" },
];

export default function Navbar({ nombre }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta qué sección está activa
  const seccionActiva = useScrollspy(
    LINKS_NAV.map((l) => l.href),
    80
  );

  // Agrega sombra al navbar cuando el usuario hace scroll
  useEffect(() => {
    const manejarScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", manejarScroll, { passive: true });
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  // Navegación suave al hacer click en un link
  const irA = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuAbierto(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      aria-label="Navegación principal"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nombre */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold text-white hover:text-cyan-400 transition-colors duration-200"
            aria-label="Ir al inicio"
          >
            <span className="text-cyan-400">&lt;</span>
            {nombre.split(" ")[0]}
            <span className="text-cyan-400">/&gt;</span>
          </button>

          {/* Links escritorio */}
          <ul className="hidden md:flex items-center gap-1" role="menubar">
            {LINKS_NAV.map((link) => (
              <li key={link.href} role="none">
                <button
                  role="menuitem"
                  onClick={() => irA(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    seccionActiva === link.href
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={seccionActiva === link.href ? "page" : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/Hoja_Vida_Jhordan.pdf "
                download
                className="ml-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold text-sm rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Descargar hoja de vida en PDF"
              >
                Descargar CV
              </a>
            </li>
          </ul>

          {/* Botón menú móvil */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-expanded={menuAbierto}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="sr-only">{menuAbierto ? "Cerrar" : "Abrir"} menú</span>
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuAbierto ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuAbierto ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Menú móvil desplegable */}
        {menuAbierto && (
          <div className="md:hidden border-t border-white/10 bg-gray-950/98 backdrop-blur-md">
            <ul className="py-3 px-2 space-y-1">
              {LINKS_NAV.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => irA(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      seccionActiva === link.href
                        ? "text-cyan-400 bg-cyan-400/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/Hoja_Vida_Jhordan.pdf"
                  download
                  className="block text-center px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold text-sm rounded-lg transition-all"
                >
                  Descargar CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
