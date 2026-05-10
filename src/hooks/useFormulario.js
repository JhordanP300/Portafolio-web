// ============================================================
// 🪝 HOOKS PERSONALIZADOS
// Lógica reutilizable separada de los componentes visuales
// ============================================================

import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
/**
 * useScrollspy — Detecta qué sección está visible en pantalla.
 * Útil para resaltar el link activo en el Navbar.
 * @param {string[]} ids - IDs de las secciones a observar
 * @param {number} offset - Margen superior en px
 */
export function useScrollspy(ids, offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const manejarScroll = () => {
      let encontrado = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            encontrado = id;
          }
        }
      }
      setActiveId(encontrado);
    };

    window.addEventListener("scroll", manejarScroll, { passive: true });
    manejarScroll(); // ejecutar al montar
    return () => window.removeEventListener("scroll", manejarScroll);
  }, [ids, offset]);

  return activeId;
}

/**
 * useIntersectionObserver — Detecta cuándo un elemento entra al viewport.
 * Útil para animar elementos cuando el usuario hace scroll.
 * @param {object} options - Opciones del IntersectionObserver
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [esVisible, setEsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEsVisible(true);
          observer.disconnect(); // Solo animar una vez
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, esVisible];
}

/**
 * useFormulario — Maneja el estado y validación de formularios.
 * @param {object} valoresIniciales - Valores por defecto del formulario
 */
export function useFormulario(valoresIniciales) {
  const [valores, setValores] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setValores((prev) => ({ ...prev, [name]: value }));
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!valores.nombre?.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!valores.correo?.trim()) {
      nuevosErrores.correo = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(valores.correo)) {
      nuevosErrores.correo = "Ingresa un correo válido";
    }
    if (!valores.mensaje?.trim()) nuevosErrores.mensaje = "El mensaje es obligatorio";
    return nuevosErrores;
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    const nuevosErrores = validar();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setEnviando(true);

    try {
      // ← Reemplaza la simulación por EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: valores.nombre,
          from_email: valores.correo,
          subject: valores.asunto || "Sin asunto",
          message: valores.mensaje,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setEnviado(true);
      setValores(valoresIniciales);
      setTimeout(() => setEnviado(false), 5000);

    } catch (error) {
      console.error("Error al enviar:", error);
      setErrores({ general: "Hubo un error al enviar. Intenta de nuevo." });
    } finally {
      setEnviando(false);
    }
  };

  return { valores, errores, enviando, enviado, manejarCambio, manejarEnvio };
}