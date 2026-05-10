// ============================================================
// 👤 SOBRE MÍ — Perfil profesional y datos personales
// ============================================================

import { useIntersectionObserver } from "../hooks/useFormulario";

// Datos rápidos que aparecen como tarjetas pequeñas
const ESTADISTICAS = [
  { valor: "1+", label: "Años de experiencia" },
  { valor: "3+", label: "Proyectos completados" },
  { valor: "5+", label: "Clientes satisfechos" },
  { valor: "100%", label: "Compromiso con el código" },
];

export default function SobreMi({ info }) {
  // 🪄 Hook para animar cuando el elemento entra al viewport
  const [ref, esVisible] = useIntersectionObserver();

  return (
    <section
      id="sobre-mi"
      className="py-24 bg-gray-900"
      aria-labelledby="titulo-sobre-mi"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">01. CONÓCEME</p>
          <h2 id="titulo-sobre-mi" className="text-4xl font-black text-white">
            Sobre mí
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Avatar / Foto */}
          <div
            className={`flex justify-center lg:justify-start transition-all duration-700 delay-100 ${esVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
          >
            <div className="relative">
              {/* Marco decorativo */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-400 transform rotate-3 scale-105"
                aria-hidden="true"
              />
              {/* Imagen o placeholder */}
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden bg-gray-800 border border-white/10">
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-600">
                  <img src="/Jhordan.png" alt="Foto de Jhordan Pineda, desarrollador full stack" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Badge flotante */}
              <div
                className="absolute -bottom-4 -right-4 bg-gray-950 border border-white/10 rounded-xl px-4 py-2 shadow-xl"
                aria-hidden="true"
              >
                <p className="text-cyan-400 font-mono text-xs">{"<código limpio />"}</p>
              </div>
            </div>
          </div>

          {/* Texto y estadísticas */}
          <div
            className={`transition-all duration-700 delay-200 ${esVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Constructor de cosas con propósito 🚀
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p>{info.descripcionLarga}</p>
              <p>
                Cuando no estoy pegado al computador, me gusta{" "}
                <span className="text-gray-300">
                  tocar guitarra o batería, consultar nuevas tecnologías.
                </span>{" "}
              </p>
              <p>
                <span className="text-cyan-400 font-medium">Mi objetivo:</span>{" "}
                Unirme a un equipo donde pueda crecer, aportar valor y construir
                productos que impacten la vida de las personas.
              </p>
            </div>

            {/* Datos de contacto rápidos */}
            <div className="space-y-2 mb-8">
              <InfoItem icon="📍" label="Ubicación" valor={info.ubicacion} />
              <InfoItem icon="✉️" label="Correo" valor={info.correo} esLink={`mailto:${info.correo}`} />
              <InfoItem icon="💼" label="Disponibilidad" valor="Tiempo completo / Freelance" />
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-4">
              {ESTADISTICAS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-800/50 border border-white/5 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-colors duration-200"
                >
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                    {stat.valor}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente pequeño para cada fila de info
function InfoItem({ icon, label, valor, esLink }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true">{icon}</span>
      <span className="text-gray-500 text-sm w-24">{label}:</span>
      {esLink ? (
        <a href={esLink} className="text-gray-300 text-sm hover:text-cyan-400 transition-colors">
          {valor}
        </a>
      ) : (
        <span className="text-gray-300 text-sm">{valor}</span>
      )}
    </div>
  );
}
