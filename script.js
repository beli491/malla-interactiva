const cursos = [
  { nombre: "Matemática I", semestre: 1 },
  { nombre: "Programación I", semestre: 1 },
  { nombre: "Álgebra Lineal", semestre: 2 },
  { nombre: "Estructura de Datos", semestre: 2 },
];

const malla = document.getElementById("malla");

cursos.forEach((curso) => {
  const div = document.createElement("div");
  div.className = "curso";
  div.innerText = curso.nombre;

  // Evento de clic para cambiar estado
  div.onclick = () => {
    if (div.classList.contains("aprobado")) {
      div.classList.remove("aprobado");
      div.classList.add("reprobado");
    } else if (div.classList.contains("reprobado")) {
      div.classList.remove("reprobado");
    } else {
      div.classList.add("aprobado");
    }
  };

  malla.appendChild(div);
});
