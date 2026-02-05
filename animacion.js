const snowContainer = document.querySelector('#home'); // Seleccionar sección específica

// Lista de íconos que quieres que caigan
const icons = ["💻", "💻", "👾", "🧑🏻‍💻", "🎮"]


const createSnowflake = () => {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // Elegir un icono aleatorio
  snowflake.textContent = icons[Math.floor(Math.random() * icons.length)];

  // Estilos variados
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 10 + "s";
  snowflake.style.fontSize = Math.random() * 40 + 140 + "px";
  snowflake.style.opacity = Math.random() * 0.95 + 0.45;


  snowContainer.appendChild(snowflake);

  // Quitar el icono cuando desaparezca
  setTimeout(() => {
    snowflake.remove();
  }, 8000);
};


// Crear íconos continuamente
setInterval(createSnowflake, 1600);