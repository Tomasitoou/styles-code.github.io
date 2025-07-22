// ====================== REFERENCIAS A ELEMENTOS ======================
const searchInput = document.getElementById("searchInput");
const sugerencias = document.querySelectorAll(".sugerencia");
const loginBtn = document.getElementById("login");

// ====================== BUSCAR CON BOTONES DE SUGERENCIA ======================
sugerencias.forEach((btn) => {
  btn.addEventListener("click", () => {
    const hashtag = btn.textContent;
    searchInput.value = hashtag;
    aplicarFiltroBusqueda();
  });
});

// JS: Array de tips
const tips = [
  "Hoy es un buen día para combinar colores cálidos ☀️",
  "Atrévete con prendas oversized para un look relajado 😌",
  "Un accesorio puede transformar todo tu outfit 🧢💍",
  "Hoy mezcla texturas: denim + cuero = 💥",
  "Dale vida a tu look con un estampado atrevido 🐆",
  "Recuerda: tu estilo, tus reglas. Sé tú. ✨",
  "Colores neutros = elegancia sin esfuerzo 🤍🖤",
  "Hoy usa algo que nunca te hayas atrevido a usar 👀",
  "Capas ligeras son clave para el clima impredecible 🌦️"
];

// Selecciona un tip aleatorio
const tipDelDia = tips[Math.floor(Math.random() * tips.length)];
document.getElementById("tip-texto").textContent = tipDelDia;

