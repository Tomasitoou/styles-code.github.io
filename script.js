// ====================== REFERENCIAS A ELEMENTOS ======================
const searchInput = document.getElementById("searchInput");
const sugerencias = document.querySelectorAll(".sugerencia");
const favoritosContainer = document.querySelector(".contenedor-favs");
const loginBtn = document.getElementById("login");

// ====================== FUNCIÓN: AÑADIR FAVORITOS ======================
function añadirEventosFavoritos() {
  const outfits = document.querySelectorAll(".outfit");

  outfits.forEach((outfit) => {
    outfit.addEventListener("dblclick", () => {
      const outfitClone = outfit.cloneNode(true);
      outfitClone.classList.add("favorito-mini");

      // Verificar si ya existe
      const yaExiste = Array.from(favoritosContainer.children).some(fav =>
        fav.querySelector("img").src === outfit.querySelector("img").src
      );

      if (!yaExiste) {
        // Crear botón de eliminar
        const botonEliminar = document.createElement("button");
      botonEliminar.classList.add("btn-eliminar");
      botonEliminar.innerHTML = `<img src="img/boton-eliminar.png" alt="Eliminar" />`; // ← Aquí colocas tu ícono

        outfitClone.appendChild(botonEliminar);

        // Evento para eliminar
        botonEliminar.addEventListener("click", () => {
          outfitClone.remove();
        });

        favoritosContainer.appendChild(outfitClone);
        favoritosContainer.appendChild(outfitClone);
mostrarToastFavorito(); // ← Añádelo aquí

      }
    });
  });
}

// ====================== MODAL DE INICIO DE SESIÓN ======================
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const loginModal = document.createElement("div");
  loginModal.classList.add("login-modal");

  loginModal.innerHTML = `
    <div class="login-container">
      <!-- Lado izquierdo con el logo -->
      <div class="login-left">
        <img src="img/logo_styles.png" alt="Logo Styles" />
      </div>

      <!-- Lado derecho con el formulario -->
      <div class="login-right">
        <h2>Iniciar sesión</h2>
        <input type="text" id="usernameInput" placeholder="Usuario" />
        <input type="password" id="passwordInput" placeholder="Contraseña" />
        <button id="iniciarSesionBtn">Entrar</button>
        <p class="register-text">¿No tienes una cuenta? <a href="#">Regístrate</a></p>
        <button id="cerrar-modal" style="margin-top: 15px; background-color: #eee; color: #444;">Cerrar</button>
      </div>
    </div>
  `;

  document.body.appendChild(loginModal);

  // Cerrar modal
  document.getElementById("cerrar-modal").addEventListener("click", () => {
    loginModal.remove();
  });

  // Iniciar sesión
  document.getElementById("iniciarSesionBtn").addEventListener("click", () => {
    const username = document.getElementById("usernameInput").value.trim();

    if (username !== "") {
      loginModal.remove();

      // Cambiar texto del botón de login
      // Reemplazar botón por nombre de usuario
            const userDisplay = document.createElement("div");
            userDisplay.classList.add("user-display");
            userDisplay.innerHTML = `<span> ${username}</span>`;

loginBtn.replaceWith(userDisplay);


      // Mostrar mensaje emergente de bienvenida
      const bienvenida = document.createElement("div");
      bienvenida.classList.add("bienvenida-popup");
      bienvenida.innerHTML = `
        <div class="popup-content">
          <img src="img/logo_styles.png" alt="Logo Styles" />
          <p>¡Bienvenido, <strong>${username}</strong>! Estás listo para entrar en tendencia ✨</p>
        </div>
      `;
      document.body.appendChild(bienvenida);

      setTimeout(() => {
        bienvenida.remove();
      }, 3000);
    } else {
      alert("Por favor ingresa un nombre de usuario.");
    }
  });
});

// ====================== BUSCAR CON BOTONES DE SUGERENCIA ======================
sugerencias.forEach((btn) => {
  btn.addEventListener("click", () => {
    const hashtag = btn.textContent;
    searchInput.value = hashtag;
    aplicarFiltroBusqueda();
  });
});

// ====================== FUNCIONALIDAD DE BÚSQUEDA ======================
function aplicarFiltroBusqueda() {
  const query = searchInput.value.toLowerCase();
  const outfits = document.querySelectorAll(".outfit");

  outfits.forEach((outfit) => {
    const etiquetas = outfit.querySelectorAll(".etiqueta");
    let coincide = false;

    etiquetas.forEach((etiqueta) => {
      if (etiqueta.textContent.toLowerCase().includes(query)) {
        coincide = true;
      }
    });

    outfit.style.display = coincide ? "block" : "none";
  });
}

searchInput.addEventListener("input", aplicarFiltroBusqueda);

// ====================== INICIAR FUNCIONES UNA VEZ CARGADO EL DOM ======================
document.addEventListener("DOMContentLoaded", () => {
  añadirEventosFavoritos();
});
// Mostrar/Ocultar el panel de favoritos
const botonFavoritos = document.getElementById("botonFavoritos");
const panelFavoritos = document.getElementById("panelFavoritos");

botonFavoritos.addEventListener("click", () => {
  panelFavoritos.classList.toggle("oculto");
});

function mostrarToastFavorito() {
  const toast = document.createElement("div");
  toast.classList.add("toast-favorito");
  toast.textContent = "¡Añadido a favoritos!";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000); // Duración del mensaje
}

