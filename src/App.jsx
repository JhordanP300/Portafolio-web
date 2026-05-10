// ============================================================
// 🏠 APP.JSX — Componente raíz que une todo el portafolio
// ============================================================

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Experiencia from "./components/Experiencia";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappBottom";

// 👇 Importamos todos los datos mock desde un solo archivo
import {
  infoPersonal,
  habilidades,
  proyectos,
  experiencia,
} from "./data";

export default function App() {
  return (
    // Modo oscuro por defecto
    <div className="bg-gray-950 text-white min-h-screen">
      {/*
        📌 ESTRUCTURA DEL PORTAFOLIO
        Cada sección recibe sus datos como props.
        Para personalizar el portafolio, solo edita src/data/index.js
      */}

      {/* 🧭 Barra de navegación — siempre visible arriba */}
      <Navbar nombre={infoPersonal.nombre} />

      {/* Contenido principal con skip-link para accesibilidad */}
      <a
        href="#sobre-mi"
        className="sr-only focus:not-sr-only focus:fixed focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-gray-950 focus:rounded-lg focus:font-bold"
      >
        Saltar al contenido principal
      </a>

      <main id="contenido-principal">
        {/* 🦸 Hero — Presentación principal */}
        <Hero info={infoPersonal} />

        {/* 👤 Sobre mí */}
        <SobreMi info={infoPersonal} />

        {/* 🛠️ Habilidades técnicas */}
        <Habilidades habilidades={habilidades} />

        {/* 💼 Proyectos destacados */}
        <Proyectos proyectos={proyectos} />

        {/* 📅 Experiencia laboral */}
        <Experiencia experiencia={experiencia} />

        {/* 📬 Formulario de contacto */}
        <Contacto info={infoPersonal} />
      </main>

      {/* 🦶 Footer */}
      <Footer info={infoPersonal} />

      <WhatsAppButton />
      
    </div>



      
  );
}
