document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("botonFavoritos");
  const panel = document.getElementById("panelFavoritos");
  const contenedor = document.querySelector(".contenedor-favs");

  if (!boton || !panel || !contenedor) return;

  // Mostrar u ocultar el panel
  boton.addEventListener("click", () => {
    panel.classList.toggle("oculto");
    mostrarFavoritos();
  });

  // Mostrar los favoritos guardados
  mostrarFavoritos();

  // Doble clic en imágenes para agregar a favoritos
  const imagenes = document.querySelectorAll("img");
  imagenes.forEach((img) => {
    img.addEventListener("dblclick", () => {
      agregarAFavoritos(img.src);
      mostrarToastFavorito();
    });
  });
});

// Agrega una imagen a favoritos si no está ya
function agregarAFavoritos(src) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  if (!favoritos.includes(src)) {
    favoritos.push(src);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

// Muestra los favoritos en el panel
function mostrarFavoritos() {
  const contenedor = document.querySelector(".contenedor-favs");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  favoritos.forEach((src, index) => {
    const div = document.createElement("div");
    div.classList.add("favorito-item");

    const img = document.createElement("img");
    img.src = src;
    img.style.width = "100px";

    const eliminar = document.createElement("button");
    eliminar.textContent = "X";
    eliminar.onclick = () => {
      eliminarFavorito(index);
      mostrarFavoritos();
    };

    div.appendChild(img);
    div.appendChild(eliminar);
    contenedor.appendChild(div);
  });
}

// Elimina un favorito según su índice
function eliminarFavorito(index) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  favoritos.splice(index, 1);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// Muestra una notificación temporal
function mostrarToastFavorito() {
  const toast = document.createElement("div");
  toast.classList.add("toast-favorito");
  toast.textContent = "¡Añadido a favoritos!";
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "100px",
    right: "30px",
    backgroundColor: "#c060f6",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: 9999,
    fontWeight: "bold"
  });
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}
