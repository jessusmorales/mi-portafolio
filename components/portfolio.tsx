"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const projects = [
  { title: "Hiraoka Services Portal", role: "Desarrollo backend", type: "Plataforma de servicios", category: "web", image: "/projects/hiraoka.png", href: "https://github.com/VictorRiveraT/Hiraoka-Services-Portal-PLM", description: "Portal empresarial para gestionar servicios, usuarios y flujos operativos con una arquitectura preparada para crecer.", tags: ["Backend", "Docker", "PostgreSQL", "Servicios"] },
  { title: "Predicción de deserción", role: "Desarrollo y análisis de datos", type: "Ciencia de datos", category: "data", image: "/projects/desercion.png", href: "https://github.com/VictorRiveraT/Prediccion-de-Desercion-de-Estudiantes-Universitarios", description: "Modelo predictivo para identificar factores asociados al abandono universitario y facilitar intervenciones tempranas.", tags: ["Python", "Machine Learning", "Data Analysis"] },
  { title: "DataDuino", role: "Desarrollo de software y hardware", type: "Sistemas embebidos", category: "systems", image: "/projects/dataduino.png", href: "https://github.com/tjipx71/DataDuino", description: "Prototipo con Arduino, electrónica digital, teclado matricial, salida VGA y diseño de circuito en KiCad.", tags: ["Arduino", "KiCad", "C++", "Electrónica"] },
  { title: "Solfeo UPCH", role: "Desarrollo frontend", type: "Producto educativo", category: "web", image: "/projects/solfeo.png", href: "https://github.com/Fx2048/SolfeoUPCH", description: "Experiencia digital interactiva que convierte el aprendizaje musical y el entrenamiento auditivo en una práctica accesible.", tags: ["Frontend", "React", "UX", "Educación"] },
  { title: "Simulación Blockchain", role: "Desarrollo backend", type: "Sistemas distribuidos", category: "systems", image: "/projects/blockchain.png", href: "https://github.com/VictorRiveraT/Simulaci-n-Blockchain_grupo-2", description: "Simulación colaborativa para comprender bloques, transacciones, consenso y comportamiento distribuido.", tags: ["Blockchain", "Backend", "Simulación"] },
  { title: "Videojuego 2D con Arquitectura Orientada a Objetos", role: "Desarrollo de gameplay y lógica", type: "Desarrollo de videojuegos", category: "web", image: "/projects/proyecto-2024.png", href: "https://github.com/jessusmorales/Proyecto-2024", description: "Videojuego desarrollado aplicando programación orientada a objetos, gestión de estados, mecánicas interactivas y organización modular del código.", tags: ["Game Development", "POO", "Lógica", "Git"] },
  { title: "Sistema IoT de Monitoreo de Calidad de Aceite", role: "Programación de Arduino, calibración de sensores y dashboard", type: "IoT e instrumentación", category: "systems", image: "/projects/ingenieria.png", href: "https://github.com/VictorRiveraT/Proyectos-de-Ingenier-a-1", description: "Sistema para evaluar aceite de cocina reutilizado mediante mediciones de capacitancia y turbidez, integrando sensores calibrados, adquisición con Arduino y visualización en un dashboard.", tags: ["Arduino", "Sensores", "Calibración", "Dashboard", "IoT"] }
];

