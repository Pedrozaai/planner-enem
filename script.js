// MENU LATERAL
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// NAVEGAÇÃO ENTRE ABAS
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-target");

    sections.forEach(section => {
      section.style.display = "none";
    });

    document.getElementById(target).style.display = "block";
  });
});

// MODO ESCURO
const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
});

// CARREGAR TEMA SALVO
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// PROGRESSO SIMPLES
function salvarProgresso(materia, valor) {
  localStorage.setItem(materia, valor);
}

function carregarProgresso(materia) {
  return localStorage.getItem(materia) || 0;
}
const botaoEntrar = document.getElementById("entrar");

botaoEntrar.addEventListener("click", function() {
  document.getElementById("auth-screen").classList.remove("active");
  document.getElementById("platform").classList.add("active");

  const meta = document.getElementById("goal").value;
  const tempo = document.getElementById("study-time").value;

  document.getElementById("goal-display").innerText = meta;
  document.getElementById("time-display").innerText = tempo + "h";
});
