// ============================================================
// 📦 DATOS DEL PORTAFOLIO
// Acá se define toda tu info personal, proyectos, habilidades, etc. Luego se importa en los componentes para mostrarla.
// ============================================================

export const infoPersonal = {
  nombre: "Jhordan Pineda",
  rol: "Desarrollador Full Stack",
  descripcionCorta: "Construyo experiencias web que la gente ama usar.",
  descripcionLarga:
    "Soy un desarrollador de software apasionado por crear soluciones digitales que combinan un código limpio con una experiencia de usuario excepcional. Me encanta aprender nuevas tecnologías y resolver problemas complejos de forma elegante. Trabajo con equipos ágiles y siempre estoy buscando nuevas oportunidades para crecer profesionalmente.",
  ubicacion: "Medellín, Colombia 🇨🇴",
  correo: "jhordanpineda88@gmail.com",
  github: "https://github.com/JhordanP300",
  linkedin: "https://www.linkedin.com/in/jhordan-andr%C3%A9s-pineda-a7b6b81ab",
  cv: "/Hoja_Vida_Jhordan.pdf",
};

// ============================================================
// 🛠️ HABILIDADES TÉCNICAS
// nivel: del 0 al 100 (representa el porcentaje de dominio)
// ============================================================
export const habilidades = [
  {
    categoria: "Frontend",
    items: [
      { nombre: "JavaScript", nivel: 90, icono: "🟨" },
      { nombre: "HTML5 & CSS3", nivel: 92, icono: "🌐" },
      { nombre: "React.js", nivel: 70, icono: "⚛️" },
      { nombre: "Tailwind CSS", nivel: 85, icono: "🎨" },
      { nombre: "TypeScript", nivel: 60, icono: "🔷" },
      { nombre: "Next.js", nivel: 60, icono: "⚫" },
    ],
  },
  {
    categoria: "Backend",
    items: [
      { nombre: "Java", nivel: 90, icono: "☕" },
      { nombre: "SQL", nivel: 80, icono: "🗄️" },
      { nombre: "Node.js", nivel: 60, icono: "🟢" },
    ],
  },
  {
    categoria: "Herramientas",
    items: [
      { nombre: "Git & GitHub", nivel: 90, icono: "🐙" },
      { nombre: "Power BI", nivel: 80, icono: "📊" },
      { nombre: "Figma", nivel: 60, icono: "✏️" },

    ],
  },
];

// ============================================================
// 💼 PROYECTOS
// Reemplaza con tus proyectos reales
// ============================================================
export const proyectos = [
  {
    id: 1,
    nombre: "Pin and Print",
    descripcion: "Catalogo de camisas personalizadas, completa con carrito de compras. Permite a los usuarios elegir diseños, seleccionar su favorito y agregar al carrito.",
    tecnologias: ["React", "Node.js", "Next.js", "Tailwind CSS", "Javascript"],
    imagen: true,
    imagenArchivo: "pinandprint",
    /* githubUrl: "", */
    demoUrl: "https://catalogo-pinandprint.vercel.app/",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Portafolio web Personal",
    descripcion:
      "Portafolio web personal construido con React y Tailwind, diseñado para mostrar proyectos, habilidades y experiencia laboral de manera atractiva y profesional. Incluye secciones de introducción, habilidades técnicas, proyectos destacados y contacto.",
    tecnologias: ["React", "tailwind CSS", "JavaScript"],
    imagen: true,
    imagenArchivo: "Portafolio",
    demoUrl: "https://desarrollador-jp.vercel.app/",
    /* githubUrl: "", */
    destacado: false,
  },
];

// ============================================================
// 🏢 EXPERIENCIA LABORAL
// ============================================================
export const experiencia = [
  {
    id: 3,
    empresa: "Freelance",
    cargo: "Desarrollador Web Independiente",
    periodo: "Dic 2025 - Presente",
    descripcion:
      "Trabajé con clientes locales en Medellín, desarrollando sitios web, tiendas virtuales y aplicaciones personalizadas.",
    tecnologias: ["WordPress", "React", "JavaScript", "MySQL"],
    tipo: "independiente",
  },

];