const capabilities = [
  { number: "01", icon: "⌘", title: "Frontend", description: "Interfaces modernas, accesibles y responsive que priorizan claridad, interacción y rendimiento.", skills: ["Next.js y React", "TypeScript y JavaScript", "HTML y CSS moderno"] },
  { number: "02", icon: "⌁", title: "Backend", description: "Servicios y lógica de negocio mantenibles, con atención a seguridad, datos y despliegue.", skills: ["APIs REST", "SQL y PostgreSQL", "Docker y arquitectura"] },
  { number: "03", icon: "◫", title: "Datos e IA", description: "Análisis, visualización y modelos predictivos para convertir datos en decisiones accionables.", skills: ["Python y notebooks", "Machine Learning", "Métricas y visualización"] },
  { number: "04", icon: "◇", title: "Sistemas", description: "Exploración práctica de tecnologías emergentes y soluciones interdisciplinarias.", skills: ["Arduino y KiCad", "Blockchain", "Prototipado técnico"] }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const result = await response.json();
    setStatus(response.ok ? "Mensaje enviado. Gracias por escribir." : result.error);
    if (response.ok) form.reset();
    setSending(false);
  }

  return (
    <>
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#inicio">JM<span>.</span></a>
          <button className="menu-toggle" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}>
            <a href="#perfil">Perfil</a><a href="#capacidades">Capacidades</a><a href="#proyectos">Proyectos</a><a href="#contacto" className="nav-cta">Hablemos</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="inicio">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Disponible para prácticas, roles junior y freelance</p>
            <h1>Construyo soluciones que conectan <em>software, datos y producto.</em></h1>
            <p className="hero-lead">Soy Jesús Morales, estudiante de séptimo ciclo de Ingeniería Informática en la UPCH. Trabajo como desarrollador frontend o backend y disfruto convertir retos complejos en productos digitales claros, confiables y útiles.</p>
            <div className="hero-actions"><a className="button primary" href="#proyectos">Explorar proyectos <span>↘</span></a><a className="button ghost" href="mailto:moralesalvaradojesus1@gmail.com">Escribirme</a></div>
            <div className="hero-meta"><div><strong>07</strong><span>proyectos seleccionados</span></div><div><strong>Full Stack</strong><span>frontend y backend</span></div><div><strong>Lima</strong><span>Perú · remoto</span></div></div>
          </div>
          <div className="hero-visual reveal">
            <div className="portrait-frame"><div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" /><Image src="/jesus-morales.jpg" alt="Retrato profesional de Jesús Morales" fill priority sizes="(max-width: 950px) 280px, 410px" /><div className="floating-card card-code"><span>Actualmente</span><strong>7.º ciclo · UPCH</strong></div><div className="floating-card card-focus"><span>Enfoque</span><strong>Frontend + Backend</strong></div></div>
          </div>
        </section>

        <div className="tech-strip" aria-label="Tecnologías">
          <div className="container">
            {["Next.js", "React", "TypeScript", "Node.js", "Docker", "PostgreSQL", "Python", "Data Science", "Arduino", "Git"].map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>

        <section className="section container" id="perfil">
          <div className="section-heading reveal"><p className="kicker">01 / Perfil</p><h2>Versatilidad técnica con foco en <em>resolver.</em></h2></div>
          <div className="profile-grid">
            <article className="profile-statement reveal"><p className="large-copy">Puedo moverme entre frontend, backend, datos y sistemas porque entiendo la tecnología como una herramienta para resolver, no como una lista de etiquetas.</p><p>En mis proyectos he asumido principalmente responsabilidades de desarrollo frontend o backend, colaborando en productos empresariales, experiencias educativas, modelos predictivos, sistemas embebidos y simulaciones distribuidas.</p><p>Busco prácticas, una posición junior o proyectos freelance donde pueda aportar capacidad de ejecución, criterio técnico y muchas ganas de seguir creciendo.</p><a className="text-link" href="#contacto">Conversemos sobre una oportunidad <span>→</span></a></article>
            <aside className="profile-facts reveal"><div className="fact"><span>Formación</span><strong>Ingeniería Informática</strong><small>Universidad Peruana Cayetano Heredia</small></div><div className="fact"><span>Etapa actual</span><strong>Séptimo ciclo</strong><small>Aprendizaje continuo y trabajo colaborativo</small></div><div className="fact"><span>Stack</span><strong>Next, React, Docker, datos y más</strong><small>Selección de herramientas según el problema</small></div><div className="fact"><span>Idiomas</span><strong>Español · Inglés intermedio</strong><small>Comunicación técnica y profesional</small></div></aside>
          </div>
        </section>

        <section className="section capabilities" id="capacidades"><div className="container"><div className="section-heading reveal"><p className="kicker">02 / Capacidades</p><h2>Un perfil integral, sustentado en <em>trabajo real.</em></h2></div><div className="capability-grid">{capabilities.map((item) => <article className="capability reveal" key={item.title}><span>{item.number}</span><div className="cap-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.description}</p><ul>{item.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>

        <section className="section container" id="proyectos">
          <div className="section-heading project-heading reveal"><div><p className="kicker">03 / Proyectos</p><h2>Cada proyecto es una forma de <em>demostrar.</em></h2></div><div className="project-filters">{[["all", "Todos"], ["web", "Web"], ["data", "Datos"], ["systems", "Sistemas"]].map(([value, label]) => <button key={value} className={`filter ${filter === value ? "active" : ""}`} onClick={() => setFilter(value)}>{label}</button>)}</div></div>
          <div className="projects-grid">{projects.filter((project) => filter === "all" || project.category === filter).map((project, index) => <article className="project reveal visible" key={project.title}><a className="project-media" href={project.href} target="_blank" rel="noreferrer"><Image src={project.image} alt={`Representación visual de ${project.title}`} fill sizes="(max-width: 650px) 100vw, 50vw" /><span>Ver repositorio ↗</span></a><div className="project-body"><div className="project-top"><p>{project.type}</p><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{project.title}</h3><strong className="project-role">{project.role}</strong><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </section>

        <section className="section contact-section" id="contacto"><div className="container contact-grid"><div className="contact-copy reveal"><p className="kicker">04 / Contacto</p><h2>¿Construimos algo que <em>importe?</em></h2><p>Estoy abierto a prácticas, posiciones junior y proyectos freelance. Cuéntame sobre tu equipo, producto o reto.</p><div className="contact-links"><a href="mailto:moralesalvaradojesus1@gmail.com"><span>Correo</span><strong>moralesalvaradojesus1@gmail.com</strong></a><a href="https://github.com/jessusmorales" target="_blank" rel="noreferrer"><span>GitHub</span><strong>@jessusmorales ↗</strong></a><a href="https://www.linkedin.com/in/jes%C3%BAs-anselmo-morales-alvarado-6912aa294/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Jesús Morales ↗</strong></a></div></div><form className="contact-form reveal" onSubmit={sendMessage}><input className="honey" name="company" tabIndex={-1} autoComplete="off" /><div className="field"><label htmlFor="name">Tu nombre</label><input id="name" name="name" placeholder="¿Cómo te llamas?" required /></div><div className="field"><label htmlFor="email">Tu correo</label><input id="email" name="email" type="email" placeholder="nombre@empresa.com" required /></div><div className="field"><label htmlFor="message">Cuéntame sobre la oportunidad</label><textarea id="message" name="message" rows={5} placeholder="Proyecto, puesto o idea..." required /></div><button className="button primary submit" disabled={sending}>{sending ? "Enviando..." : "Enviar mensaje →"}</button><p className="form-status" role="status">{status}</p></form></div></section>
      </main>
      <footer className="footer container"><a className="brand" href="#inicio">JM<span>.</span></a><p>Jesús Morales · Ingeniería Informática · {new Date().getFullYear()}</p><a href="#inicio">Volver arriba ↑</a></footer>
    </>
  );
}
