// ============================================================
// 📬 CONTACTO — Formulario funcional (con validación simulada)
// ============================================================

import { useIntersectionObserver, useFormulario } from "../hooks/useFormulario";

export default function Contacto({ info }) {
  const [ref, esVisible] = useIntersectionObserver();

  // Hook personalizado que maneja el estado del formulario
  const { valores, errores, enviando, enviado, manejarCambio, manejarEnvio } =
    useFormulario({ nombre: "", correo: "", asunto: "", mensaje: "" });

  return (
    <section
      id="contacto"
      className="py-24 bg-gray-900"
      aria-labelledby="titulo-contacto"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">05. HABLEMOS</p>
          <h2 id="titulo-contacto" className="text-4xl font-black text-white">
            ¡Contáctame!
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full" aria-hidden="true" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            ¿Tienes un proyecto en mente o una oferta laboral?{" "}
            <span className="text-gray-300">Escríbeme, no muerdo 😄</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-11">
          {/* Info de contacto — izquierda */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-100 ${
              esVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <InfoContacto
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              titulo="Correo electrónico"
              valor={info.correo}
            />
            <InfoContacto
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
              titulo="LinkedIn"
              valor="linkedin.com/in/jhordan-andrés-pineda-a7b6b81ab"
              href={info.linkedin}
              externo
            />
            <InfoContacto
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              }
              titulo="GitHub"
              valor="github.com/JhordanP300"
              href={info.github}
              externo
            />

            {/* Mensaje motivador */}
            <div className="mt-8 p-5 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 border border-cyan-500/10 rounded-2xl">
              <p className="text-gray-400 text-sm leading-relaxed">
                💬 Respondo en menos de <span className="text-cyan-400 font-medium">24 horas</span>.
                Ya sea para colaborar en un proyecto, resolver dudas o simplemente conectar.
                ¡Siempre estoy abierto a nuevas oportunidades!
              </p>
            </div>
          </div>

          {/* Formulario — derecha */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              esVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Mensaje de éxito */}
            {enviado && (
              <div
                role="alert"
                className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 text-green-400"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-medium">
                  ¡Mensaje enviado con éxito! Te responderé muy pronto 🎉
                </p>
              </div>
            )}

            <form
              onSubmit={manejarEnvio}
              noValidate
              aria-label="Formulario de contacto"
              className="bg-gray-800/50 border border-white/5 rounded-2xl p-8 space-y-5"
            >
              {/* Nombre y correo en una fila */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <CampoFormulario
                  id="nombre"
                  label="Nombre"
                  type="text"
                  name="nombre"
                  value={valores.nombre}
                  onChange={manejarCambio}
                  error={errores.nombre}
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
                <CampoFormulario
                  id="correo"
                  label="Correo electrónico"
                  type="email"
                  name="correo"
                  value={valores.correo}
                  onChange={manejarCambio}
                  error={errores.correo}
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                />
              </div>

              <CampoFormulario
                id="asunto"
                label="Asunto (opcional)"
                type="text"
                name="asunto"
                value={valores.asunto}
                onChange={manejarCambio}
                placeholder="Oferta laboral, colaboración en proyecto, cotización..."
              />

              {/* Textarea para el mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={valores.mensaje}
                  onChange={manejarCambio}
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto o propuesta..."
                  required
                  aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
                  className={`w-full bg-gray-900 border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                    errores.mensaje
                      ? "border-red-500/50 focus:ring-red-500/20"
                      : "border-white/5 focus:ring-cyan-500/20 focus:border-cyan-500/30"
                  }`}
                />
                {errores.mensaje && (
                  <p id="error-mensaje" role="alert" className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errores.mensaje}
                  </p>
                )}
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={enviando}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-gray-950 font-bold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                aria-live="polite"
              >
                {enviando ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-gray-600 text-xs text-center">
                🔒 Tu información es confidencial. No se comparte con terceros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Componente: campo de formulario reutilizable
// ─────────────────────────────────────────────
function CampoFormulario({ id, label, type, name, value, onChange, error, placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
        {label} {type !== "text" || name === "nombre" ? <span className="text-red-400">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-describedby={error ? `error-${name}` : undefined}
        className={`w-full bg-gray-900 border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 transition-all ${
          error
            ? "border-red-500/50 focus:ring-red-500/20"
            : "border-white/5 focus:ring-cyan-500/20 focus:border-cyan-500/30"
        }`}
      />
      {error && (
        <p id={`error-${name}`} role="alert" className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Componente: bloque de info de contacto
// ─────────────────────────────────────────────
function InfoContacto({ icon, titulo, valor, href, externo }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 flex-shrink-0 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-0.5">{titulo}</p>
        <a
          href={href}
          target={externo ? "_blank" : undefined}
          rel={externo ? "noopener noreferrer" : undefined}
          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm break-all"
          aria-label={`${titulo}: ${valor}`}
        >
          {valor}
        </a>
      </div>
    </div>
  );
}
