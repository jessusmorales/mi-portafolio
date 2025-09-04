// Lista de proyectos simulada
const proyectos = [
  { titulo: "Sistema de Gestión", desc: "Aplicación en Java para administrar inventarios." },
  { titulo: "Página Web Personal", desc: "Portafolio moderno con HTML, CSS y JS." },
  { titulo: "App de Tareas", desc: "Aplicación en React para gestión de tareas." },
  { titulo: "Análisis de Datos", desc: "Proyecto con Python y Pandas." }
];

// Botón para cargar proyectos
document.getElementById("cargar-proyectos").addEventListener("click", () => {
  const grid = document.getElementById("proyectos-grid");
  grid.innerHTML = "";
  proyectos.forEach(p => {
    const card = document.createElement("div");
    card.className = "p-6 bg-white rounded-xl shadow hover:shadow-lg transition";
    card.innerHTML = `<h3 class="text-xl font-bold mb-2">${p.titulo}</h3><p>${p.desc}</p>`;
    grid.appendChild(card);
  });
  document.getElementById("cargar-proyectos").style.display = "none";
});

// Validación formulario de contacto
document.getElementById("form-contacto").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("mensaje-exito").classList.remove("hidden");
  e.target.reset();
});
