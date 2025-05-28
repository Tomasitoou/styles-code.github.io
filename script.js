// ====================== REFERENCIAS A ELEMENTOS ======================
const searchInput = document.getElementById("searchInput");
const sugerencias = document.querySelectorAll(".sugerencia");
const loginBtn = document.getElementById("login");


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

